const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Get route for all tags
router.get('/', (req, res) => {
  // find all tags and include its products
  try {
    Tag.findAll({
      include: [Product],
    });
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// Get route for a single tag
router.get('/:id', (req, res) => {
  // find a single tag by its `id` and include its products
  try {
    Tag.findByPk(req.params.id, {
      include: [Product],
    });
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// Post route for creating a new tag
router.post('/', (req, res) => {
  // create a new tag
  try {
    Tag.create(req.body);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// Put route for updating a tag
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    Tag.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// Delete route fo destroying a tag
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    Tag.destroy({
      where: {
        id: req.params.id,
      }
    });
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
