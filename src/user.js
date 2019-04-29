class User {
  constructor({
    id,
    username,
    createdAt = Date.now(),
    updatedAt = Date.now(),
    deletedAt = null,
  }) {
    this.id = id;
    this.username = username;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  get isDeleted() {
    return this.deletedAt !== null;
  }
}

module.exports = User;
