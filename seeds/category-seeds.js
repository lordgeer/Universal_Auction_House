const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Weapons',
  },
  {
    category_name: 'Clothing',
  },
  {
    category_name: 'Armor',
  },
  {
    category_name: 'Utility',
  },
  {
    category_name: 'Technology',
  },
  {
    category_name: 'Companions',
  },
  {
    category_name: 'Collectibles',
  },
  {
    category_name: 'Vehicles',
  },
 ];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;


