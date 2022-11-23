const router = require("express").Router();
const { Category, Product } = require("../../models");

// Get route for all categories
router.get("/", (req, res) => {
  // find all categories and include its products
  try {
    Category.findAll({
      include: [Product],
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get route for a single category
router.get("/:id", (req, res) => {
  // find one category by its `id` value and include its products
  try {
    Category.findByPk(req.params.id, {
      include: [Product],
    });
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// Post route for a new category
router.post("/", (req, res) => {
  // create a new category
  try {
    Category.create(req.body);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
