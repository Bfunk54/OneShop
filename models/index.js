const Category = require('./Category');
const Product = require('./Product');

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

module.exports = { Traveller, Location, Trip };
