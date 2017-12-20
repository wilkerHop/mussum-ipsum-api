let router = require('express').Router();
let frases = require('../data/sentences')

router.get('/', (req, res) => {
	var paragrafo = frases[0];

	for (let i = 0; i < 5; i++) {
		var len = 1 + Math.trunc(Math.random() * frases.length);
		if (len > frases.length) len--;
		paragrafo += ', ' + frases[len];
	}
	paragrafo += '.';

	res.send({
		paragrafo
	});
})


router.get('/:num', (req, res) => {
	var num = parseInt(req.params.num);
	if (isNaN(num))
		return res.send({
			err: {
				err: 'Parâmetro NaN',
				param: req.params.num
			}
		});

	var regex = /[^a-zA-Z0-9\s\:]*/; // non-alphanumeric regex

	var paragrafos = frases[0];

	for (let j = 0; j < num; j++) {
		for (let i = 0; i < 5; i++) {
			var len = 1 + Math.trunc(Math.random() * frases.length);
			if (len > frases.length) len--;
			paragrafos += (!regex.test(paragrafos[paragrafos.length])) ? ', ' + frases[len] : ' ' + frases[len];
		}
		paragrafos += '.\n';
	}

	res.send({
		paragrafos
	});
})

function criarParagrafo() {}

module.exports = router;