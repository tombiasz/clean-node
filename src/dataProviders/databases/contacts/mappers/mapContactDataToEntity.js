const Contact = require('../../../../domain/entities/contact');

module.exports = contactData => new Contact({
  id: contactData.id,
  firstName: contactData.first_name,
  lastName: contactData.last_name,
  description: contactData.description,
  createdAt: contactData.created_at,
  updatedAt: contactData.updated_at,
  deletedAt: contactData.deleted_at,
});
