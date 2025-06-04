import mongoose from "mongoose";

const boiaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    frequencyAtTime: { type: Number, default: 60000 },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    gpsData: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "GPSData", // O nome usado em mongoose.model para os dados GPS
      },
    ],
  },
  {
    timestamps: true, // Adiciona createdAt e updatedAt automaticamente
  }
);

export const BoiaModel = mongoose.model("Boia", boiaSchema);

export class BoiaModelClass {
  async createBoia(
    name: string,
    description: string,
    frequencyAtTime?: number
  ) {
    return await BoiaModel.create({ name, description, frequencyAtTime });
  }

  async getAllBoias() {
    return await BoiaModel.find({ isDeleted: false });
  }

  async getBoiaById(BoiaId: string) {
    return await BoiaModel.findById(BoiaId);
  }

  async getBoiaByName(name: string) {
    return await BoiaModel.findOne({ name: name, isDeleted: false });
  }

  async updateBoia(
    boiaId: string,
    updateData: Partial<{
      name: string;
      description: string;
      frequencyAtTime: number;
    }>
  ) {
    return await BoiaModel.findByIdAndUpdate(boiaId, updateData, { new: true });
  }

}