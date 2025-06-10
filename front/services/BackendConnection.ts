import { api } from "../api/api";
import GpsData from "../types/backendResponses/GpsData";
import SimpleBuoy from "../types/backendResponses/SimpleBuoy";
import { GraphQLResponse } from "../types/GraphQLError.type";
import LocationData from "../types/LocationData.type";
import convertSimpleBuoyToLocationDataLatest from "../utils/convertSimpleBuoyToLocationData";
import extractLatLng from "../utils/extractLatLng";
import sortByBuoyDate from "../utils/sortByBuoyDate";
import ToastService from "./alerts/alert";

class BackendConnection {
  private static url: string = "";

  public static async getBuoys(): Promise<LocationData[] | null> {
    try {
      const query = `
        {
          getAllBoias {
            _id
            name
            description
            frequencyAtTime
            gpsData {
              _id
              boiaId
              timestamp
              latitude
              longitude
            }
          }
        }
      `;

      const response = await api.post<
        GraphQLResponse<{ getAllBoias: SimpleBuoy[] }>
      >("", {
        query,
      });

      if (response.data.errors) {
        ToastService.error("Erro", response.data.errors[0].message);
        return null;
      }      

      const simpleBuoyList = response.data.data.getAllBoias;
      const locationDataList =
        convertSimpleBuoyToLocationDataLatest(simpleBuoyList);

      return locationDataList || [];
    } catch (error) {
      console.error("Erro ao buscar boias:", error);
      ToastService.error("Erro", "Não foi possível buscar as boias.");
      return null;
    }
  }
  public static async getLocationHistory(
    buoyId: string,
    startDate: string,
    endDate: string
  ): Promise<{ latitude: number; longitude: number }[] | null> {
    try {
      const query = `
            query ($boiaId: String!, $startDate: String!, $endDate: String!) {
              getGPSDataByBoiaInRange(boiaId: $boiaId, startDate: $startDate, endDate: $endDate) {
                _id
                boiaId
                timestamp
                latitude
                longitude
              }
            }
          `;

      const response = await api.post<
        GraphQLResponse<{ getGPSDataByBoiaInRange: GpsData[] }>
      >("", {
        query,
        variables: {
          boiaId: buoyId,
          startDate,
          endDate,
        },
      });

      if (response.data.errors) {
        ToastService.error("Erro", response.data.errors[0].message);
        return null;
      }

      const gpsDataList = response.data.data.getGPSDataByBoiaInRange;
      const organizedList = sortByBuoyDate(gpsDataList);
      const latLngList = extractLatLng(organizedList);

      return latLngList;
    } catch (error) {
      console.error("Erro ao buscar histórico de localização:", error);
      ToastService.error(
        "Erro",
        "Não foi possível buscar o histórico de localização."
      );
      return null;
    }
  }
}

export default BackendConnection;