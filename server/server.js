// server.js

var express = require('express');
var bodyParser = require('body-parser');
    // cors = require('cors'),
    // mongoose = require('mongoose'),
    // config = require('./db');
var path = require('path');

const app = express();
app.use(bodyParser.json());
// app.use(cors());
// blogRoutes = require('./blogRoutes');
// app.use('/blog', blogRoutes);

const publicFolder = path.join(__dirname + '/../dist');
app.use(express.static(publicFolder));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

var port = process.env.PORT || 4000;

var server = app.listen(port, function() {
    console.log('Listening on port ' + port);
});
