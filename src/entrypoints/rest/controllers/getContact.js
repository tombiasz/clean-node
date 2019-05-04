const {
  GetContactRequest,
  GetContactUseCase,
} = require('../../../domain/usecases/getContact');

module.exports = async (req, res) => {
  const { contactsRepository } = req.app.locals.repositories.contacts;
  const request = new GetContactRequest(req.params);
  const usecase = new GetContactUseCase({ contactsRepository });
  const response = await usecase.handle({ request });
  res.json(response);
};
