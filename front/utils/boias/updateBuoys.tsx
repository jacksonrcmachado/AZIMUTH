import { api } from "../../api/api";
import ToastService from "../../services/alerts/alert";
import { GraphQLResponse } from "../../types/GraphQLError.type";

type UpdateBuoyProps = {
  boiaId: string;
  name?: string;
  description?: string;
  frequencyAtTime?: number;
};

type UpdateBuoyResponse = {
  updateBoia: {
    _id: string;
    name: string;
    description: string;
    frequencyAtTime: number;
  } | null;
};

export const updateBuoy = async (params: UpdateBuoyProps) => {
  console.log("Atualizando boia com os seguintes parâmetros:", params);

  if (!params.boiaId) {
    ToastService.error("Erro", "ID da bóia é obrigatório para atualização.");
    return null;
  }

  // Construir variáveis filtrando undefined ou valores inválidos
  const variables: Record<string, any> = {
    boiaId: params.boiaId,
  };

  if (params.name !== undefined && params.name !== "") {
    variables.name = params.name;
  }

  if (params.description !== undefined && params.description !== "") {
    variables.description = params.description;
  }

  if (params.frequencyAtTime !== undefined && !isNaN(params.frequencyAtTime)) {
    variables.frequencyAtTime = params.frequencyAtTime;
  }

  try {
    const mutation = `
        mutation UpdateBoia($boiaId: String!, $name: String, $description: String, $frequencyAtTime: Float) {
          updateBoia(boiaId: $boiaId, name: $name, description: $description, frequencyAtTime: $frequencyAtTime) {
            _id
            name
            description
            frequencyAtTime
          }
        }
      `;

    const response = await api.post<GraphQLResponse<UpdateBuoyResponse>>("", {
      query: mutation,
      variables,
    });

    if (response.data.errors) {
      ToastService.error("Erro", response.data.errors[0].message);
      return null;
    }

    return response.data.data?.updateBoia ?? null;
  } catch (error) {
    console.error("Erro ao atualizar boia: ", error);
    ToastService.error("Erro", "Erro ao atualizar boia");
    return null;
  }
};
  