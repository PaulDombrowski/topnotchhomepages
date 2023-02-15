const router = require("express").Router();
const { isLoggedIn } = require("../middleware/route-guard");

router.get('/profile', (req, res, next) => {
	res.render('profile')
});

module.exports = router;