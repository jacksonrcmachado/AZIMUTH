import { createAsyncThunk } from "@reduxjs/toolkit";
import BackendConnection from "../BackendConnection";

const getBuoys = createAsyncThunk("get/buoy", async () => {
    return await BackendConnection.getBuoys()
})

export default getBuoys;