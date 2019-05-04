const makeConfig = require('./config');
const makeRestServer = require('./entrypoints/rest/server');
const ContactsRepository = require('./dataProviders/databases/contacts/ContactsRepository');

const config = makeConfig(process.env);

makeRestServer({
  config: config.restApi,
  repositories: {
    contacts: {
      contactsRepository: new ContactsRepository(),
    },
  },
}).then(port => console.log(`REST Api listening on port ${port}!`));
