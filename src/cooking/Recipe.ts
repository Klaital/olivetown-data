
export enum Group {
    Salads = 'Salads',
    Soups = 'Soups',
    Entrees = 'Entrees',
    Desserts = 'Desserts',
    Other = 'Other',
}
const GROUP_ORDER = new Map<string, number>([
    ['Salads', 0],
    ['Soups', 1],
    ['Entrees', 2],
    ['Desserts', 3],
    ['Other', 4]
]);
export function CompareGroups(r1: Recipe, r2: Recipe): number {
    const g1 = GROUP_ORDER.get(r1.group) ?? 0;
    const g2 =  GROUP_ORDER.get(r2.group) ?? 0;
    return g1 - g2;
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
