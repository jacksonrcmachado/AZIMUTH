type BuoyProps = {
    id: number;
    state: string; // active, maintenance, inactive
    name: string
    location: {
        latitude: number;
        longitude: number;
    };
}

export default BuoyProps;