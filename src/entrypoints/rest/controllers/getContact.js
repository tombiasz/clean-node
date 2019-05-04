const {
  GetContactRequest,
  GetContactUseCase,
} = require('../../../domain/usecases/getContact');
const {
  ContactsRepository,
} = require('../../../dataProviders/databases/contacts');

module.exports = async (req, res) => {
  const contactsRepository = new ContactsRepository();
  const request = new GetContactRequest(req.params);
  const usecase = new GetContactUseCase({ contactsRepository });
  const response = await usecase.handle({ request });
  res.json(response);
};
