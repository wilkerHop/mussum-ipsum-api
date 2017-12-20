let express = require('express');
let app = express();
let cors = require('cors');

app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ['Origin', 'X-Requested-With', 'xx-access-token', 'Content-Type', 'Accept']
}))

app.get('/', (req, res) => {
    res.send(require('./data/sentences'));
})

var paragrafos = require('./routes/paragrafos');
app.use('/paragrafos', paragrafos);
var frases = require('./routes/frases');
app.use('/frases', frases);

app.listen(process.env.PORT || 3000, () => {
    var x = {};
    x.port = process.env.PORT || 3000;
    x.host = process.env.HOST || 'localhost';

    console.log('http://' + x.host + ':' + x.port)
})