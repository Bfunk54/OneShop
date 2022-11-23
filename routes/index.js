// Require ezpress module for routing
const router = require('express').Router();
const apiRoutes = require('./api');

// Add prefix of `/api` to routes created in `api` directory
router.use('/api', apiRoutes);

// If no API routes are hit, send the a message telling the user they are in the wrong place
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;