import SimpleBuoy from "../types/backendResponses/simpleBuoy";
import LocationData from "../types/LocationData.type";

function convertSimpleBuoyToLocationDataLatest(buoys: SimpleBuoy[]): LocationData[] | null {
    if (!buoys || buoys.length === 0) {
        return null;
    }

    return buoys.map(buoy => {
        const latestGpsData = buoy.gpsData.reduce((latest, current) => {
            return new Date(current.timestamp) > new Date(latest.timestamp) ? current : latest;
        });

        return {
            latitude: latestGpsData.latitude,
            longitude: latestGpsData.longitude,
            buoy: {
                id: buoy._id,
                name: buoy.name,
                description: buoy.description,
                isDeleted: false // Assuming isDeleted is false by default
            }
        };
    });
}

export default convertSimpleBuoyToLocationDataLatest;