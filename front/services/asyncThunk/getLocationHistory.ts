import { createAsyncThunk } from "@reduxjs/toolkit";
import BackendConnection from "../BackendConnection";

const getLocationHistory = createAsyncThunk("get/locationHistory", async (params: { buoyId: string, startDate: string, endDate: string }) => {
    return await BackendConnection.getLocationHistory(params.buoyId, params.startDate, params.endDate);
})

export default getLocationHistory;