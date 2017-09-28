const router = require("express").Router();
const articleRoutes = require("./articles");

// saved articles routes
router.use("/save", articleRoutes);

module.exports = router;