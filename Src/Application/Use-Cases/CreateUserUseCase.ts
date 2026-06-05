import {IUserGateway} from "../Gateways/IUserGateway";
import {IPasswordHash} from "../Services/IPasswordHash";
import {UserEnt} from "../../Domain/Entities/UserEnt";
import {EMailVO} from "../../Domain/Value-Objects/E-mailVO";
import {PasswordVO} from "../../Domain/Value-Objects/PasswordVO";

type DTO = {
    inpName: string;
    inpSurname: string;
    inpEMail: string;
    inpPassword: string;
    inpBirthday: string;
}

export class CreateUserUseCase {
    private IUserRepo: IUserGateway;
    private IPwdHash: IPasswordHash;

    constructor(IUserRepo: IUserGateway, IPwdHash: IPasswordHash) {
        this.IUserRepo = IUserRepo;
        this.IPwdHash = IPwdHash;
    }

    async createUser(newUser: DTO): Promise<UserEnt> {
        const newUserEMail = new EMailVO({inputEmail: newUser.inpEMail});
        const userExists = await this.IUserRepo.findUserByEMail(newUserEMail);

        if (userExists) {
            throw new Error("E-mail already exists.");
        }

        const newUserBirth = new Date(newUser.inpBirthday);
        if (isNaN(newUserBirth.getTime())) {
            throw new Error("The birth date is invalid.");
        }

        const userPwd = new PasswordVO(newUser.inpPassword);
        const userPwdHash = await this.IPwdHash.hashPwd(userPwd.getPwd());

        const toNewUser: UserEnt = new UserEnt({
            userName: newUser.inpName,
            userSurname: newUser.inpSurname,
            userEMail: newUserEMail,
            userPassword: new PasswordVO(userPwdHash),
            userBirthday: newUserBirth
        });

        return this.IUserRepo.createUser(toNewUser);
    }
}