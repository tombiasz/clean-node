class GetContactUseCase {
  constructor({ contactsRepository, emailsRepository }) {
    this.contactsRepository = contactsRepository;
    this.emailsRepository = emailsRepository;
  }

  async handle({ request }) {
    const { contactId } = request;
    const contact = await this.contactsRepository.getById({ id: contactId });
    const emails = await this.emailsRepository.getForContact({ contactId });
    emails.map(e => contact.emails.push(e));
    return contact;
  }
}

module.exports = GetContactUseCase;
