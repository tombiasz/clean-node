const Email = require('../email');

describe('Email', () => {
  test('should instantiate Email', () => {
    const now = Date.now();
    const email = new Email({
      id: 1,
      email: 'foo@bar.com',
      createdAt: now,
      deletedAt: null,
    });

    expect(email.id).toBe(1);
    expect(email.email).toBe('foo@bar.com');
    expect(email.createdAt).toBe(now);
    expect(email.deletedAt).toBe(null);
  });

  describe('when email is registered in a top level domain', () => {
    test('isTld should return true', () => {
      const now = Date.now();
      const email = new Email({
        id: 1,
        email: 'foo@bar.com',
        createdAt: now,
        deletedAt: null,
      });

      expect(email.isTld).toBe(true);
    });
  });

  describe('when email is not registered in a top level domain', () => {
    test('isTld should return false', () => {
      const now = Date.now();
      const email = new Email({
        id: 1,
        email: 'foo@bar.org.pl',
        createdAt: now,
        deletedAt: null,
      });

      expect(email.isTld).toBe(false);
    });
  });

  describe('when deletedAt is set', () => {
    test('isDeleted should return true', () => {
      const now = Date.now();
      const email = new Email({
        id: 1,
        email: 'foo@bar.org.pl',
        createdAt: now,
        deletedAt: now,
      });

      expect(email.isDeleted).toBe(true);
    });
  });

  describe('when deletedAt is null', () => {
    test('isDeleted should return false', () => {
      const now = Date.now();
      const email = new Email({
        id: 1,
        email: 'foo@bar.org.pl',
        createdAt: now,
        deletedAt: null,
      });

      expect(email.isDeleted).toBe(false);
    });
  });
});
