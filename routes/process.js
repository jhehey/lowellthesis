var express = require('express');
var router = express.Router();

router.post('/scores', function (req, res, next) {
	const {
		gameScores: { wm: gwm, flex: gflex, control: gcontrol },
		psychological: { wm: pwm, flex: pflex, control: pcontrol },
	} = req.body;

	gameResults = {};
	// Game WM
	if (gwm >= 1 && gwm <= 6.99) {
		gameResults.wm = 'Low WM';
	} else if (gwm >= 7 && gwm <= 13.99) {
		gameResults.wm = 'Decent WM';
	} else if (gwm >= 14 && gwm <= 20) {
		gameResults.wm = 'Good WM';
	} else {
		gameResults.wm = 'Invalid';
	}

	// Game Flexibility
	if (gflex >= 1 && gflex <= 16.99) {
		gameResults.flex = 'Good Flexibility';
	} else if (gflex >= 17 && gflex <= 33.99) {
		gameResults.flex = 'Decent Flexibility';
	} else if (gflex >= 34 && gflex <= 50) {
		gameResults.flex = 'Low Flexibility';
	} else {
		gameResults.flex = 'Invalid';
	}

	// Game Self Control
	if (gcontrol >= 1 && gcontrol <= 6.99) {
		gameResults.control = 'Low Self Control';
	} else if (gcontrol >= 7 && gcontrol <= 13.99) {
		gameResults.control = 'Decent Self Control';
	} else if (gcontrol >= 14 && gcontrol <= 20) {
		gameResults.control = 'Good Self Control';
	} else {
		gameResults.control = 'Invalid';
	}

	psychResults = {};
	// psych WM
	if (pwm >= 1 && pwm <= 3.99) {
		psychResults.wm = 'Low WM';
	} else if (pwm >= 4 && pwm <= 7.99) {
		psychResults.wm = 'Decent WM';
	} else if (pwm >= 8 && pwm <= 10) {
		psychResults.wm = 'Good WM';
	} else {
		psychResults.wm = 'Invalid';
	}

	// psych Flexibility
	if (pflex >= 1 && pflex <= 10.99) {
		psychResults.flex = 'Low Flexibility';
	} else if (pflex >= 11 && pflex <= 21.99) {
		psychResults.flex = 'Decent Flexibility';
	} else if (pflex >= 22 && pflex <= 32) {
		psychResults.flex = 'Good Flexibility';
	} else {
		psychResults.flex = 'Invalid';
	}

	// psych Self Control
	if (pcontrol >= 1 && pcontrol <= 1.99) {
		psychResults.control = 'Low Self Control';
	} else if (pcontrol >= 2 && pcontrol <= 3.99) {
		psychResults.control = 'Decent Self Control';
	} else if (pcontrol >= 4 && pcontrol <= 5) {
		psychResults.control = 'Good Self Control';
	} else {
		psychResults.control = 'Invalid';
	}

	console.log({ results: { gameResults, psychResults } });
	res.redirect('/process/result');
});

module.exports = router;
