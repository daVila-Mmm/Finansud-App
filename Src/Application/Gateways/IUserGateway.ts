import {UserEnt} from "../../Domain/Entities/UserEnt";
import {EMailVO} from "../../Domain/Value-Objects/E-mailVO";

export interface IUserGateway {
    createUser(newUser: UserEnt): Promise<UserEnt>;
    deleteUser(userId: number): Promise<void>;
    findUserById(userId: number): Promise<UserEnt | null>;
    findUserByName(userName: string): Promise<UserEnt | null>;
    findUserByEMail(userEMail: EMailVO): Promise<UserEnt | null>;
}