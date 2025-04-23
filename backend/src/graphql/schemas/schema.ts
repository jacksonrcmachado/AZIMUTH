import { gql } from "apollo-server";
import { userController } from "../../controller/userController";

const UserController = new userController();

export const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
  }

  type Query {
    getAllUsers: [User]
  }

  type Mutation {
    createUser(name: String, email: String, password: String): User
  }
`;

export const resolvers = {
  Query: {
    getAllUsers: async () => UserController.getAllUsers(),
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
      console.log("resolver: ", user);
      return UserController.createUser(user);
    },
  },
};
