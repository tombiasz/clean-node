const toBool = value => value === 'true';

const makeRestApiConfig = env => Object.freeze({
  port: env.REST_API_PORT,
});

const makeContactsDbConfig = env => Object.freeze({
  dbClient: env.CONTACTS_DB_CLIENT,
  dbFilename: env.CONTACTS_DB_FILENAME,
  dbLogging: toBool(env.CONTACTS_DB_LOGGING),
});

module.exports = env => Object.freeze({
  restApi: makeRestApiConfig(env),
  contactsDb: makeContactsDbConfig(env),
});
