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

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
