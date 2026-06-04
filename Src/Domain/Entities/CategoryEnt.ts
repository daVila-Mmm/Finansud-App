type CategoryInput = {
    categoryId: string;
    categoryName: string;
    categoryUserId: string;
}

export class CategoryEnt {
    private readonly _categoryId: string;
    private readonly _categoryUserId: string;
    private _categoryName: string;
    constructor(parCategory: CategoryInput) {
        if (!parCategory.categoryName) { throw new Error("A category must br inserted.") }
        const normalizedCategory = parCategory.categoryName.
            trim().
            toLowerCase().
            replace(/\s+/g, " ").
            split(" ").
            map(word => word.charAt(0).toUpperCase() + word.slice(1)).
            join(" ");
        if (!parCategory.categoryUserId) { throw new Error("A category must belong to a user") }
        if (normalizedCategory.length < 3 || normalizedCategory.length > 32) {
            throw new Error("Category must be between 3 and 32 characters");
        }
        this._categoryId = parCategory.categoryId;
        this._categoryName = normalizedCategory;
        this._categoryUserId = parCategory.categoryUserId
    }

    // Getters:
    getCategoryId(): number | string | undefined {
        return this._categoryId;
    }
    getCategoryName(): string {
        return this._categoryName;
    }
    getCategoryUserId(): number | string {
        return this._categoryUserId;
    }
}