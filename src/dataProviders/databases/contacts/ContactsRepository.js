const KnexRepository = require('./KnexRepositoy');

class ContactsRepository extends KnexRepository {
  // eslint-disable-next-line class-methods-use-this
  getById({ id }) {
    return {
      id,
      fistName: 'tim',
    };
  }
}

module.exports = ContactsRepository;
