import GpsData from "./GpsData";

type SimpleBuoy = {
    "_id": string;
    "name": string;
    "description": string;
    "gpsData": GpsData[]
}

export default SimpleBuoy;