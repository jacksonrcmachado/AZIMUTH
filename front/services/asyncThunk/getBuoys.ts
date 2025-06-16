import { createAsyncThunk } from "@reduxjs/toolkit";
import BackendConnection from "../BackendConnection";

const getBuoys = createAsyncThunk("get/buoy", async () => {
  const result = await BackendConnection.getBuoys();
  return result ?? []; // garantir que nunca retorne null ou undefined
});

export default getBuoys;
