const knexConnectionFactory = require('knex');
const ContactsRepository = require('./ContactsRepository');
const mapContactDataToEntity = require('./mappers/mapContactDataToEntity');

const makeKnex = config => knexConnectionFactory({
  client: config.dbClient,
  connection: {
    filename: config.dbFilename,
  },
  debug: config.dbLogging,
  useNullAsDefault: true,
});

const makeRepositories = knex => Object.freeze({
  contactsRepository: new ContactsRepository({ knex, mapContactDataToEntity }),
});

module.exports = config => makeRepositories(makeKnex(config));
