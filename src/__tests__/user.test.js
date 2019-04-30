const User = require('../user');

describe('User', () => {
  test('should instantiate User', () => {
    const now = Date.now();
    const user = new User({
      id: 1,
      username: 'fizzbuzz',
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
    });

    expect(user.id).toBe(1);
    expect(user.username).toBe('fizzbuzz');
    expect(user.createdAt).toBe(now);
    expect(user.deletedAt).toBe(null);
  });

  describe('when deletedAt is set', () => {
    test('isDeleted should return true', () => {
      const now = Date.now();
      const user = new User({
        id: 1,
        user: 'fizzbuzz',
        createdAt: now,
        deletedAt: now,
      });

      expect(user.isDeleted).toBe(true);
    });
  });

  describe('when deletedAt is null', () => {
    test('isDeleted should return false', () => {
      const now = Date.now();
      const user = new User({
        id: 1,
        user: 'fizzbuzz',
        createdAt: now,
        deletedAt: null,
      });

      expect(user.isDeleted).toBe(false);
    });
  });
});
