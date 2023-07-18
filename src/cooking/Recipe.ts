
export enum Group {
    Salads = 'Salads',
    Soup = 'Soup',
    Entrees = 'Entrees',
    Desserts = 'Desserts',
    Other = 'Other',
}
export type Recipe = {
    name: string,
    ingredients: string[],
    flavors: string[],
    temperatures: string[],
    colors: string[],
    level: number,
    howTo: string,
    group: string,
    topping: string,

    lovett?: number,
}
