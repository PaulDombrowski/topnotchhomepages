const router = require("express").Router();
const { isLoggedIn } = require("../middleware/route-guard.js");
const Homepages = require('../models/Homepage.model.js')
const { uploader, cloudinary } = require("../config/cloudinary.config.js")

router.get('/profile', isLoggedIn, (req, res, next) => {
	const user = req.session.user
	console.log(user);

Homepages.find({owner: user._id})
.then(homepagesFromTheUser=> {
	res.render('profile', {user: user, homepages: homepagesFromTheUser},)
})
.catch(err => {
	next(err)
})
});

router.post('/profile', uploader.single("FirstImage"),(req, res, next) => {
	const { title, review, categories, url } = req.body
	const imagePath = req.file.path
	const userId = req.session.user._id
	Homepages.create({title, review, categories, url, owner: userId, imagePath })
		.then(createdHomepages=> {
			res.redirect('/profile')
		})
		.catch(err => {
			next(err)
		})
});

router.get("/delete/:id", (req, res, next) => {
	Homepages.findByIdAndDelete(req.params.id)
		.then(() => {
			res.redirect('/profile')
		})
		.catch(err => next(err))
})


module.exports = router;