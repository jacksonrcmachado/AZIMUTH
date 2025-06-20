import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Habilita createdAt e updatedAt automaticamente
  }
);

const UserModel = mongoose.model("User", userSchema);

export class UserModelClass {
  async verifyUserByEmail(email: string) {
    return await UserModel.findOne({ email: email });
  }

  async createUser(user: IUser) {
    return await UserModel.create(user);
  }

  async updateUser(userId: string, updateUser: Partial<IUser>) {
    return await UserModel.findByIdAndUpdate(
      userId,
      updateUser,
      { new: true } //* Para retornar o documento atualizado (não o antigo)
    );
  }

  async getAllUsers() {
    return await UserModel.find({ isDeleted: false });
  }

  async getUserById(userId: string) {
    return await UserModel.findById(userId);
  }
}
