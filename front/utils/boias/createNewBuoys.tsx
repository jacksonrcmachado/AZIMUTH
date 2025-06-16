import { api } from "../../api/api";
import ToastService from "../../services/alerts/alert";
import { GraphQLResponse } from "../../types/GraphQLError.type";

type BouysProps = {
  name: string;
  description: string;
  frequencyAtTime: number;
};

type CreateBuoysResponse = {
    createBoia: {
        _id: string;
        name: string;
        description: string;
        frequencyAtTime: number;
    } | null;
}

export const createNewBuoys = async (bouys: BouysProps) => {
  try {
    const mutation = `
  mutation {
    createBoia(
      name: "${bouys.name}",
      description: "${bouys.description}",
      frequencyAtTime: ${bouys.frequencyAtTime}
    ) {
      _id
      name
      description
      frequencyAtTime
    }
  }
`;
    const response = await api.post<GraphQLResponse<CreateBuoysResponse>>("", {
      query: mutation,
    });

    if (response.data.errors) {
      ToastService.error("Erro", response.data.errors[0].message);
      return true;
    }

    return response.data.data;
  } catch (error) {
    console.error("Erro ao criar usuário: ", error);
    throw error;
  }
  };