import { IUser } from "../interfaces/IUser";
import { UserModelClass } from "../model/userModel";
import { UserService } from "../service/UserService";

export class userController {
    private userService = new UserService();
    private userModel = new UserModelClass()

    async createUser(user: IUser) {
        console.log("controller: ", user);
        
        return await this.userService.createUser(user);
    }

    async getAllUsers() {
        return await this.userModel.getAllUsers();
    }
}