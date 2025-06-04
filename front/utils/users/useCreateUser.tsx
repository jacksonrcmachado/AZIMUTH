import { api } from "../../api/api";
import ToastService from "../../services/alerts/alert";
import { GraphQLResponse } from "../../types/GraphQLError.type";
import { UserProps } from "../../types/User.type";

type CreateUserResponse = {
  createUser: {
    _id: string;
    name: string;
    email: string;
  } | null;
};

export const useCreateUser = async (user: UserProps) => {
  try {
    const mutation = `
            mutation {
                createUser(
                    name: "${user.name}",
                    email: "${user.email}",
                    password: "${user.password}"
                ) {
                    _id
                    name
                    email
                    }
                }
        `;

    const response = await api.post<GraphQLResponse<CreateUserResponse>>("", {
      query: mutation,
    });

    if (response.data.errors) {
      ToastService.error("Erro", response.data.errors[0].message);
      return true;
    }

    return response.data.data.createUser;
  } catch (error) {
    console.error("Erro ao criar usuário: ", error);
    throw error;
  }
};
