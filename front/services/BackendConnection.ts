import LocationData from "../types/LocationData.type";
import extractLatLng from "../utils/extractLatLng";
import sortByBuoyDate from "../utils/sortByBuoyDate";

class BackendConnection {
    private static url: string = "";

    public static getBuoys(): LocationData[] {
        const response: LocationData[] = [ // trocar isso pela chamada real
            {
                latitude: -23.55052,
                longitude: -46.633308,
                buoy: {
                    id: 1,
                    name: "Buoy 1",
                    description: "Essa é a primeira boia.",
                    isDeleted: false
                },
                createAt: new Date().toISOString()
            }
        ]
        return response;
    }

    public static getLocationHistory(buoyId: number, startDate: string, endDate: string): { latitude: number, longitude: number}[] {
        const response: LocationData[] = [ // trocar isso pela rota para pegar os dados do backend
            {
                latitude: -23.55352,
                longitude: -46.630308,
                buoy: {
                    id: buoyId,
                    name: "Buoy 1",
                    description: "Essa é a primeira boia.",
                    isDeleted: false
                },
                createAt: new Date("2023-10-01T13:00:00Z").toISOString()
            },
             {
                latitude: -23.55052,
                longitude: -46.633308,
                buoy: {
                    id: 1,
                    name: "Buoy 1",
                    description: "Essa é a primeira boia.",
                    isDeleted: false
                },
                createAt: new Date().toISOString()
            },
            {
                latitude: -23.55252,
                longitude: -46.631308,
                buoy: {
                    id: buoyId,
                    name: "Buoy 1",
                    description: "Essa é a primeira boia.",
                    isDeleted: false
                },
                createAt: new Date("2023-10-02T7:00:00Z").toISOString()
            },
            {
                latitude: -23.55152,
                longitude: -46.630308,
                buoy: {
                    id: buoyId,
                    name: "Buoy 1",
                    description: "Essa é a primeira boia.",
                    isDeleted: false
                },
                createAt: new Date("2023-10-03T08:00:00Z").toISOString()
            }
        ]
        const organizedList = sortByBuoyDate(response)
        const latLngList = extractLatLng(organizedList)
        return latLngList;
    }
}

export default BackendConnection;