import Buoy from "./Buoy.type";

type LocationData = {
    latitude: number;
    longitude: number;
    buoy: Buoy;
    createAt: string;
}

export default LocationData;