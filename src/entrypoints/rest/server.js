const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

module.exports = ({ port }) => new Promise(resolve => app.listen(port, () => resolve(port)));
