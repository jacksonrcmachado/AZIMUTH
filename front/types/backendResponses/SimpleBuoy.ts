import GpsData from "./GpsData";

type SimpleBuoy = {
    "_id": string;
    "name": string;
    "description": string;
    "frequencyAtTime": number;
    "gpsData": GpsData[]
}

export default SimpleBuoy;