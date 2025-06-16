import GpsData from "../types/backendResponses/GpsData";

function extractLatLng(data: GpsData[]): { latitude: number; longitude: number }[] {
    return data.map((item: GpsData) => ({
        latitude: item.latitude,
        longitude: item.longitude
    }));
}

export default extractLatLng;