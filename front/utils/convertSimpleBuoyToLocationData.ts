import SimpleBuoy from "../types/backendResponses/SimpleBuoy";
import LocationData from "../types/LocationData.type";

function convertSimpleBuoyToLocationDataLatest(
  buoys: SimpleBuoy[]
): LocationData[] | null {
  if (!buoys || buoys.length === 0) {
    return null;
  }

  const result: LocationData[] = [];

  for (const buoy of buoys) {
    if (!buoy.gpsData || buoy.gpsData.length === 0) {
      // pula boia sem GPS
      continue;
    }

    const latestGpsData = buoy.gpsData.reduce((latest, current) => {
      return new Date(current.timestamp) > new Date(latest.timestamp)
        ? current
        : latest;
    });

    result.push({
      latitude: latestGpsData.latitude,
      longitude: latestGpsData.longitude,
      buoy: {
        id: buoy._id,
        name: buoy.name,
        description: buoy.description,
        frequencyAtTime: buoy.frequencyAtTime,
        isDeleted: false,
      },
    });
  }

  return result.length > 0 ? result : null;
}


export default convertSimpleBuoyToLocationDataLatest;