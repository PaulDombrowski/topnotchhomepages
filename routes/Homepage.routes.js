const express = require('express');
const router = express.Router();
const Homepages = require("../models/Homepage.model");
const Comment = require("../models/Comment.model");


router.get("/add", (req, res, next) => {
    res.render("add");
  });


router.get("/overview", (req, res, next) => {
    const query = {}
    form = req.query.category

    console.log("query is:", form)

    Homepages.find( )
      .then(homepages => {
        console.log(homepages);
        res.render("overview", { homepages })
      })
      .catch(err => next(err))
  })

router.post("/add", (req, res, next) => {
  
    const { title, review, categories, url } = req.body
    
    Homepages.create({ title, review, categories, url })
      .then(createdHomepage => {
        res.redirect("/overview")
      })
      .catch(err => next(err))
  });

  router.get("/homepages/:id", (req, res, next) => {
    const id = req.params.id
  
    Homepages.findById(id)
      .populate("comments")
      .then(homepageDetail => {
        res.render("detailsview", { homepageDetail })
      })
      .catch(err => next(err))
  })

  module.exports = router;
