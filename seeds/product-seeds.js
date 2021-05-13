const { Product } = require('../models');

// All Pathfinder/DnD prices use gold as their currency
// Vampire uses dots as their currency
// Star Wars uses credits as the currency

const productData = [
  {
    product_name: "Cutlass",
    category_name: "Weapons",
    store_name: "Pathfinder",
    price: 15,
    stock: 23,
    category_id: 1,
  },
  {
    product_name: "Scimitar",
    category_name: "Weapons",
    store_name: "pathfinder",
    price: 15,
    stock: 29,
    category_id: 1,
  },
  {
    product_name: "Scythe",
    category_name: "Weapons",
    store_name: "pathfinder",
    price: 18,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: "Longsword",
    category_name: "Weapons",
    store_name: "d&d",
    price: 15,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: "Greatsword",
    category_name: "Weapons",
    store_name: "d&d",
    price: 50,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: "Heavy Crossbow",
    category_name: "Weapons",
    store_name: "d&d",
    price: 50,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: "Blaster Rifle",
    category_name: "Weapons",
    store_name: "starwars",
    price: 900,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: "AP-M1 Armour Piercing Grenade",
    category_name: "Weapons",
    store_name: "starwars",
    price: 200,
    stock: 5,
    category_id: 1,
  },
  {
    product_name: "Bowcaster",
    category_name: "Weapons",
    store_name: "starwars",
    price: 1250,
    stock: 5,
    category_id: 1,
  },
  {
    product_name: "Assault Rifle",
    category_name: "Weapons",
    store_name: "vampire",
    price: 3,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: "Shotgun",
    category_name: "Weapons",
    store_name: "vampire",
    price: 2,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: "Chainsaw",
    category_name: "Weapons",
    store_name: "vampire",
    price: 3,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: "Plate Mail",
    category_name: "Armor",
    store_name: "pathfinder",
    price: 10,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: "Breastplate",
    category_name: "Armor",
    store_name: "pathfinder",
    price: 200,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: "Full Plate",
    category_name: "Armor",
    store_name: "pathfinder",
    price: 1500,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: "Leather",
    category_name: "Armor",
    store_name: "pathfinder",
    price: 10,
    stock: 20,
    category_id: 2,
  },
  {
    product_name: "Half Plate",
    category_name: "Armor",
    store_name: "pathfinder",
    price: 750,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: "Scale Mail",
    category_name: "Armor",
    store_name: "pathfinder",
    price: 50,
    stock: 15,
    category_id: 2,
  },
  {
    product_name: "Studded Leather",
    category_name: "Armor",
    store_name: "pathfinder",
    price: 25,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: "Chain Shirt",
    category_name: "Armor",
    store_name: "d&d",
    price: 50,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: "Half Plate",
    category_name: "Armor",
    store_name: "d&d",
    price: 750,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: "Splint Mail",
    category_name: "Armor",
    store_name: "d&d",
    price: 200,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: "Leather",
    category_name: "Armor",
    store_name: "d&d",
    price: 10,
    stock: 20,
    category_id: 2,
  },
  {
    product_name: "Scale Mail",
    category_name: "Armor",
    store_name: "d&d",
    price: 50,
    stock: 15,
    category_id: 2,
  },
  {
    product_name: "Mk. III Flak Vest",
    category_name: "Armor",
    store_name: "starwars",
    price: 300,
    stock: 20,
    category_id: 2,
  },
  {
    product_name: "Survivalist Armor",
    category_name: "Armor",
    store_name: "starwars",
    price: 750,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: "TX-3 Combat Flight Suit",
    category_name: "Armor",
    store_name: "starwars",
    price: 3000,
    stock: 15,
    category_id: 2,
  },
  {
    product_name: "Kevlar Vest",
    category_name: "Armor",
    store_name: "vampire",
    price: 1,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: "Reinforced Clothing",
    category_name: "Armor",
    store_name: "vampire",
    price: 1,
    stock: 20,
    category_id: 2,
  },
  {
    product_name: "Flak Jacket",
    category_name: "Armor",
    store_name: "vampire",
    price: 2,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: "Full Riot Gear",
    category_name: "Armor",
    store_name: "vampire",
    price: 3,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: "Hanging Tent",
    category_name: "Utility",
    store_name: "pathfinder",
    price: 20,
    stock: 35,
    category_id: 3,
  },
  {
    product_name: "Compass",
    category_name: "Utility",
    store_name: "pathfinder",
    price: 10,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: "Collapsible Bathtub",
    category_name: "Utility",
    store_name: "pathfinder",
    price: 15,
    stock: 30,
    category_id: 3,
  },
  {
    product_name: "Two-Person Tent",
    category_name: "Utility",
    store_name: "d&d",
    price: 2,
    stock: 10,
    category_id: 3,
  },
  {
    product_name: "Bedroll",
    category_name: "Utility",
    store_name: "d&d",
    price: 1,
    stock: 10,
    category_id: 3,
  },
  {
    product_name: "Grappling Hook",
    category_name: "Utility",
    store_name: "d&d",
    price: 2,
    stock: 10,
    category_id: 3,
  },
  {
    product_name: "Emergency Repair Patch",
    category_name: "Utility",
    store_name: "starwars",
    price: 25,
    stock: 10,
    category_id: 3,
  },
  {
    product_name: "Backpack",
    category_name: "Utility",
    store_name: "starwars",
    price: 50,
    stock: 10,
    category_id: 3,
  },
  {
    product_name: "Lockpick Set",
    category_name: "Utility",
    store_name: "starwars",
    price: 50,
    stock: 10,
    category_id: 3,
  },
  {
    product_name: "Duct Tape",
    category_name: "Utility",
    store_name: "vampire",
    price: 1,
    stock: 10,
    category_id: 3,
  },
  {
    product_name: "Bear Trap",
    category_name: "Utility",
    store_name: "vampire",
    price: 2,
    stock: 10,
    category_id: 3,
  },
  {
    product_name: "Caltrops",
    category_name: "Utility",
    store_name: "vampire",
    price: 2,
    stock: 10,
    category_id: 3,
  },
  {
    product_name: "Biofilter",
    category_name: "Technology",
    store_name: "pathfinder",
    price: 16000,
    stock: 15,
    category_id: 4,
  },
  {
    product_name: "Cybernetic Ears",
    category_name: "Technology",
    store_name: "pathfinder",
    price: 4000,
    stock: 2,
    category_id: 4,
  },
  {
    product_name: "Cybernetic Arm",
    category_name: "Technology",
    store_name: "pathfinder",
    price: 4750,
    stock: 2,
    category_id: 4,
  },
  {
    product_name: "Binoculars",
    category_name: "Technology",
    store_name: "d&d",
    price: 10,
    stock: 15,
    category_id: 4,
  },
  {
    product_name: "Nautical Chart",
    category_name: "Technology",
    store_name: "d&d",
    price: 25,
    stock: 2,
    category_id: 4,
  },
  {
    product_name: "Photographic Camera",
    category_name: "Technology",
    store_name: "d&d",
    price: 50,
    stock: 2,
    category_id: 4,
  },
  {
    product_name: "Long Range Comlink",
    category_name: "Technology",
    store_name: "starwars",
    price: 200,
    stock: 10,
    category_id: 4,
  },
  {
    product_name: "Holo-Messenger",
    category_name: "Technology",
    store_name: "starwars",
    price: 250,
    stock: 10,
    category_id: 4,
  },
  {
    product_name: "Combat Scanner",
    category_name: "Technology",
    store_name: "starwars",
    price: 2000,
    stock: 10,
    category_id: 4,
  },
  {
    product_name: "Keylogging Software",
    category_name: "Technology",
    store_name: "vampire",
    price: 2,
    stock: 15,
    category_id: 4,
  },
  {
    product_name: "Cracking Software",
    category_name: "Technology",
    store_name: "vampire",
    price: 2,
    stock: 2,
    category_id: 4,
  },
  {
    product_name: "GPS Tracker",
    category_name: "Technology",
    store_name: "vampire",
    price: 2,
    stock: 2,
    category_id: 4,
  },
  {
    product_name: "Otter",
    category_name: "Companions",
    store_name: "pathfinder",
    price: 25,
    stock: 3,
    category_id: 5,
  },
  {
    product_name: "Pig",
    category_name: "Companions",
    store_name: "pathfinder",
    price: 10,
    stock: 5,
    category_id: 5,
  },
  {
    product_name: "Cat",
    category_name: "Companions",
    store_name: "pathfinder",
    price: 4,
    stock: 2,
    category_id: 5,
  },
  {
    product_name: "Canary",
    category_name: "Companions",
    store_name: "d&d",
    price: 10,
    stock: 3,
    category_id: 5,
  },
  {
    product_name: "Giant Centipede",
    category_name: "Companions",
    store_name: "d&d",
    price: 150,
    stock: 5,
    category_id: 5,
  },
  {
    product_name: "Arctic Fox",
    category_name: "Companions",
    store_name: "d&d",
    price: 200,
    stock: 2,
    category_id: 5,
  },
  {
    product_name: "Raven",
    category_name: "Companions",
    store_name: "vampire",
    price: 2,
    stock: 10,
    category_id: 5,
  },
  {
    product_name: "Cat",
    category_name: "Companions",
    store_name: "vampire",
    price: 1,
    stock: 10,
    category_id: 5,
  },
  {
    product_name: "Dog",
    category_name: "Companions",
    store_name: "vampire",
    price: 1,
    stock: 10,
    category_id: 5,
  },
  {
    product_name: "3PX-Series Protocol Droid",
    category_name: "Droids",
    store_name: "starwars",
    price: 7750,
    stock: 10,
    category_id: 6,
  },
  {
    product_name: "5YQ-Series Protocol Droid",
    category_name: "Droids",
    store_name: "starwars",
    price: 5500,
    stock: 10,
    category_id: 6,
  },
  {
    product_name: "RA-7 Protocol Droid",
    category_name: "Droids",
    store_name: "starwars",
    price: 12000,
    stock: 10,
    category_id: 6,
  },
  {
    product_name: "Eyes of the Owl",
    category_name: "Magic Items",
    store_name: "pathfinder",
    price: 4000,
    stock: 3,
    category_id: 7,
  },
  {
    product_name: "Boots of Speed",
    category_name: "Magic Items",
    store_name: "pathfinder",
    price: 12000,
    stock: 5,
    category_id: 7,
  },
  {
    product_name: "Hat of Disguise",
    category_name: "Magic Items",
    store_name: "pathfinder",
    price: 1800,
    stock: 2,
    category_id: 7,
  },
  {
    product_name: "Bag of Holding",
    category_name: "Magic Items",
    store_name: "d&d",
    price: 5000,
    stock: 3,
    category_id: 7,
  },
  {
    product_name: "Ring of Invisibility",
    category_name: "Magic Items",
    store_name: "d&d",
    price: 10000,
    stock: 5,
    category_id: 7,
  },
  {
    product_name: "Staff of Striking",
    category_name: "Magic Items",
    store_name: "d&d",
    price: 20000,
    stock: 2,
    category_id: 7,
  },
  {
    product_name: "Advanced Horse",
    category_name: "Vehicles",
    store_name: "pathfinder",
    price: 1500,
    stock: 10,
    category_id: 8,
  },
  {
    product_name: "Draft (Heavy) Horse",
    category_name: "Vehicles",
    store_name: "pathfinder",
    price: 1000,
    stock: 5,
    category_id: 8,
  },
  {
    product_name: "Pony",
    category_name: "Vehicles",
    store_name: "pathfinder",
    price: 800,
    stock: 20,
    category_id: 8,
  },
  {
    product_name: "Riding Horse",
    category_name: "Vehicles",
    store_name: "d&d",
    price: 75,
    stock: 10,
    category_id: 8,
  },
  {
    product_name: "Camel",
    category_name: "Vehicles",
    store_name: "d&d",
    price: 50,
    stock: 10,
    category_id: 8,
  },
  {
    product_name: "Galley",
    category_name: "Vehicles",
    store_name: "d&d",
    price: 30000,
    stock: 10,
    category_id: 8,
  },
  {
    product_name: "Business Jet",
    category_name: "Vehicles",
    store_name: "vampire",
    price: 5,
    stock: 10,
    category_id: 8,
  },
  {
    product_name: "Yacht",
    category_name: "Vehicles",
    store_name: "vampire",
    price: 4,
    stock: 10,
    category_id: 8,
  },
  {
    product_name: "Mid-Size Car",
    category_name: "Vehicles",
    store_name: "vampire",
    price: 2,
    stock: 10,
    category_id: 8,
  },
  {
    product_name: "8880 Luxury Landspeeder",
    category_name: "Vehicles",
    store_name: "starwars",
    price: 40000,
    stock: 10,
    category_id: 8,
  },
  {
    product_name: "Starhawk Speeder Bike",
    category_name: "Vehicles",
    store_name: "starwars",
    price: 2000,
    stock: 10,
    category_id: 8,
  },
  {
    product_name: "T-13 Airspeeder",
    category_name: "Vehicles",
    store_name: "starwars",
    price: 10000,
    stock: 10,
    category_id: 8,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;





