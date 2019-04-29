const Contact = require('../contact');

describe('Contact', () => {
  test('should instantiate Contact', () => {
    const now = Date.now();
    const contact = new Contact({
      id: 1,
      firstName: 'foo',
      lastName: 'bar',
      description: 'desc',
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
    });

    expect(contact.id).toBe(1);
    expect(contact.firstName).toBe('foo');
    expect(contact.lastName).toBe('bar');
    expect(contact.description).toBe('desc');
    expect(contact.createdAt).toBe(now);
    expect(contact.updatedAt).toBe(now);
    expect(contact.deletedAt).toBe(null);
  });

  test('fullName should return proper value', () => {
    const now = Date.now();
    const contact = new Contact({
      id: 1,
      firstName: 'foo',
      lastName: 'bar',
      description: 'desc',
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
    });

    expect(contact.fullName).toBe('foo bar');
  });

  describe('when deletedAt is set', () => {
    test('isDeleted should return true', () => {
      const now = Date.now();
      const contact = new Contact({
        id: 1,
        firstName: 'foo',
        lastName: 'bar',
        description: 'desc',
        createdAt: now,
        updatedAt: now,
        deletedAt: now,
      });

      expect(contact.isDeleted).toBe(true);
    });
  });

  describe('when deletedAt is null', () => {
    test('isDeleted should return false', () => {
      const now = Date.now();
      const contact = new Contact({
        id: 1,
        firstName: 'foo',
        lastName: 'bar',
        description: 'desc',
        createdAt: now,
        updatedAt: now,
        deletedAt: null,
      });

      expect(contact.isDeleted).toBe(false);
    });
  });
});