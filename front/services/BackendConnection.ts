import LocationData from "../types/LocationData.type";

class BackendConnection {
    private static url: string = "";

    public static getBuoys(): LocationData[] {
        const response: LocationData[] = [
            {
                latitude: -23.55052,
                longitude: -46.633308,
                buoy: {
                    id: 1,
                    name: "Buoy 1",
                    description: "Essa é a primeira boia.",
                    isDeleted: false
                }
            },
            {
                latitude: -23.55152,
                longitude: -46.634308,
                buoy: {
                    id: 2,
                    name: "Buoy 2",
                    description: "Essa é a segunda boia.",
                    isDeleted: true
                }
            }
        ]
        return response;
    }
}

export default BackendConnection;