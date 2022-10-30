const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to NODE JS API");
});

module.exports = router;
