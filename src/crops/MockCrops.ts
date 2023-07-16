
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

type Crop = {
    Name: string;
    SellPrice?: number;
    SeedPrice?: number;
    HasHQ: boolean;
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
}

export const MOCK_CROPS: Crop[] = [
    {
        Name: 'Potato',
        HasHQ: true,
        Seasons: [
            Season.Spring,
            Season.Summer,
            Season.Winter,
        ],
    },
    {
        Name: 'Turnip',
        HasHQ: true,
        Seasons: [
            Season.Spring,
            Season.Summer,
            Season.Winter,
        ],
    },
    {
        Name: 'Cucumber',
        HasHQ: false,
        Seasons: [
            Season.Spring,
        ],
    },
    {
        Name: 'Onion',
        HasHQ: false,
        Seasons: [
            Season.Spring,
            Season.Summer,
        ],
    },
    {
        Name: 'Strawberry',
        HasHQ: true,
        Seasons: [
            Season.Spring,
        ],
    },
    {
        Name: 'Garlic',
        HasHQ: false,
        Seasons: [
            Season.Spring,
        ],
    },
    {
        Name: 'Zucchini',
        HasHQ: false,
        Seasons: [
            Season.Summer,
        ],
    },
    {
        Name: 'Pumpkin',
        HasHQ: false,
        Seasons: [
            Season.Summer,
        ],
    },
    {
        Name: 'Corn',
        HasHQ: true,
        Seasons: [
            Season.Summer,
        ],
    },
    {
        Name: 'Tomato',
        HasHQ: true,
        Seasons: [
            Season.Summer,
            Season.Autumn,
        ],
    },
    {
        Name: 'Pepper',
        HasHQ: false,
        Seasons: [
            Season.Summer,
            Season.Autumn,
        ],
    },
    {
        Name: 'Eggplant',
        HasHQ: true,
        Seasons: [
            Season.Summer,
            Season.Autumn,
        ],
    },
    {
        Name: 'Melon',
        HasHQ: true,
        Seasons: [
            Season.Summer,
            Season.Autumn,
        ],
    },
    {
        Name: 'Green Pepper',
        HasHQ: false,
        Seasons: [
            Season.Summer,
            Season.Autumn,
        ],
    },
    {
        Name: 'Pineapple',
        HasHQ: false,
        Seasons: [
            Season.Summer,
        ],
    },
    {
        Name: 'Watermelon',
        HasHQ: false,
        Seasons: [
            Season.Summer
        ],
    },
    {
        Name: 'Spinach',
        HasHQ: true,
        Seasons: [
            Season.Autumn,
        ],
    },
    {
        Name: 'Carrot',
        HasHQ: false,
        Seasons: [
            Season.Autumn,
            Season.Winter
        ],
    },
    {
        Name: 'Okra',
        HasHQ: false,
        Seasons: [
            Season.Autumn,

        ],
    },
    {
        Name: 'Bok Choy',
        HasHQ: false,
        Seasons: [
            Season.Autumn,
            Season.Winter
        ],
    },
    {
        Name: 'Sweet Potato',
        HasHQ: true,
        Seasons: [
            Season.Autumn,

        ],
    },
    {
        Name: 'Chili Pepper',
        HasHQ: false,
        Seasons: [
            Season.Autumn,

        ],
    },
    {
        Name: 'Daikon Radish',
        HasHQ: true,
        Seasons: [
            Season.Spring,
            Season.Winter
        ],
    },
    {
        Name: 'Burdock',
        HasHQ: false,
        Seasons: [
            Season.Winter
        ],
    },
    {
        Name: 'Broccoli',
        HasHQ: false,
        Seasons: [
            Season.Spring,
            Season.Winter
        ],
    },
    {
        Name: 'Cabbage',
        HasHQ: false,
        Seasons: [
            Season.Spring,
            Season.Winter
        ],
    },
    {
        Name: 'Napa Cabbage',
        HasHQ: true,
        Seasons: [
            Season.Winter
        ],
    },
    {
        Name: 'Leek',
        HasHQ: true,
        Seasons: [
            Season.Winter
        ],
    },
    {
        Name: 'Radish',
        HasHQ: false,
        Seasons: [
            Season.Spring,
            Season.Summer,
            Season.Autumn,
        ],
    },
    {
        Name: 'Fodder',
        HasHQ: false,
        Seasons: [
            Season.Spring,
            Season.Summer,
            Season.Autumn,
        ],
    },
    {
        Name: 'Tea Leaf',
        HasHQ: false,
        Seasons: [
            Season.Spring,
            Season.Summer,
            Season.Autumn,
        ],
    },
    {
        Name: 'Wheat',
        HasHQ: false,
        Seasons: [
            Season.Spring,
            Season.Summer,
            Season.Autumn,
        ],
    },
    {
        Name: 'Beans',
        HasHQ: false,
        Seasons: [
            Season.Spring,
            Season.Summer,
            Season.Autumn,
        ],
    },
    {
        Name: 'Rice',
        HasHQ: false,
        Seasons: [
            Season.Spring,
            Season.Summer,
            Season.Autumn,
        ],
    },

    // Flowers
    {
        Name: 'Tulip',
        HasHQ: false,
        Seasons: [
            Season.Spring
        ],
        HoneyType: Hive.Honey,
    },
    {
        Name: 'Nemophila',
        HasHQ: false,
        Seasons: [
            Season.Spring
        ],
        HoneyType: Hive.Honey,
    },
    {
        Name: 'Pansy',
        HasHQ: false,
        Seasons: [
            Season.Spring
        ],
        HoneyType: Hive.Honey,
    },
    {
        Name: 'Buttercup',
        HasHQ: false,
        Seasons: [
            Season.Spring
        ],
        HoneyType: Hive.Comb,
    },
    {
        Name: 'Black Pansy',
        HasHQ: false,
        Seasons: [
            Season.Spring
        ],
        HoneyType: Hive.Worker,
    },
    {
        Name: 'Hibiscus',
        HasHQ: false,
        Seasons: [
            Season.Summer
        ],
        HoneyType: Hive.Honey,
    },
    {
        Name: 'Petunia',
        HasHQ: false,
        Seasons: [
            Season.Summer
        ],
        HoneyType: Hive.Honey,
    },
    {
        Name: 'Marigold',
        HasHQ: false,
        Seasons: [
            Season.Summer
        ],
        HoneyType: Hive.Honey,
    },
    {
        Name: 'Sunflower',
        HasHQ: false,
        Seasons: [
            Season.Summer
        ],
        HoneyType: Hive.Comb,
    },
    {
        Name: 'Lily',
        HasHQ: false,
        Seasons: [
            Season.Summer
        ],
        HoneyType: Hive.Worker,
    },
    {
        Name: 'Rose',
        HasHQ: false,
        Seasons: [
            Season.Autumn
        ],
        HoneyType: Hive.Honey,
    },
    {
        Name: 'Mum',
        HasHQ: false,
        Seasons: [
            Season.Autumn
        ],
        HoneyType: Hive.Honey,
    },
    {
        Name: 'Clematis',
        HasHQ: false,
        Seasons: [
            Season.Autumn
        ],
        HoneyType: Hive.Comb,
    },
    {
        Name: 'Daisy',
        HasHQ: false,
        Seasons: [
            Season.Autumn
        ],
        HoneyType: Hive.Worker,
    },
    {
        Name: 'Black Rose',
        HasHQ: false,
        Seasons: [
            Season.Autumn
        ],
        HoneyType: Hive.Worker,
    },
    {
        Name: 'Cineraria',
        HasHQ: false,
        Seasons: [
            Season.Winter
        ],
        HoneyType: Hive.Honey,
    },
    {
        Name: 'Primrose',
        HasHQ: false,
        Seasons: [
            Season.Winter
        ],
        HoneyType: Hive.Honey,
    },
    {
        Name: 'Begonia',
        HasHQ: false,
        Seasons: [
            Season.Winter
        ],
        HoneyType: Hive.Worker,
    },
    {
        Name: 'Campanula',
        HasHQ: false,
        Seasons: [
            Season.Winter
        ],
        HoneyType: Hive.Worker,
    },
    {
        Name: 'Hellebore',
        HasHQ: false,
        Seasons: [
            Season.Winter
        ],
        Growth: {
            Yield: 1,
            Time: 6,
        },
        HoneyType: Hive.Royal,
    },

    // Trees
    {
        Name: 'Coffee Bean',
        HasHQ: false,
        Seasons: [
            Season.Spring,
        ],
    },
    {
        Name: 'Cherry',
        HasHQ: false,
        Seasons: [
            Season.Spring,
        ]
    },
    {
        Name: 'Orange',
        HasHQ: false,
        Seasons: [
            Season.Spring,
        ]
    },
    {
        Name: 'Avocado',
        HasHQ: true,
        Seasons: [
            Season.Spring,
        ]
    },
    {
        Name: 'Almond',
        HasHQ: false,
        Seasons: [
            Season.Summer,
        ]
    },
    {
        Name: 'Lemon',
        HasHQ: false,
        Seasons: [
            Season.Summer,
        ]
    },
    {
        Name: 'Coconut',
        HasHQ: false,
        Seasons: [
            Season.Summer,
        ]
    },
    {
        Name: 'Banana',
        HasHQ: false,
        Seasons: [
            Season.Summer,
        ]
    },
    {
        Name: 'Cacao',
        HasHQ: false,
        Seasons: [
            Season.Summer,
        ]
    },
    {
        Name: 'Mango',
        HasHQ: false,
        Seasons: [
            Season.Summer,
        ]
    },
    {
        Name: 'Peach',
        HasHQ: true,
        Seasons: [
            Season.Summer,
        ]
    },
    {
        Name: 'Apple',
        HasHQ: true,
        Seasons: [
            Season.Autumn,
        ]
    },
    {
        Name: 'Grapes',
        HasHQ: false,
        Seasons: [
            Season.Autumn,
        ]
    },
    {
        Name: 'Olive',
        HasHQ: false,
        Seasons: [
            Season.Autumn,
        ]
    },
]