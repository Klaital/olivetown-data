
export class Recipe {
    name: string = '';
    ingredients: string[] = [];
    rank: number = 1;
    howTo: string = '';
    group: string = '';
    topping: string = '';

    get isNew(): boolean {
        return this.ingredients.length === 0;
    }

    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.name) this.name = initializer.name;
        if (initializer.ingredients) this.ingredients = initializer.ingredients;
        if (initializer.rank) this.rank = initializer.rank;
        if (initializer.howTo) this.howTo = initializer.howTo;
        if (initializer.group) this.group = initializer.group;
        if (initializer.topping) this.topping = initializer.topping;
    }
}
