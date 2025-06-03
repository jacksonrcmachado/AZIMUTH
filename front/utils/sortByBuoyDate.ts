import LocationData from "../types/LocationData.type";

function sortByBuoyDate(data: LocationData[]): LocationData[] {
  return data.slice().sort((a, b) => new Date(a.createAt).getTime() - new Date(b.createAt).getTime());
}

export default sortByBuoyDate;