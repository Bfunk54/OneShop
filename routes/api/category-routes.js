// Require needed modules
const router = require("express").Router();
const { Category, Product } = require("../../models");

// Get route for all categories
router.get("/", async (req, res) => {
  // find all categories and include its products
  try {
    const allCategories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get route for a single category
router.get("/:id", async (req, res) => {
  // find one category by its `id` value and include its products
  try {
    const oneCategory = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
        },
      ],
    });
    res.status(200).json(oneCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Post route for a new category
router.post("/", async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Put route for updating a category
router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json("The category has been updated!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete route for deleting a category
router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json("The category has been deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
