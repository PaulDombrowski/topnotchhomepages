const express = require('express');
const router = express.Router();

/* GET home page */



router.get("/", (req, res, next) => {
  res.render("index", { style: "stylesheet-provehumanbeing.css ", layout: "ExtraLayoutFürIndex.hbs" });
});




module.exports = router;
