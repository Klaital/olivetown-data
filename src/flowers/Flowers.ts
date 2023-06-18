export class Flower {
    id: number | undefined;
    name: string = '';
    season: string = '';
    imageUrl: string = '';
    honeyType: string = '';
    howTo: string = '';

    get isNew(): boolean {
        return this.id === undefined;
    }

    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.name) this.name = initializer.name;
        if (initializer.season) this.season = initializer.season;
        if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
        if (initializer.honeyType) this.honeyType = initializer.honeyType;
        if (initializer.honeyType) this.howTo = initializer.howTo;
    }
}

