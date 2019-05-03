const makeConfig = require('./config');
const makeRestServer = require('./entrypoints/rest/server');

const config = makeConfig(process.env);

if (config.restApiEnabled) {
  makeRestServer(config.restApi)
    .then(port => console.log(`REST Api listening on port ${port}!`));
}
