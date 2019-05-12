const Email = require('../../../../domain/entities/email');

module.exports = emailData => new Email({
  id: emailData.id,
  email: emailData.email,
  createdAt: emailData.created_at,
  deletedAt: emailData.deleted_at,
});
