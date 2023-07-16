import {Recipe} from "./Recipe"

export const MOCK_RECIPES = [
    new Recipe({
        name: 'Vegetable Salad',
        group: 'Salads',
        rank: 1,
        ingredients: [
            'Vegetable Group',
            'Vegetable Group',
        ],
        topping: 'Wild Plant Group',
        howTo: '',
    }),
    new Recipe({
        name: 'Potato Salad',
        group: 'Salads',
        rank: 2,
        ingredients: [
            'Potato',
            'Cucumber',
        ],
        topping: 'Apple',
        howTo: '',
    }),
    new Recipe({
        name: 'Mixed Salad',
        group: 'Salads',
        rank: 3,
        ingredients: [
            'Vegetable Group',
            'Wild Plant Group',
            'Shimeji Mushroom',
        ],
        topping: 'Melon',
        howTo: '',
    }),
    new Recipe({
        name: 'Yum Woon Sen',
        group: 'Salads',
        rank: 4,
        ingredients: [
            'Whiskered Velvet Shrimp',
            'Squid Group',
            'Onion',
            'Cucumber'
        ],
        topping: 'Garlic',
        howTo: '',
    }),
    new Recipe({
        name: 'Lyonnaise Potatoes',
        group: 'Salads',
        rank: 4,
        ingredients: [
            'Potato',
            'Oregano',
            'Mayonnaise'
        ],
        topping: 'Olive Oil',
        howTo: '',
    }),
    new Recipe({
        name: 'Egg Salad',
        group: 'Salads',
        rank: 5,
        ingredients: [
            'Egg Group',
            'Radish',
            'Mayonnaise',
        ],
        topping: 'Avocado',
        howTo: '',
    }),
    new Recipe({
        name: 'Fruit Salad',
        group: 'Salads',
        rank: 5,
        ingredients: [
            'Vegetable Group',
            'Fruit Group',
            'Oregano',
        ],
        topping: 'Pineapple',
        howTo: '',
    }),
    new Recipe({
        name: 'Small Fish Marinade',
        group: 'Salads',
        rank: 6,
        ingredients: [
            'Small Fish Group',
            'Small Fish Group',
            'Onion',
            'Vinegar'
        ],
        topping: 'Lemon',
        howTo: 'Eat at Capeside Bistro',
    }),
    new Recipe({
        name: 'Bean Salad',
        group: 'Salads',
        rank: 6,
        ingredients: [
            'Turnip',
            'Beans',
            'Tomato',
        ],
        topping: 'Vinegar',
        howTo: '',
    }),
    new Recipe({
        name: 'Pickles',
        group: 'Salads',
        rank: 7,
        ingredients: [
            'Cucumber',
            'Daikon',
            'Vinegar',
        ],
        topping: 'Garlic',
        howTo: '',
    }),
    new Recipe({
        name: 'Mushroom Marinade',
        group: 'Salads',
        rank: 7,
        ingredients: [
            'Shimeji Mushroom',
            'Trumpet Mushroom',
            'Coral Mushroom',
            'Vinegar'
        ],
        topping: 'Common Mushroom',
        howTo: '',
    }),
    new Recipe({
        name: 'Bhindi Masala',
        group: 'Salads',
        rank: 8,
        ingredients: [
            'Okra',
            'Tomato',
            'Onion',
            'Garlic',
        ],
        topping: 'Mixed Spices',
        howTo: '',
    }),
    new Recipe({
        name: 'Kinpira Gobo',
        group: 'Salads',
        rank: 8,
        ingredients: [
            'Burdock',
            'Carrot',
            'Soy Sauce',
            'Chili Pepper',
        ],
        topping: 'Mixed Herbs',
        howTo: '',
    }),
    new Recipe({
        name: 'Caprese Salad',
        group: 'Salads',
        rank: 9,
        ingredients: [
            'Tomato',
            'Cheese',
            'Avocado',
        ],
        topping: 'Olive Oil',
        howTo: '',
    }),
    new Recipe({
        name: 'Spinach Salad',
        group: 'Salads',
        rank: 9,
        ingredients: [
            'Spinach',
            'Yogurt',
            'Olive',
            'Black Pepper',
        ],
        topping: 'Salt',
        howTo: '',
    }),
    new Recipe({
        name: 'Rosolli',
        group: 'Salads',
        rank: 10,
        ingredients: [
            'Star Potato',
            'Apple',
            'Carrot',
            'Cucumber'
        ],
        topping: 'Vinegar',
        howTo: '',
    }),
    new Recipe({
        name: 'Kimchi',
        group: 'Salads',
        rank: 10,
        ingredients: [
            'Napa Cabbage',
            'Turnip',
            'Bok Choy',
            'Chili Pepper'
        ],
        topping: 'Sugar',
        howTo: '',
    }),

    // Soups

    new Recipe({
        name: 'Shellfish Soup',
        group: 'Soup',
        rank: 1,
        ingredients: [
            'Blood Clam',
        ],
        topping: 'Leek',
        howTo: '',
    }),
    new Recipe({
        name: 'Mixed Soup',
        group: 'Soup',
        rank: 2,
        ingredients: [
            'Vegetable Group',
            'Wild Plant Group'
        ],
        topping: 'Black Pepper',
        howTo: '',
    }),
    new Recipe({
        name: 'Yellow Potage',
        group: 'Soup',
        rank: 2,
        ingredients: [
            'Potato',
            'Milk Group',
        ],
        topping: 'Pumpkin',
        howTo: '',
    }),
    new Recipe({
        name: 'Green Potage',
        group: 'Soup',
        rank: 3,
        ingredients: [
            'Beans',
            'Milk Group',
        ],
        topping: 'Spinach',
        howTo: '',
    }),
    new Recipe({
        name: 'Hot & Sour Soup',
        group: 'Soup',
        rank: 3,
        ingredients: [
            'Shiitake Mushroom',
            'Egg Group',
            'Soy Sauce'
        ],
        topping: 'Vinegar',
        howTo: '',
    }),
    new Recipe({
        name: 'Gazpacho',
        group: 'Soup',
        rank: 4,
        ingredients: [
            'Tomato',
            'Cucumber',
            'Pepper',
        ],
        topping: 'Leek',
        howTo: '',
    }),
    new Recipe({
        name: 'Okra Soup',
        group: 'Soup',
        rank: 4,
        ingredients: [
            'Okra',
            'Onion',
            'Large Fish Group',
        ],
        topping: 'Mixed Spices',
        howTo: '',
    }),
    new Recipe({
        name: 'Clam Chowder',
        group: 'Soup',
        rank: 5,
        ingredients: [
            'Shellfish Group',
            'Milk Group',
            'Potato',
            'Onion'
        ],
        topping: 'Cheese',
        howTo: '',
    }),
    new Recipe({
        name: 'Acqua Pazza',
        group: 'Soup',
        rank: 5,
        ingredients: [
            'Star Snapper',
            'Crab Group',
            'Tomato',
            'Olive'
        ],
        topping: 'Mixed Herbs',
        howTo: 'Eat at Capeside Bistro',
    }),
    new Recipe({
        name: 'Bouillabaisse',
        group: 'Soup',
        rank: 6,
        ingredients: [
            'Whiskered Velvet Shrimp',
            'Bigfin Reef Squid',
            'Shellfish Group',
            'Garlic'
        ],
        topping: 'Broccoli',
        howTo: '',
    }),
    new Recipe({
        name: 'Tom Yum Goong',
        group: 'Soup',
        rank: 6,
        ingredients: [
            'Lobster',
            'Mussel',
            'Coral Mushroom',
            'Chili Pepper'
        ],
        topping: 'Mixed Herbs',
        howTo: '',
    }),
    new Recipe({
        name: 'Onion Soup',
        group: 'Soup',
        rank: 7,
        ingredients: [
            'Onion',
            'Butter',
            'Cheese',
            'Trumpet Mushroom'
        ],
        topping: 'Bread Group',
        howTo: '',
    }),
    new Recipe({
        name: 'Tteokguk',
        group: 'Soup',
        rank: 7,
        ingredients: [
            'Shiitake Mushroom',
            'Egg Group',
            'Carrot',
            'Soy Sauce'
        ],
        topping: 'Royal Fern',
        howTo: '',
    }),
    new Recipe({
        name: 'Sopa de Ajo',
        group: 'Soup',
        rank: 8,
        ingredients: [
            'Garlic',
            'Egg Group',
            'Bread Group',
            'Olive Oil'
        ],
        topping: 'Mixed Spices',
        howTo: '',
    }),
    new Recipe({
        name: 'Minestrone',
        group: 'Soup',
        rank: 8,
        ingredients: [
            'Tomato',
            'Cabbage',
            'Zucchini',
        ],
        topping: 'Garlic',
        howTo: '',
    }),
    new Recipe({
        name: 'Kenchin-jiru',
        group: 'Soup',
        rank: 9,
        ingredients: [
            'Burdock',
            'Daikon',
            'Shiitake Mushroom',
            'Carrot'
        ],
        topping: 'Salt',
        howTo: '',
    }),
    new Recipe({
        name: 'Oarfish Soup',
        group: 'Soup',
        rank: 9,
        ingredients: [
            'Oarfish',
            'Leek',
            'Beans',
            'Soy Sauce'
        ],
        topping: 'Shiitake Mushroom',
        howTo: '',
    }),
    new Recipe({
        name: 'Sour Cherry Soup',
        group: 'Soup',
        rank: 9,
        ingredients: [
            'Cherry',
            'Sugar',
            'Lemon',
            'Mixed Herbs'
        ],
        topping: 'Golden Rain Rosemary',
        howTo: '',
    }),
    new Recipe({
        name: 'Pot-au-Feu',
        group: 'Soup',
        rank: 10,
        ingredients: [
            'Potato',
            'Pepper',
            'Cabbage',
            'Turnip'
        ],
        topping: 'Salt',
        howTo: '',
    }),
    new Recipe({
        name: 'Borscht',
        group: 'Soup',
        rank: 10,
        ingredients: [
            'Tomato',
            'Carrot',
            'Cabbage',
            'Radish'
        ],
        topping: 'Lemon',
        howTo: '',
    }),
    new Recipe({
        name: 'Lemon Soup',
        group: 'Soup',
        rank: 10,
        ingredients: [
            'Lemon',
            'Napa Cabbage',
            'Leek',
        ],
        topping: 'Mixed Herbs',
        howTo: '',
    }),

    // Entrees
    new Recipe({
        name: 'Grilled Fish',
        group: 'Entrees',
        rank: 1,
        ingredients: [
            'Fish Group',
        ],
        topping: 'Lemon',
        howTo: '',
    }),
    new Recipe({
        name: 'Fried Egg',
        group: 'Entrees',
        rank: 1,
        ingredients: [
            'Egg Group',
        ],
        topping: 'Soy Sauce',
        howTo: '',
    }),
    new Recipe({
        name: 'Vegetable Sandwich',
        group: 'Entrees',
        rank: 2,
        ingredients: [
            'Bread Group',
            'Vegetable Group',
            'Wild Berry',
        ],
        topping: 'Mayonnaise',
        howTo: '',
    }),
    new Recipe({
        name: 'Curry Rice',
        group: 'Entrees',
        rank: 2,
        ingredients: [
            'Cooked White Rice',
            'Mixed Spices',
            'Potato',
        ],
        topping: 'Onion',
        howTo: '',
    }),
    new Recipe({
        name: 'Egg Sandwich',
        group: 'Entrees',
        rank: 2,
        ingredients: [
            'Bread Group',
            'Egg Group',
        ],
        topping: 'Mayonnaise',
        howTo: '',
    }),
    new Recipe({
        name: 'Omelet',
        group: 'Entrees',
        rank: 3,
        ingredients: [
            'Egg Group',
            'Tomato'
        ],
        topping: 'Mayonnaise',
        howTo: '',
    }),
    new Recipe({
        name: 'Mala Crayfish',
        group: 'Entrees',
        rank: 3,
        ingredients: [
            'Crayfish',
            'Mixed Spices',
            'Mixed Herbs',
        ],
        topping: 'Black Pepper',
        howTo: '',
    }),
    new Recipe({
        name: 'Shrimp Toast',
        group: 'Entrees',
        rank: 3,
        ingredients: [
            'Shrimp Group',
            'Soy Sauce',
            'Bread Group',
        ],
        topping: 'Black Pepper',
        howTo: '',
    }),
    new Recipe({
        name: 'Okra Curry',
        group: 'Entrees',
        rank: 3,
        ingredients: [
            'Cooked White Rice',
            'Okra',
            'Black Pepper',
            'Mixed Spices'
        ],
        topping: 'Yogurt',
        howTo: '',
    }),
    new Recipe({
        name: 'Sea Bream Sashimi',
        group: 'Entrees',
        rank: 4,
        ingredients: [
            'Sea Bream',
            'Soy Sauce'
        ],
        topping: 'Flounder',
        howTo: '',
    }),
    new Recipe({
        name: 'Chuka Soba',
        group: 'Entrees',
        rank: 4,
        ingredients: [
            'Soy Sauce',
            'Small Fish Group',
            'Flour'
        ],
        topping: 'Bamboo Shoot',
        howTo: '',
    }),
    new Recipe({
        name: 'Chili Shrimp',
        group: 'Entrees',
        rank: 4,
        ingredients: [
            'Giant Freshwater Prawn',
            'Tomato',
            'Chili Pepper'
        ],
        topping: 'Mixed Spices',
        howTo: '',
    }),
    new Recipe({
        name: 'Tempura',
        group: 'Entrees',
        rank: 1,
        ingredients: [
            'Flour',
            'Giant Tiger Shrimp',
            'Vegetable Group',
            'Oyster',
        ],
        topping: 'Salt',
        howTo: '',
    }),
    new Recipe({
        name: 'Pescatore',
        group: 'Entrees',
        rank: 4,
        ingredients: [
            'Flour',
            'Shrimp Group',
            'Mussel',
            'Tomato',
        ],
        topping: 'Sage',
        howTo: '',
    }),
    new Recipe({
        name: 'Unaju',
        group: 'Entrees',
        rank: 4,
        ingredients: [
            'Cooked White Rice',
            'Eel',
            'Soy Sauce',
            'Sugar'
        ],
        topping: 'Mixed Herbs',
        howTo: '',
    }),
    new Recipe({
        name: 'Baked Beans',
        group: 'Entrees',
        rank: 5,
        ingredients: [
            'Beans',
            'Green Pepper',
            'Black Pepper',
        ],
        topping: 'Olive',
        howTo: '',
    }),
    new Recipe({
        name: 'Pizza',
        group: 'Entrees',
        rank: 5,
        ingredients: [
            'Flour',
            'Tomato',
            'Cheese'
        ],
        topping: 'Pineapple',
        howTo: '',
    }),
    new Recipe({
        name: 'Kitsune Udon',
        group: 'Entrees',
        rank: 5,
        ingredients: [
            'Soy Sauce',
            'Beans',
            'Flour'
        ],
        topping: 'Leek',
        howTo: '',
    }),
    new Recipe({
        name: 'Neapolitan Pasta',
        group: 'Entrees',
        rank: 5,
        ingredients: [
            'Flour',
            'Tomato',
            'Onion',
            'Green Pepper',
        ],
        topping: 'Sage',
        howTo: 'Eat at the Cafe',
    }),
    new Recipe({
        name: 'Chestnut Rice',
        group: 'Entrees',
        rank: 5,
        ingredients: [
            'Cooked White Rice',
            'Chestnut',
            'Sweet Potato'
        ],
        topping: 'Matsutake Mushroom',
        howTo: '',
    }),
    new Recipe({
        name: 'Boiled Fish',
        group: 'Entrees',
        rank: 5,
        ingredients: [
            'Medium Fish Group',
            'Daikon Radish',
            'Soy Sauce'
        ],
        topping: 'Sugar',
        howTo: '',
    }),
    new Recipe({
        name: 'Vegetable Pizza',
        group: 'Entrees',
        rank: 6,
        ingredients: [
            'Flour',
            'Vegetable Group',
            'Broccoli',
            'Cheese'
        ],
        topping: 'Wild Berry',
        howTo: '',
    }),
    new Recipe({
        name: 'Ratatouille',
        group: 'Entrees',
        rank: 6,
        ingredients: [
            'Chili Pepper',
            'Zucchini',
            'Black Pepper',
            'Eggplant'
        ],
        topping: 'Olive',
        howTo: '',
    }),
    new Recipe({
        name: 'Calçots',
        group: 'Entrees',
        rank: 6,
        ingredients: [
            'Leek',
            'Olive Oil',
            'Salt',
            'Black Pepper'
        ],
        topping: 'Almond',
        howTo: '',
    }),
    new Recipe({
        name: 'Sashimi Bowl',
        group: 'Entrees',
        rank: 6,
        ingredients: [
            'Cooked White Rice',
            'Salmon',
            'Oyster',
            'Rock Lobster'
        ],
        topping: 'Soy Sauce',
        howTo: '',
    }),
    new Recipe({
        name: 'Seafood Cataplana',
        group: 'Entrees',
        rank: 6,
        ingredients: [
            'Bok Choy',
            'Mahi-mahi',
            'Crab Group',
            'Cuttlefish'
        ],
        topping: 'Abalone',
        howTo: '',
    }),
    new Recipe({
        name: 'Brothy Fried Vegetables',
        group: 'Entrees',
        rank: 6,
        ingredients: [
            'Eggplant',
            'Pumpkin',
            'Okra',

        ],
        topping: 'Soy Sauce',
        howTo: '',
    }),
]
