import LocationData from "../types/LocationData.type";

function extractLatLng(data: LocationData[]): { latitude: number; longitude: number }[] {
  return data.map(({ latitude, longitude }) => ({ latitude, longitude }));
}

export default extractLatLng;