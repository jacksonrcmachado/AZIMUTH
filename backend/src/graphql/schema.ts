import { gql } from "apollo-server";
import { LoginService } from "../service/LoginService";
import { BoiaService } from "../service/BoiaService";
import { GPSModelClass } from "../model/GPSModel";
import { BoiaModelClass } from "../model/boiaModel";
import { UserService } from "../service/UserService";

const userService = new UserService();
const loginService = new LoginService();
const boiaService = new BoiaService();
const GPSModel = new GPSModelClass();
const boiaModel = new BoiaModelClass();

export const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
  }

  type GPSData {
    _id: ID!
    boiaId: String!
    timestamp: String!
    latitude: Float!
    longitude: Float!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Boia {
    _id: ID!
    name: String!
    description: String!
    frequencyAtTime: Float
    gpsData: [GPSData]
  }

  type Query {
    # Usuários
    getAllUsers: [User]
    me: User

    # Boias
    getGPSDataByBoia(boiaId: String!): [GPSData]
    getAllBoias: [Boia]
    getFrequencyByBoia(boiaId: String!): Float

    # GPS
    getGPSDataByBoiaInRange(
      boiaId: String!
      startDate: String!
      endDate: String!
    ): [GPSData]
  }

  type Mutation {
    # Usuários
    createUser(name: String, email: String, password: String): User
    updateUser(
      userId: String!
      name: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): AuthPayload!

    # GPS
    sendGPSData(
      boiaId: String!
      latitude: Float!
      longitude: Float!
      timestamp: String!
    ): GPSData

    # Boias
    createBoia(
      name: String!
      description: String!
      frequencyAtTime: Float
    ): Boia!
    updateBoia(
      boiaId: String!
      name: String
      description: String
      frequencyAtTime: Float
    ): Boia!
  }
`;

export const resolvers = {
  Query: {
    //? Usuários
    getAllUsers: async () => userService.getAllUsers(),

    me: (_: any, __: any, context: any) => {
      if (!context.user) throw new Error("Não Autenticado");
      return loginService.getMe(context.user._id);
    },

    //? Boias
    getAllBoias: async (_: any, __: any) => {
      return await boiaModel.getAllBoias();
    },
    getGPSDataByBoia: async (_: any, args: { boiaId: string }) => {
      return await GPSModel.getGPSDataByBoiaId(args.boiaId);
    },
    getFrequencyByBoia: async (_: any, { boiaId }: { boiaId: string }) => {
      const boia = await boiaModel.getBoiaById(boiaId);
      if (!boia) throw new Error("Boia não encontrada");
      return boia.frequencyAtTime;
    },

    //? GPS
    getGPSDataByBoiaInRange: async (
      _: any,
      args: { boiaId: string; startDate: string; endDate: string }
    ) => {
      return await GPSModel.getGPSDataByBoiaIdAndDateRange(
        args.boiaId,
        args.startDate,
        args.endDate
      );
    },
  },
  Mutation: {
    //? Usuários
    createUser: async (
      _: any,
      {
        name,
        email,
        password,
      }: { name: string; email: string; password: string }
    ) => {
      // Criando o usuário com os dados passados
      const user = { name, email, password };
      return userService.createUser(user);
    },
    updateUser: async (
      _: any,
      {
        userId,
        name,
        email,
        password,
      }: { userId: string; name: string; email: string; password: string }
    ) => {
      return userService.updateUser(userId, { name, email, password });
    },

    login: async (_parent: any, args: any, context: any) => {
      const { res } = context;

      try {
        // chama o serviço de login que já valida usuário e senha e gera o token
        const authPayload = await loginService.login(args.email, args.password);

        // seta o token no cookie
        res.cookie("token", authPayload.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 1000 * 60 * 60 * 24, // 1 dia
        });

        // retorna o token e o user
        return authPayload;
      } catch (error: any) {
        console.error("Erro no login:", error);
        throw new Error(error.message || "Erro ao fazer o login!");
      }
    },

    //? GPS
    sendGPSData: async (
      _: any,
      {
        boiaId,
        latitude,
        longitude,
        timestamp,
      }: {
        boiaId: string;
        latitude: number;
        longitude: number;
        timestamp: string;
      }
    ) => {
      return await GPSModel.createGPSData({
        boiaId,
        latitude,
        longitude,
        timestamp,
      });
    },

    //? Boias
    createBoia: async (
      _: any,
      {
        name,
        description,
        frequencyAtTime,
      }: { name: string; description: string; frequencyAtTime: number }
    ) => {
      return await boiaService.createBoia(name, description, frequencyAtTime);
    },

    updateBoia: async (
      _: any,
      {
        boiaId,
        name,
        description,
        frequencyAtTime,
      }: {
        boiaId: string;
        name?: string;
        description?: string;
        frequencyAtTime?: number;
      }
    ) => {
      const updateData: Partial<{
        name: string;
        description: string;
        frequencyAtTime: number;
      }> = {};
      if (name) updateData.name = name;
      if (description) updateData.description = description;
      if (frequencyAtTime !== undefined)
        updateData.frequencyAtTime = frequencyAtTime;

      return await boiaService.updateBoia(boiaId, updateData);
    },
  },
};
