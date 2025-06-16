import { IUser } from "../interfaces/IUser";
import { UserModelClass } from "../model/userModel";
import { randomBytes, scryptSync } from "node:crypto";

export class UserService {
  private userModelClass: UserModelClass;

  constructor() {
    this.userModelClass = new UserModelClass();
  }

  //randomBytes(16): Gera 16 bytes (128 bits) de dados aleatórios criptograficamente seguros.
  //.toString('hex'): Converte os bytes em uma string hexadecimal (0-9, a-f).
  //Resultado: Uma string de 32 caracteres hexadecimais (ex: "f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p").

  private hashPassword(password: string): string {
    const salt = randomBytes(16).toString("hex");
    const hash = scryptSync(password, salt, 64).toString("hex");
    return `${salt}:${hash}`;
  }

  async createUser(user: IUser) {
    const verifyIfUserExists = await this.userModelClass.verifyUserByEmail(
      user.email
    );

    if (verifyIfUserExists) {
      throw new Error(`O usuário ${user.email} já existe!`);
    }

    const hashedPassword = this.hashPassword(user.password);

    user.password = hashedPassword;

    return await this.userModelClass.createUser(user);
  }

  async getAllUsers() {
    return await this.userModelClass.getAllUsers();
  }

  async updateUser(UserId: string, updateUser: Partial<IUser>) {
    if (updateUser.password) {
      const hashedPassword = this.hashPassword(updateUser.password);
      updateUser.password = hashedPassword;
    }
    return await this.userModelClass.updateUser(UserId, updateUser);
  }
}
