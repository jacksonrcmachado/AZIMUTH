import { gql } from "apollo-server";
import { userController } from "../controller/userController";
import { LoginService } from "../service/LoginService";
import { BoiaService } from "../service/BoiaService";
import { GPSModelClass } from "../model/GPSModel";
import { BoiaModelClass } from "../model/boiaModel";

const UserController = new userController();
const loginService = new LoginService();
const boiaService = new BoiaService();
const boiaModel = new BoiaModelClass();
const GPS = new GPSModelClass();

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
    gpsData: [GPSData]
  }

  type Query {
    getAllUsers: [User]
    me: User
    getGPSDataByBoia(boiaId: String!): [GPSData]
    getAllBoias: [Boia]
    getGPSDataByBoiaInRange(
      boiaId: String!
      startDate: String!
      endDate: String!
    ): [GPSData]
  }

  type Mutation {
    createUser(name: String, email: String, password: String): User
    login(email: String!, password: String!): AuthPayload!

    sendGPSData(
      boiaId: String!
      latitude: Float!
      longitude: Float!
      timestamp: String!
    ): GPSData

    createBoia(name: String!, description: String!): Boia!
    updateBoia(boiaId: String!, name: String, description: String): Boia!
  }
`;

export const resolvers = {
  Query: {
    getAllUsers: async () => UserController.getAllUsers(),

    me: (_: any, __: any, context: any) => {
      if (!context.user) throw new Error("Não Autenticado");
      return loginService.getMe(context.user._id);
    },

    getAllBoias: async (_: any, __: any) => {
      return await boiaModel.getAllBoias();
    },

    getGPSDataByBoia: async (_: any, args: { boiaId: string }) => {
      return await GPS.getGPSDataByBoiaId(args.boiaId);
    },

    getGPSDataByBoiaInRange: async (
      _: any,
      args: { boiaId: string; startDate: string; endDate: string }
    ) => {
      return await GPS.getGPSDataByBoiaIdAndDateRange(
        args.boiaId,
        args.startDate,
        args.endDate
      );
    },
  },
  Mutation: {
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
      return UserController.createUser(user);
    },

    // login: async (_: any, args: any) => {
    //   try {
    //     return await loginService.login(args.email, args.password);
    //   } catch (error: any) {
    //     console.error("Error no login: ", error);
    //     throw new Error(error.message || "Erro ao fazer o login!");
    //   }
    // },

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
      return await GPS.createGPSData({
        boiaId,
        latitude,
        longitude,
        timestamp,
      });
    },

    createBoia: async (
      _: any,
      { name, description }: { name: string; description: string }
    ) => {
      return await boiaService.createBoia(name, description);
    },

    updateBoia: async (
      _: any,
      {
        boiaId,
        name,
        description,
      }: { boiaId: string; name?: string; description?: string }
    ) => {
      const updateData: Partial<{ name: string; description: string }> = {};
      if (name) updateData.name = name;
      if (description) updateData.description = description;

      return await boiaService.updateBoia(boiaId, updateData);
    },
  },
};
