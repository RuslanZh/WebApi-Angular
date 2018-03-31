// Angular requires Zone.js
require('zone.js/dist/zone-node');

const express = require('express');
// const ngExpressEngine = require('@nguniversal/express-engine').ngExpressEngine;
const { ngExpressEngine } = require('@nguniversal/express-engine');
const port = process.env.PORT || 8080;

const {
  ServerAppModuleNgFactory,
  LAZY_MODULE_MAP
} = require(`./dist-server/main.bundle`);

const app = express();
console.log(LAZY_MODULE_MAP);
const {
  provideModuleMap
} = require('@nguniversal/module-map-ngfactory-loader');

const provider = provideModuleMap(LAZY_MODULE_MAP);

app.engine(
  'html',
  ngExpressEngine({
    bootstrap: ServerAppModuleNgFactory,
    providers: [provider]
  })
);

app.set('view engine', 'html');
app.set('views', __dirname);

// app.use(express.static(__dirname + '/assets', { index: false }));
app.use(express.static(__dirname + '/dist', { index: false }));

app.get('/*', (req, res) => {
  console.log(`GET: ${req.originalUrl}`);

  res.render('./dist/index', {
    req: req,
    res: res
  });
});

app.listen(port, () => {
  console.log(port);
});

