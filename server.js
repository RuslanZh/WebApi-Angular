// Angular requires Zone.js
require('zone.js/dist/zone-node');

const express = require('express');
const { ngExpressEngine } = require('@nguniversal/express-engine');
const {
  provideModuleMap
} = require('@nguniversal/module-map-ngfactory-loader');
const {
  ServerAppModuleNgFactory,
  LAZY_MODULE_MAP
} = require(`./dist-server/main.bundle`);
const bodyParser = require('body-parser');

const port = process.env.PORT || 4201;
const app = express();
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
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

const messages = [
  {
    id: 1,
    title: 'Title 1',
    text: 'Message 1',
    author: 'Ruslan'
  },
  {
    id: 2,
    title: 'Title 2',
    text: 'Message 2',
    author: 'Ruslan'
  },
  {
    id: 3,
    title: 'Title 3',
    text: 'Message 3',
    author: 'Ruslan'
  },
  {
    id: 4,
    title: 'Title 4',
    text: 'Message 4',
    author: 'Ruslan'
  }
];

const router = express.Router();

router.get('/', function(req, res) {
  res.json({
    status: true,
    data: messages
  });
});

router.get('/:id', function(req, res) {
  //req.query
  let status = false;
  const message = messages.find(m => m.id === parseInt(req.params.id, 10));
  if(message) {
    status = true;
  }

  res.json({
    status: status,
    data: message
  });
});

router.post('/', function(req, res) {
  let status = false;
  let newMessage = null;
  if(req.body.title && req.body.text && req.body.author){
    const lastMessage = messages.slice(-1).pop();
    newMessage = {
      id: lastMessage.id++,
      title: req.body.title,
      text: req.body.text,
      author: req.body.author
    };
    messages.push(newMessage);
    status = true;
  }

  res.json({
    status: status,
    data: newMessage
  });
});

router.put('/:id', function(req, res) {
  let status = false;
  let message = messages.find(m => m.id === parseInt(req.params.id, 10));
  if(message) {
    const updateMessage = {
      ...message,
      title: req.body.title,
      text: req.body.text,
      author: req.body.author
    };
    message = updateMessage;
    status = true;
  }

  res.json({
    status: status,
    data: message
  });
});

router.delete('/:id', function(req, res) {
  let status = false;
  const messageIndex = messages.findIndex(m => m.id === parseInt(req.params.id, 10));
  if (messageIndex > -1) {
    messages.splice(messageIndex, 1);
    status = true;
  }

  res.json({ status: status });
});

app.use('/messages', router);

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

