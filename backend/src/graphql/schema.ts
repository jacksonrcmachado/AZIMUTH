import { gql } from "apollo-server";
import { userController } from "../controller/userController";
import { LoginService } from "../service/LoginService";

const UserController = new userController();
const loginService = new LoginService();

export const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    getAllUsers: [User]
    me: User
  }

  type Mutation {
    createUser(name: String, email: String, password: String): User
    login(email: String!, password: String!): AuthPayload!
  }
`;

export const resolvers = {
  Query: {
    getAllUsers: async () => UserController.getAllUsers(),

    me: (_: any, __: any, context: any) => {
      if (!context.user) throw new Error('Não Autenticado');
      return loginService.getMe(context.user._id);
    }
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

    login: async (_: any, args: any) => {
      try {
        return await loginService.login(args.email, args.password);
      } catch (error: any) {
        console.error("Error no login: ", error);
        throw new Error(error.message || "Erro ao fazer o login!")
      }
    }
  },

};
