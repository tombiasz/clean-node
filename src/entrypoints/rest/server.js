const express = require('express');
const getContact = require('./controllers/getContact');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/contacts/:contactId', getContact);

const extendAppLocals = (obj) => {
  app.locals = { ...app.locals, ...obj };
  return app;
};

const startServer = ({ port }) => new Promise(
  resolve => app.listen(port, () => resolve(port)),
);

module.exports = ({ config, repositories }) => {
  extendAppLocals({ repositories });
  return startServer(config);
};
