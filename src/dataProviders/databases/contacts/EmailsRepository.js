const KnexRepository = require('./KnexRepository');

class EmailsRepository extends KnexRepository {
  constructor({
    knex,
    mapEmailDataToEntity = o => o,
  } = {}) {
    super({ knex });
    this.mapEmailDataToEntity = mapEmailDataToEntity;
  }

  async getForContact({ contactId }) {
    const data = await this.knex('emails')
      .select('emails.*')
      .leftJoin('contacts_emails', 'emails.id', 'contacts_emails.email_id')
      .where('contacts_emails.contact_id', contactId);
    return data.map(r => this.mapEmailDataToEntity(r));
  }
}

module.exports = EmailsRepository;
