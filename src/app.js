const makeConfig = require('./config');
const makeRestServer = require('./entrypoints/rest/server');
const makeContactsRepositories = require('./dataProviders/databases/contacts');

const config = makeConfig(process.env);
const contactsRepositories = makeContactsRepositories(config.contactsDb);

makeRestServer({
  config: config.restApi,
  repositories: {
    contacts: {
      ...contactsRepositories,
    },
  },
}).then(port => console.log(`REST Api listening on port ${port}!`));
