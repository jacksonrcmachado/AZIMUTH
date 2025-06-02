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
                },
                createAt: new Date().toISOString()
            }
        ]
        return response;
    }
}

export default BackendConnection;