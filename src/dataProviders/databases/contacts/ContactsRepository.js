const KnexRepository = require('./KnexRepository');

class ContactsRepository extends KnexRepository {
  constructor({ knex, mapContactDataToEntity }) {
    super({ knex });
    this.mapContactDataToEntity = mapContactDataToEntity;
  }

  async getById({ id }) {
    const data = await this.knex('contacts')
      .where({ id })
      .first();
    return this.mapContactDataToEntity(data);
  }
}

module.exports = ContactsRepository;
