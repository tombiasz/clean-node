const tlds = require('tlds');

const EMAIL_HOSTNAME_REGEX = /[^@]+$/;

class Email {
  constructor({
    id,
    email,
    createdAt = Date.now(),
    deletedAt = null,
  }) {
    this.id = id;
    this.email = email;
    this.createdAt = createdAt;
    this.deletedAt = deletedAt;
  }

  get isTld() {
    const hostname = this.email.match(EMAIL_HOSTNAME_REGEX).pop();
    const domain = hostname.substring(hostname.indexOf('.') + 1);
    return tlds.indexOf(domain) !== -1;
  }

  get isDeleted() {
    return this.deletedAt !== null;
  }
}

module.exports = Email;
