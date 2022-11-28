// Require needed modules
const router = require("express").Router();
const { Tag, Product } = require("../../models");

// Get route for all tags
router.get("/", async (req, res) => {
  // find all tags and include its products
  try {
    const allTags = await Tag.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get route for a single tag
router.get("/:id", async (req, res) => {
  // find a single tag by its `id` and include its products
  try {
    const oneTag = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
        },
      ],
    });
    res.status(200).json(oneTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Post route for creating a new tag
router.post("/", async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Put route for updating a tag
router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json("The tag has been updated!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete route fo destroying a tag
router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json("The tag has been deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
