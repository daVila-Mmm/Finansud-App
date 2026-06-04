type EMailInput = {
    inputEmail: string;
};

export class EMailVO {
    private static readonly defEMail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    private attEMail: EMailInput;

    constructor(parEMail: EMailInput) {
        if (!parEMail.inputEmail) {
            throw new Error("An e-mail must be inserted.");
        }

        const normalizedEMail: string = parEMail.inputEmail.trim().toLowerCase();

        const isValid: boolean =
            EMailVO.defEMail.test(normalizedEMail);

        if (!isValid) {
            throw new Error("Insert a valid e-mail.");
        }

        this.attEMail = {
            inputEmail: normalizedEMail
        }
    }

    // Getters:
    getEMail(): string {
        return this.attEMail.inputEmail;
    }

}