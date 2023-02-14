const express = require('express');
const router = express.Router();
const Homepages = require("../models/Homepage.model");
const Comment = require("../models/Comment.model");


router.get("/add", (req, res, next) => {
    res.render("add");
  });


router.get("/overview", (req, res, next) => {
    Homepages.find()
      .then(homepages => {
        res.render("recipes/all", { homepages })
      })
      .catch(err => next(err))
  })

router.post("/add", (req, res, next) => {
  
    const { title, review } = req.body
    
    Homepages.create({ title, review })
      .then(createdHomepage => {
        res.redirect("/overview")
      })
      .catch(err => next(err))
  });

  module.exports = router;
