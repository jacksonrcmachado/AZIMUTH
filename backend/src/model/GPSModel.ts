import mongoose from "mongoose";
import { IGPS } from "../interfaces/IGPS";
const { utcToZonedTime, formatInTimeZone } = require('date-fns-tz');
const { format } = require("date-fns");

const gpsDataSchema = new mongoose.Schema({
  boiaId: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  timestamp: {
    type: String, // Correto, pois você está salvando uma string formatada
    default: () => {
      // Usa a hora ATUAL da máquina e formata na string desejada.
      // As aspas simples em 'T' e 'Z' garantem que eles sejam tratados como texto literal.
      return format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    },
  },
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
