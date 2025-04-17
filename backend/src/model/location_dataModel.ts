import mongoose from "mongoose";

const location_dataSchema = new mongoose.Schema(
  {
    latitude: Number,
    longitude: Number,
    buoy: {
      type: mongoose.Schema.Types.ObjectId, // Referência ao ID da boia
      ref: "Buoy", // Nome do modelo referenciado (Buoy)
      required: true, // Garante que toda localização tenha uma boia
    },
  },
  {
    timestamps: true, // Habilita createdAt e updatedAt automaticamente
  }
);

export const location_dataModel = mongoose.model(
  "Location_data",
  location_dataSchema
);
