import { api } from "../../api/api";
import { GraphQLResponse } from "../../types/GraphQLError.type";
import { LoginResponse } from "../../types/LoginResponse.type";

export const useLogin = async (email: string, password: string) => {
  try {
    const mutation = `
            mutation {
        login(email: "${email}", password: "${password}") {
          token
          user {
            _id
            name
            email
          }
        }
      }
    `;

    const response = await api.post<GraphQLResponse<LoginResponse>>("", {
      query: mutation,
    });

    if (response.data.errors) {
      alert(response.data.errors[0].message);
      return null;
    }

    return response.data.data.login;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};
