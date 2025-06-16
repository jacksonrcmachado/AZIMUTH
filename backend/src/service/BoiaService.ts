import { BoiaModelClass } from "../model/boiaModel";

export class BoiaService {
  private boiaModelClass: BoiaModelClass;

  constructor() {
    this.boiaModelClass = new BoiaModelClass();
  }

  async createBoia(
    name: string,
    description: string,
    frequencyAtTime?: number
  ) {
    const verifyBoiaByName = await this.boiaModelClass.getBoiaByName(name);

    if (verifyBoiaByName) {
      throw new Error("Boia com esse nome já existe");
    }

    return await this.boiaModelClass.createBoia(
      name,
      description,
      frequencyAtTime
    );
  }

  async updateBoia(
    boiaId: string,
    updateData: Partial<{
      name: string;
      description: string;
      frequencyAtTime: number;
    }>
  ) {
    const verifyIfBoiaIsNotDeleted = await this.boiaModelClass.getBoiaById(
      boiaId
    );

    if (!verifyIfBoiaIsNotDeleted || verifyIfBoiaIsNotDeleted.isDeleted) {
      throw new Error("Boia não encontrada ou deletada");
    }

    return await this.boiaModelClass.updateBoia(boiaId, updateData);
  }
}