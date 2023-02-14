const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/provehumanbeing", (req, res, next) => {
  res.render("provehumanbeing", { style: "stylesheet-provehumanbeing.css "});
});

router.get("/provehumanbeing", (req, res, next) => {
  res.render("provehumanbeing", { style: "stylesheet-provehumanbeing.css "});
});

module.exports = router;
