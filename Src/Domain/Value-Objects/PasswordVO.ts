export class PasswordVO {
    private readonly attPassword: string;

    constructor(parPassword: string) {
        if (!parPassword) { throw new Error("A password must be inserted."); }
        if (parPassword.length < 8 || parPassword.length > 32) { throw new Error("Password must be between 8 and 32 characters."); }

        this.attPassword = parPassword;
    }

    // Getters:
    getHash(): string {
        return this.attPassword;
    }

}