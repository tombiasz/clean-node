const KnexRepository = require('./KnexRepository');

class ContactsRepository extends KnexRepository {
  // eslint-disable-next-line class-methods-use-this
  getById({ id }) {
    return this.knex('contacts')
      .where({ id })
      .first();
  }
}

module.exports = ContactsRepository;
