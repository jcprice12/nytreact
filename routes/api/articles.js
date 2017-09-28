const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/save"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.save);

// Matches with "/api/save/:id"
router
  .route("/:id")
  .delete(articlesController.remove);

module.exports = router;