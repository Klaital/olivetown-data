
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
    rank: number,
    howTo?: string,
    group: string,
    topping: string,

    LovettStars?: number,
}
