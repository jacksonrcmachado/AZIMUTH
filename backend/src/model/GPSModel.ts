import mongoose from "mongoose";
import { IGPS } from "../interfaces/IGPS";

const gpsDataSchema = new mongoose.Schema({
  boiaId: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  timestamp: { type: String, required: true },
});

export const GPSDataModel = mongoose.model("GPSData", gpsDataSchema);

export class GPSModelClass {
  async createGPSData(GPS: IGPS) {
    return await GPSDataModel.create(GPS);
  }

  async getAllGPSData() {
    return await GPSDataModel.find();
  }

  async getGPSDataByBoiaId(boiaId: string) {
    return await GPSDataModel.find({ boiaId });
  }

  async getGPSDataByBoiaIdAndDateRange(
    boiaId: string,
    startDate: string,
    endDate: string
  ) {
    return await GPSDataModel.find({
      boiaId,
      timestamp: {
        $gte: startDate,
        $lte: endDate,
      },
    });
  }
}
