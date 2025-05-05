import { expect } from 'chai';
import {
  filterUsersByAge,
  sortUsersByName,
  findUserById,
  isEmailTaken,
} from '../utils/usersListUtils.js';

const testUsers = [
  { id: 10, name: 'Zelda', age: 24, email: 'zelda11@yahoo.com' },
  { id: 11, name: 'Shreck', age: 35, email: 'shreck@gmail.com' },
  { id: 12, name: 'Lulu', age: 45, email: 'lulu2001@gmail.com' },
];

describe('🧪 usersListUtils module', () => {
  describe('🧓 filterUsersByAge()', () => {
    it('should include only users whose age is between 30 and 50', () => {
      const result = filterUsersByAge(testUsers, 30, 50);
      expect(result.map(u => u.name)).to.deep.equal(['Shreck', 'Lulu']);
    });

    it('should return an empty array if no users fit the age range', () => {
      const result = filterUsersByAge(testUsers, 90, 100);
      expect(result).to.have.lengthOf(0);
    });

    it('should throw an error if the input is not an array', () => {
      expect(() => filterUsersByAge('nope', 20, 30)).to.throw('Users must be an array');
    });
  });

  describe('🔤 sortUsersByName()', () => {
    it('should sort users alphabetically by name', () => {
      const sorted = sortUsersByName(testUsers);
      const names = sorted.map(u => u.name);
      expect(names).to.eql(['Lulu', 'Shreck', 'Zelda']);
    });

    it('should throw an error if input is not an array', () => {
      expect(() => sortUsersByName(undefined)).to.throw('Users must be an array');
    });
  });

  
  describe('🔍 findUserById()', () => {
    it('should return the user with the given ID', () => {
      const user = findUserById(testUsers, 11);
      expect(user.email).to.equal('shreck@gmail.com');
    });

    it('should return null if the ID is not found', () => {
      const result = findUserById(testUsers, 999);
      expect(result).to.be.null;
    });

    it('should throw an error if input is not an array', () => {
      expect(() => findUserById(null, 10)).to.throw('Users must be an array');
    });
  });

  describe('📧 isEmailTaken()', () => {
    it('should return true when the email exists', () => {
      const exists = isEmailTaken(testUsers, 'zelda11@yahoo.com');
      expect(exists).to.be.true;
    });

    it('should return false when the email does not exist', () => {
      const exists = isEmailTaken(testUsers, 'donkey@swamp.com');
      expect(exists).to.be.false;
    });

    it('should throw an error if users input is not an array', () => {
      expect(() => isEmailTaken(404, 'test@email.com')).to.throw('Users must be an array');
    });
  });
});
