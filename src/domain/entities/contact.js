class Contact {
  constructor({
    id,
    firstName,
    lastName,
    description,
    createdAt = Date.now(),
    updatedAt = Date.now(),
    deletedAt = null,
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get isDeleted() {
    return this.deletedAt !== null;
  }
}

module.exports = Contact;
