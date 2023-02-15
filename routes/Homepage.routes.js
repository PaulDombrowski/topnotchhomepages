const express = require('express');
const router = express.Router();
const Homepages = require("../models/Homepage.model");
const Comment = require("../models/Comment.model");


router.get("/add", (req, res, next) => {
    res.render("add");
  });




// route overview - select categories //

  router.get("/overview", (req, res, next) => {
    const category = req.query.category;
    console.log("CAT: ", category)
    if (category) {
      const query = { categories: category };
      Homepages.find(query)
        .then(homepages => {
          console.log(homepages);
          res.render("overview", { homepages });
        })
        .catch(err => next(err));
    } else {
        Homepages.find( )
        .then(homepages => {
          console.log(homepages);
          res.render("overview", { homepages })
        })
        .catch(err => next(err))
    }
  });


  // post a homepage - route //
router.post("/add", (req, res, next) => {
  
    const { title, review, categories, url,  } = req.body
    
    Homepages.create({ title, review, categories, url })
      .then(createdHomepage => {
        res.redirect("/overview")
      })
      .catch(err => next(err))
  });


  // detailsview route//
  router.get("/homepages/:id", (req, res, next) => {
    const id = req.params.id
  
    Homepages.findById(id)
      .populate("comments")
      .then(homepageDetail => {
        res.render("detailsview", { homepageDetail })
      })
      .catch(err => next(err))
  });

  // creating a comment - route//
  router.post("/homepages/:id", (req, res, next) => {
    const id = req.params.id
    const { user, comment } = req.body
  
    Comment.create({ user, comment })
      .then(createdComment => {
        Homepages.findByIdAndUpdate(id, { $push: { comments: createdComment._id } })
          .then(homepages => {
            res.redirect(`/homepages/${id}`)
          })
          .catch(err => next(err))
      })
      .catch(err => next(err))
  });
  

  module.exports = router;
