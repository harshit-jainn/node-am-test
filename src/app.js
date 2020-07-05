var express = require('express');
var app = express();
var request = require('request');
var path = require('path');

const url = 'http://api.weatherstack.com/current?access_key=773b83392a9b9bf6d20c39e25c62d900&query=28.408050,77.324339';

const staticDirectory = path.join(__dirname, '../static');
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    res.render('index', {
        title: "Home Page",
        desc: "THis is the Homepage"
    });
});

app.get('/weather', (req, res) => {
    console.log(req);
    if (!req.query.address) {
        res.send('error');
    }
    request(url, (err, res2) => {
        res.send(JSON.parse(res2.body));
        // console.log(err); 
    });
    // res.send('help page');
});


app.use(express.static(staticDirectory));

app.listen(3000, () => {
    console.log('Server started');
});