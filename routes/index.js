var express = require('express');
var router = express.Router();

const path = require('path');
const fs = require('fs');
const uniqueFilename = require('unique-filename');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index');
});

router.get('/result', function (req, res, next) {
	res.render('result');
});

router.post('/save', function (req, res, next) {
	const data = req.body;
	const tosave = `\
General Info
Name: ${data.genInfo.name}
Age: ${data.genInfo.age}
Gender: ${data.genInfo.gender}

Emotion Assessment
ECG Assessment: ${data.emotions.ecg}
CNN Assessment: ${data.emotions.cnn}
Patient's Assessment: ${data.emotions.patient}

Game Scores
WM: ${data.results.gameResults.wm}
Flexibility: ${data.results.gameResults.flex}
Self-Control: ${data.results.gameResults.control}

Psychological Test Scores
WM: ${data.results.psychResults.wm}
Flexibility: ${data.results.psychResults.flex}
Self-Control: ${data.results.psychResults.control}
`;
	console.log(tosave);

	const filepath = uniqueFilename(path.resolve(`${__dirname}/../tmp/`));
	const filename = path.basename(filepath);
	const file = `${filepath}.txt`;

	console.log(file);
	fs.writeFile(file, tosave, function (err) {
		if (err) {
			console.error(err);
			return res.json({ success: false, err });
		} else {
			return res.json({ success: true, filename });
		}
	});
});

router.get('/download/:filename', function (req, res, next) {
	const filename = req.params.filename;
	const filepath = `${__dirname}/../tmp/${filename}.txt`;
	const file = path.resolve(filepath);
	res.download(file);
});

module.exports = router;
