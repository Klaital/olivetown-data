
enum Hive {
    Honey = 'Honey',
    Comb = 'Comb',
    Worker = 'Worker',
    Royal = 'Royal',
}
enum Season {
    Spring = 'Spring',
    Summer = 'Summer',
    Autumn = 'Autumn',
    Winter = 'Winter',
}

enum CropType {
    Field = 'Field',
    Flower = 'Flower',
    Tree = 'Tree',
}

type Crop = {
    Name: string;
    SellPrice?: number;
    SeedPrice?: number;
    HasHQ: string;
    Seasons: Season[];
    Yield?: number;
    Growth?: {
        Yield: number;
        Time: number;
        LastDay?: string;
    };
    Regrowth?: {
        Count: number;
        Time: number;
    };
    HoneyType?: Hive;
    Type: CropType;
}

export const MOCK_CROPS: Crop[] = [
    {
        Name: 'Potato',
        HasHQ: 'Star Potato',
        Seasons: [
            Season.Spring,
            Season.Summer,
            Season.Winter,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 6,
            LastDay: 'Summer 22',
            Yield: 4,
        },
    },
    {
        Name: 'Turnip',
        HasHQ: 'Giant Turnip',
        Seasons: [
            Season.Spring,
            Season.Summer,
            Season.Winter,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 4,
            LastDay: 'Spring 24',
            Yield: 1,
        },
    },
    {
        Name: 'Cucumber',
        HasHQ: '',
        Seasons: [
            Season.Spring,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 7,
            LastDay: 'Spring 21 (Spring 7 for all 3 yields)',
            Yield: 3,
        },
    },
    {
        Name: 'Onion',
        HasHQ: '',
        Seasons: [
            Season.Spring,
            Season.Summer,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 6,
            LastDay: 'Summer 22',
            Yield: 1,
        },
    },
    {
        Name: 'Strawberry',
        HasHQ: 'Golden Strawberry',
        Seasons: [
            Season.Spring,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 8,
            LastDay: 'Spring 20',
            Yield: 3,
        },
    },
    {
        Name: 'Garlic',
        HasHQ: '',
        Seasons: [
            Season.Spring,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 5,
            LastDay: 'Spring 23 (Spring 13 for all 3 yields)',
            Yield: 1,
        },
    },
    {
        Name: 'Zucchini',
        HasHQ: '',
        Seasons: [
            Season.Summer,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 8,
            LastDay: 'Summer 20',
            Yield: 2,
        },
    },
    {
        Name: 'Pumpkin',
        HasHQ: '',
        Seasons: [
            Season.Summer,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 5,
            LastDay: 'Summer 23',
            Yield: 1,
        },
    },
    {
        Name: 'Corn',
        HasHQ: 'Mosaic Corn',
        Seasons: [
            Season.Summer,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 8,
            LastDay: 'Summer 20',
            Yield: 1,
        },
    },
    {
        Name: 'Tomato',
        HasHQ: 'Giant Tomato',
        Seasons: [
            Season.Summer,
            Season.Autumn,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 6,
            LastDay: 'Autumn 22 (Autumn 10 for all 3 yields)',
            Yield: 3,
        },
    },
    {
        Name: 'Pepper',
        HasHQ: '',
        Seasons: [
            Season.Summer,
            Season.Autumn,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 7,
            LastDay: 'Summer 21 (Summer 7 for all 3 yields)',
            Yield: 3,
        },
    },
    {
        Name: 'Eggplant',
        HasHQ: 'Round Eggplant',
        Seasons: [
            Season.Summer,
            Season.Autumn,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 7,
            LastDay: 'Autumn 21',
            Yield: 3,
        },
    },
    {
        Name: 'Melon',
        HasHQ: 'Jewel Melon',
        Seasons: [
            Season.Summer,
            Season.Autumn,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 7,
            LastDay: 'Autumn 21',
            Yield: 1,
        },
    },
    {
        Name: 'Green Pepper',
        HasHQ: '',
        Seasons: [
            Season.Summer,
            Season.Autumn,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 8,
            LastDay: 'Autumn 20 (Autumn 4 for all 3 yields)',
            Yield: 4,
        },
    },
    {
        Name: 'Pineapple',
        HasHQ: '',
        Seasons: [
            Season.Summer,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 6,
            LastDay: 'Summer 22',
            Yield: 1,
        },
    },
    {
        Name: 'Watermelon',
        HasHQ: '',
        Seasons: [
            Season.Summer
        ],
        Type: CropType.Field,
        Growth: {
            Time: 9,
            LastDay: 'Summer 19',
            Yield: 1,
        },
    },
    {
        Name: 'Spinach',
        HasHQ: 'Heart Spinach',
        Seasons: [
            Season.Autumn,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 4,
            LastDay: 'Autumn 24',
            Yield: 1,
        },
    },
    {
        Name: 'Carrot',
        HasHQ: '',
        Seasons: [
            Season.Autumn,
            Season.Winter
        ],
        Type: CropType.Field,
        Growth: {
            Time: 5,
            LastDay: 'Winter 23',
            Yield: 1,
        },
    },
    {
        Name: 'Okra',
        HasHQ: '',
        Seasons: [
            Season.Autumn,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 8,
            LastDay: 'Autumn 20 (Autumn 4 for all 3 yields)',
            Yield: 4,
        },
    },
    {
        Name: 'Bok Choy',
        HasHQ: '',
        Seasons: [
            Season.Autumn,
            Season.Winter
        ],
        Type: CropType.Field,
        Growth: {
            Time: 9,
            LastDay: 'Winter 19',
            Yield: 2,
        },
    },
    {
        Name: 'Sweet Potato',
        HasHQ: 'Giant Sweet Potato',
        Seasons: [
            Season.Autumn,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 6,
            LastDay: 'Autumn 22 (Autumn 10 for all 3 yields)',
            Yield: 1,
        },
    },
    {
        Name: 'Chili Pepper',
        HasHQ: '',
        Seasons: [
            Season.Autumn,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 9,
            LastDay: 'Autumn 19',
            Yield: 3,
        },
    },
    {
        Name: 'Daikon Radish',
        HasHQ: 'Fork-root Daikon',
        Seasons: [
            Season.Spring,
            Season.Winter
        ],
        Type: CropType.Field,
        Growth: {
            Time: 4,
            LastDay: 'Spring 24',
            Yield: 1,
        },
    },
    {
        Name: 'Burdock',
        HasHQ: '',
        Seasons: [
            Season.Winter
        ],
        Type: CropType.Field,
        Growth: {
            Time: 7,
            LastDay: 'Winter 21',
            Yield: 3,
        },
    },
    {
        Name: 'Broccoli',
        HasHQ: '',
        Seasons: [
            Season.Spring,
            Season.Winter
        ],
        Type: CropType.Field,
        Growth: {
            Time: 6,
            LastDay: 'Spring 22 (Spring 10 for all 3 yields)',
            Yield: 3,
        },
    },
    {
        Name: 'Cabbage',
        HasHQ: '',
        Seasons: [
            Season.Spring,
            Season.Winter
        ],
        Type: CropType.Field,
        Growth: {
            Time: 7,
            LastDay: 'Spring 21',
            Yield: 1,
        },
    },
    {
        Name: 'Napa Cabbage',
        HasHQ: 'Golden Napa Cabbage',
        Seasons: [
            Season.Winter
        ],
        Type: CropType.Field,
        Growth: {
            Time: 6,
            LastDay: 'Winter 22',
            Yield: 1,
        },
    },
    {
        Name: 'Leek',
        HasHQ: 'Giant Leek',
        Seasons: [
            Season.Winter
        ],
        Type: CropType.Field,
        Growth: {
            Time: 4,
            LastDay: 'Winter 24',
            Yield: 4,
        },
    },
    {
        Name: 'Radish',
        HasHQ: '',
        Seasons: [
            Season.Spring,
            Season.Summer,
            Season.Autumn,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 5,
            LastDay: 'Autumn 23',
            Yield: 4,
        },
    },
    {
        Name: 'Fodder',
        HasHQ: '',
        Seasons: [
            Season.Spring,
            Season.Summer,
            Season.Autumn,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 6,
            LastDay: 'Autumn 23 (Summer 26 for all 6 yields)',
            Yield: 3,
        },
    },
    {
        Name: 'Tea Leaf',
        HasHQ: '',
        Seasons: [
            Season.Spring,
            Season.Summer,
            Season.Autumn,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 12,
            LastDay: 'Autumn 16',
            Yield: 5,
        },
    },
    {
        Name: 'Wheat',
        HasHQ: '',
        Seasons: [
            Season.Spring,
            Season.Summer,
            Season.Autumn,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 12,
            LastDay: 'Autumn 16',
            Yield: 5,
        },
    },
    {
        Name: 'Beans',
        HasHQ: '',
        Seasons: [
            Season.Spring,
            Season.Summer,
            Season.Autumn,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 15,
            LastDay: 'Autumn 16',
            Yield: 5,
        },
    },
    {
        Name: 'Rice',
        HasHQ: '',
        Seasons: [
            Season.Spring,
            Season.Summer,
            Season.Autumn,
        ],
        Type: CropType.Field,
        Growth: {
            Time: 14,
            LastDay: 'Autumn 14',
            Yield: 6,
        },
    },

    // Flowers
    {
        Name: 'Tulip',
        HasHQ: '',
        Seasons: [
            Season.Spring
        ],
        HoneyType: Hive.Honey,
        Type: CropType.Flower,
    },
    {
        Name: 'Nemophila',
        HasHQ: '',
        Seasons: [
            Season.Spring
        ],
        HoneyType: Hive.Honey,
        Type: CropType.Flower,
    },
    {
        Name: 'Pansy',
        HasHQ: '',
        Seasons: [
            Season.Spring
        ],
        HoneyType: Hive.Honey,
        Type: CropType.Flower,
    },
    {
        Name: 'Buttercup',
        HasHQ: '',
        Seasons: [
            Season.Spring
        ],
        HoneyType: Hive.Comb,
        Type: CropType.Flower,
    },
    {
        Name: 'Black Pansy',
        HasHQ: '',
        Seasons: [
            Season.Spring
        ],
        HoneyType: Hive.Worker,
        Type: CropType.Flower,
    },
    {
        Name: 'Hibiscus',
        HasHQ: '',
        Seasons: [
            Season.Summer
        ],
        HoneyType: Hive.Honey,
        Type: CropType.Flower,
    },
    {
        Name: 'Petunia',
        HasHQ: '',
        Seasons: [
            Season.Summer
        ],
        HoneyType: Hive.Honey,
        Type: CropType.Flower,
    },
    {
        Name: 'Marigold',
        HasHQ: '',
        Seasons: [
            Season.Summer
        ],
        HoneyType: Hive.Honey,
        Type: CropType.Flower,
    },
    {
        Name: 'Sunflower',
        HasHQ: '',
        Seasons: [
            Season.Summer
        ],
        HoneyType: Hive.Comb,
        Type: CropType.Flower,
    },
    {
        Name: 'Lily',
        HasHQ: '',
        Seasons: [
            Season.Summer
        ],
        HoneyType: Hive.Worker,
        Type: CropType.Flower,
    },
    {
        Name: 'Rose',
        HasHQ: '',
        Seasons: [
            Season.Autumn
        ],
        HoneyType: Hive.Honey,
        Type: CropType.Flower,
    },
    {
        Name: 'Mum',
        HasHQ: '',
        Seasons: [
            Season.Autumn
        ],
        HoneyType: Hive.Honey,
        Type: CropType.Flower,
    },
    {
        Name: 'Clematis',
        HasHQ: '',
        Seasons: [
            Season.Autumn
        ],
        HoneyType: Hive.Comb,
        Type: CropType.Flower,
    },
    {
        Name: 'Daisy',
        HasHQ: '',
        Seasons: [
            Season.Autumn
        ],
        HoneyType: Hive.Worker,
        Type: CropType.Flower,
    },
    {
        Name: 'Black Rose',
        HasHQ: '',
        Seasons: [
            Season.Autumn
        ],
        HoneyType: Hive.Worker,
        Type: CropType.Flower,
    },
    {
        Name: 'Cineraria',
        HasHQ: '',
        Seasons: [
            Season.Winter
        ],
        HoneyType: Hive.Honey,
        Type: CropType.Flower,
    },
    {
        Name: 'Primrose',
        HasHQ: '',
        Seasons: [
            Season.Winter
        ],
        HoneyType: Hive.Honey,
        Type: CropType.Flower,
        Growth: {
            Time: 4,
            LastDay: 'Winter 24',
            Yield: 1,
        },
    },
    {
        Name: 'Begonia',
        HasHQ: '',
        Seasons: [
            Season.Winter
        ],
        HoneyType: Hive.Worker,
        Type: CropType.Flower,
    },
    {
        Name: 'Campanula',
        HasHQ: '',
        Seasons: [
            Season.Winter
        ],
        HoneyType: Hive.Worker,
        Type: CropType.Flower,
    },
    {
        Name: 'Hellebore',
        HasHQ: '',
        Seasons: [
            Season.Winter
        ],
        Growth: {
            Yield: 1,
            Time: 6,
            LastDay: 'Winter 22',
        },
        HoneyType: Hive.Royal,
        Type: CropType.Flower,
    },

    // Trees
    {
        Name: 'Coffee Bean',
        HasHQ: '',
        Seasons: [
            Season.Spring,
        ],
        Type: CropType.Tree,
    },
    {
        Name: 'Cherry',
        HasHQ: '',
        Seasons: [
            Season.Spring,
        ],
        Type: CropType.Tree,
    },
    {
        Name: 'Orange',
        HasHQ: '',
        Seasons: [
            Season.Spring,
        ],
        Type: CropType.Tree,
    },
    {
        Name: 'Avocado',
        HasHQ: 'Giant Avocado',
        Seasons: [
            Season.Spring,
        ],
        Type: CropType.Tree,
    },
    {
        Name: 'Almond',
        HasHQ: '',
        Seasons: [
            Season.Summer,
        ],
        Type: CropType.Tree,
    },
    {
        Name: 'Lemon',
        HasHQ: '',
        Seasons: [
            Season.Summer,
        ],
        Type: CropType.Tree,
    },
    {
        Name: 'Coconut',
        HasHQ: '',
        Seasons: [
            Season.Summer,
        ],
        Type: CropType.Tree,
    },
    {
        Name: 'Banana',
        HasHQ: '',
        Seasons: [
            Season.Summer,
        ],
        Type: CropType.Tree,
    },
    {
        Name: 'Cacao',
        HasHQ: '',
        Seasons: [
            Season.Summer,
        ],
        Type: CropType.Tree,
    },
    {
        Name: 'Mango',
        HasHQ: '',
        Seasons: [
            Season.Summer,
        ],
        Type: CropType.Tree,
    },
    {
        Name: 'Peach',
        HasHQ: 'Golden Peach',
        Seasons: [
            Season.Summer,
        ],
        Type: CropType.Tree,
    },
    {
        Name: 'Apple',
        HasHQ: 'Golden Apple',
        Seasons: [
            Season.Autumn,
        ],
        Type: CropType.Tree,
    },
    {
        Name: 'Grapes',
        HasHQ: '',
        Seasons: [
            Season.Autumn,
        ],
        Type: CropType.Tree,
    },
    {
        Name: 'Olive',
        HasHQ: '',
        Seasons: [
            Season.Autumn,
        ],
        Type: CropType.Tree,
    },
]