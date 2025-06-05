import GpsData from "../types/backendResponses/GpsData";
import SimpleBuoy from "../types/backendResponses/SimpleBuoy";
import LocationData from "../types/LocationData.type";
import convertSimpleBuoyToLocationDataLatest from "../utils/convertSimpleBuoyToLocationData";
import extractLatLng from "../utils/extractLatLng";
import sortByBuoyDate from "../utils/sortByBuoyDate";

class BackendConnection {
    private static url: string = "";

    public static getBuoys(): LocationData[] {
        const response: SimpleBuoy[] = [ // trocar isso pela chamada real
            {
                _id: "1",
                name: "Boia 1",
                description: "Boia de teste 1",
                gpsData: [
                    {
                        _id: "1",
                        boiaId: "1",
                        timestamp: new Date().toISOString(),
                        latitude: -23.55052,
                        longitude: -46.633308
                    },
                    {
                        _id: "2",
                        boiaId: "1",
                        timestamp: new Date("2024-04-24").toISOString(),
                        latitude: -23.55052 + 0.001,
                        longitude: -46.633308 + 0.001
                    },
                    {
                        _id: "3",
                        boiaId: "1",
                        timestamp: new Date("2024-05-01").toISOString(),
                        latitude: -23.55052 + 0.006,
                        longitude: -46.633308 + 0.003
                    }
                ]
            },
            {
                _id: "2",
                name: "Boia 2",
                description: "Boia de teste 2",
                gpsData: [
                    {
                        _id: "4",
                        boiaId: "2",
                        timestamp: new Date().toISOString(),
                        latitude: -23.55052 + 0.002,
                        longitude: -46.633308 + 0.002
                    },
                    {
                        _id: "5",
                        boiaId: "2",
                        timestamp: new Date("2024-04-25").toISOString(),
                        latitude: -23.55052 + 0.003,
                        longitude: -46.633308 + 0.003
                    }
                ]
            }
        ]
        const locationDataList = convertSimpleBuoyToLocationDataLatest(response);
        if (!locationDataList) {
            return [];
        }
        return locationDataList;
    }

    public static getLocationHistory(buoyId: string, startDate: string, endDate: string): { latitude: number, longitude: number}[] {
        const response: GpsData[] = [ // trocar isso pela chamada real
            {
                _id: "1",
                boiaId: "1",
                timestamp: new Date().toISOString(),
                latitude: -23.55052,
                longitude: -46.633308
            },
            {
                _id: "2",
                boiaId: "1",
                timestamp: new Date("2024-04-24").toISOString(),
                latitude: -23.55052 + 0.001,
                longitude: -46.633308 + 0.001
            },
            {
                _id: "3",
                boiaId: "1",
                timestamp: new Date("2024-05-01").toISOString(),
                latitude: -23.55052 + 0.006,
                longitude: -46.633308 + 0.003
            }
        ]
        const organizedList = sortByBuoyDate(response)
        const latLngList = extractLatLng(organizedList)
        return latLngList;
    }
}

export default BackendConnection;