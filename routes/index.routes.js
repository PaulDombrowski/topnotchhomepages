const express = require('express');
const router = express.Router();

/* GET home page */

router.get("/overview", (req, res, next) => {
  res.render("overview");
});

router.get("/", (req, res, next) => {
  res.render("index", { style: "stylesheet-provehumanbeing.css "});
});




module.exports = router;
