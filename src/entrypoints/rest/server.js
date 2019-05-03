const express = require('express');
const getContact = require('./controllers/getContact');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/contacts/:contactId', getContact);

module.exports = ({ port }) => new Promise(resolve => app.listen(port, () => resolve(port)));
