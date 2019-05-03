const {
  GetContactRequest,
  GetContactUseCase,
} = require('../../../domain/usecases/getContact');

module.exports = async (req, res) => {
  const request = new GetContactRequest(req.params);
  const usecase = new GetContactUseCase({
    contactsRepository: {
      getById: async () => ({ id: 1234 }),
    },
  });
  const response = await usecase.handle({ request });
  res.json(response);
};
