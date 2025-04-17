import mongoose from "mongoose";

const buoySchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Habilita createdAt e updatedAt automaticamente
  }
);

export const BuoyModel = mongoose.model("Buoy", buoySchema);
