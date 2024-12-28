var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/index.html', function (req, res, next) {
  res.render('index');
});

router.get('/documentation.html', function (req, res, next) {
  res.render('documentation');
});

router.get('/download.html', function (req, res, next) {
  res.render('download');
});

router.get('/donate.html', function (req, res, next) {
  res.render('donate');
});

router.get('/teste.html', function(req, res, next) {
	res.render('teste');
});


router.get('/teste.html', function(req, res, next) {
	res.render('teste');
});


router.get('/pagina1.html', function(req, res, next) {
	res.render('pagina1');
});

module.exports = router;
