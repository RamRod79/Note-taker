//  Packages needed for file
const router = require('express').Router();

const notesRoutes = require('./noteRoutes');

router.use(notesRoutes);

module.exports = router;

