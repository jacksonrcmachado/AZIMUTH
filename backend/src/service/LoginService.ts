import { scryptSync, timingSafeEqual } from "crypto";
import { generateToken } from "../../utils/jwt";
import { UserModelClass } from "../model/userModel";

export class LoginService {
  private userModelClass: UserModelClass;

  constructor() {
    this.userModelClass = new UserModelClass();
  }

  async verifyPassword(storedPassword: string, inputPassword: string) {
    const [salt, key] = storedPassword.split(":");
    const hashedBuffer = scryptSync(inputPassword, salt, 64);
    const keyBuffer = Buffer.from(key, "hex");
    return timingSafeEqual(hashedBuffer, keyBuffer);
  }

  async login(email: string, password: string) {
    const user = await this.userModelClass.verifyUserByEmail(email);
    if (!user) throw new Error("Usuário não encontrado!");

    const valid = await this.verifyPassword(user.password!, password);
    if (!valid) throw new Error("Senha inválida!");

    const token = generateToken(user._id.toString());

    return {
      token,
      user: {
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
      },
    };

  }

  async getMe(userId: string) {
    return this.userModelClass.getUserById(userId);
  }
}
