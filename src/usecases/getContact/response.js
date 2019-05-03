class GetContactResponse {
  constructor({
    id,
    firstName,
    lastName,
    description,
    createdAt,
    updatedAt,
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = GetContactResponse;
