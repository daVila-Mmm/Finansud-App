type EstablishmentInput = {
    establishmentId?: number | undefined;
    establishmentName: string;
    establishmentUserId: string;
};

export class EstablishmentEnt {
    private readonly _establishmentId: number | undefined;
    private _establishmentName: string;
    private readonly _establishmentUserId: string;

    constructor(parEstablishment: EstablishmentInput) {
        if (!parEstablishment.establishmentName) {
            throw new Error("An establishment must be inserted.")
        }
        if (!parEstablishment.establishmentUserId) {
            throw new Error("An establishment must belong to a user.")
        }
        const normalizedEstablishment: string = parEstablishment.establishmentName.trim().toLowerCase().replace(/\s+/g, " ").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        if (normalizedEstablishment.length < 3 || normalizedEstablishment.length > 32) {
            throw new Error("Establishment must be between 3 and 32 characters.");
        }

        this._establishmentId = parEstablishment.establishmentId;
        this._establishmentName = normalizedEstablishment;
        this._establishmentUserId = parEstablishment.establishmentUserId;
    }

    // Getters:
    getEstablishmentId(): number | undefined {
        return this._establishmentId;
    }

    getEstablishmentName(): string {
        return this._establishmentName;
    }

    getEstablishmentUserId(): string {
        return this._establishmentUserId;
    }
}