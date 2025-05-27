import BuoyProps from "../types/BuoyProps.type";

class BackendConnection {
    private static url: string = "";

    public static getBuoys(): BuoyProps[] {
        const response: BuoyProps[] = [
            {
                id: 1,
                name: "Boia 1",
                state: "active",
                location: {
                    latitude: -23.561414,
                    longitude: -46.655881,
                },
            },
            {
                id: 2,
                name: "Boia 2",
                state: "maintenance",
                location: {
                    latitude: -23.587416,
                    longitude: -46.657634,
                },
            },
            {
                id: 3,
                name: "Boia 3",
                state: "inactive",
                location: {
                    latitude: -23.599112,
                    longitude: -46.719312,
                },
            },
        ]
        return response;
    }
}

export default BackendConnection;