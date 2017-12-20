let router = require('express').Router();
let frases = require('../data/sentences')

router.get('/', (req, res) => {
    res.send({
        mipsum: frases[0]
    });
})

router.get('/random', (req, res) => {
    res.send({
        frase: frases[Math.trunc(Math.random() * frases.length)]
    });
})

router.get('/:num', (req, res) => {
    var num = parseInt(req.params.num);
    if (isNaN(num))
        return res.send({
            err: {
				causa: 'Parâmetro NaN',
				parametro: req.params.num
			}
        });
    if (num > frases.length)
        return res.send({
            err: {
                causa: 'Parâmetro fora do limite',
                limite: frases.length
            }
        })
    res.send({
        frase: frases[num]
    });
})

module.exports = router;