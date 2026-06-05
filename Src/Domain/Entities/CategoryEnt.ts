type CategoryInput = {
    categoryId: string;
    categoryName: string;
    categoryUserId: string;
}

export class CategoryEnt {
    private readonly _categoryId: string;
    private _categoryName: string;
    private readonly _categoryUserId: string;

    constructor(parCategory: CategoryInput) {
        if (!parCategory.categoryName) {
            throw new Error("A category must be inserted.")
        }
        if (!parCategory.categoryUserId) {
            throw new Error("A category must belong to a user")
        }
        const normalizedCategory = parCategory.categoryName.trim().toLowerCase().replace(/\s+/g, " ").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

        if (normalizedCategory.length < 3 || normalizedCategory.length > 32) {
            throw new Error("Category must be between 3 and 32 characters");
        }

        this._categoryId = parCategory.categoryId;
        this._categoryName = normalizedCategory;
        this._categoryUserId = parCategory.categoryUserId
    }

    // Getters:
    getCategoryId(): string {
        return this._categoryId;
    }

    getCategoryName(): string {
        return this._categoryName;
    }

    getCategoryUserId(): string {
        return this._categoryUserId;
    }

}