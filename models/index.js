const Category = require('./Category');
const Product = require('./Product');

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
  },
  as: 'product_tags'
});

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tag_products'
});

module.exports = { Category, Product };
