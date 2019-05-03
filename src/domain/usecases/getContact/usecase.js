class GetContactUseCase {
  constructor({ contactsRepository }) {
    this.contactsRepository = contactsRepository;
  }

  async handle({ request }) {
    const { contactId } = request;
    const contact = await this.contactsRepository.getById({ id: contactId });
    return contact;
  }
}

module.exports = GetContactUseCase;
