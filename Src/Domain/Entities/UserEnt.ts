import {EMailVO} from "../Value-Objects/E-mailVO";
import {PasswordVO} from "../Value-Objects/PasswordVO";

type UserInput = {
    userId?: number | undefined;
    userName: string;
    userSurname: string;
    userEMail: EMailVO;
    userPassword: PasswordVO;
    userBirthday?: Date | undefined;
}

export class UserEnt {
    private attUser: UserInput;

    constructor(parUser: UserInput) {
        if (!parUser.userName) {
            throw new Error("A name must be inserted.")
        }
        if (!parUser.userSurname) {
            throw new Error("A surname must be inserted.")
        }
        if (!parUser.userEMail) {
            throw new Error("An e-mail must be inserted.")
        }
        if (!parUser.userPassword) {
            throw new Error("A password must be inserted.")
        }

        this.attUser = parUser;
    }

    // Getters:
    getUserId(): number | undefined {
        return this.attUser.userId;
    }

    getUserName(): string {
        return this.attUser.userName;
    }

    getUserSurname(): string {
        return this.attUser.userSurname;
    }

    getUserEMail(): string {
        return this.attUser.userEMail.getEMail();
    }

    getUserPwd(): string {
        return this.attUser.userPassword.getPwd();
    }

    // ToDO: Birth getter method
    getUserBirth(): Date | undefined {
        return this.attUser.userBirthday;
    }
}