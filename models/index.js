// Require needed modules
const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  }
});

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  }
});

module.exports = { Category, Product, Tag, ProductTag };
