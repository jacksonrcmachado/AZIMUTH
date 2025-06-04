import GpsData from "../types/backendResponses/GpsData";

function sortByBuoyDate(data: GpsData[]): GpsData[] {
    const sortedData = data.sort((a, b) => {
        const dateA = new Date(a.timestamp).getTime();
        const dateB = new Date(b.timestamp).getTime();
        return dateA - dateB;
    });

    return sortedData;
}

export default sortByBuoyDate;