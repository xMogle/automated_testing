import { expect } from 'chai';
import { capitalize, reverseString, isPalindrome } from '../utils/stringUtils.js';

describe('stringUtils', () => {
  describe('capitalize()', () => {
    it('capitalizes the first letter of a word', () => {
      expect(capitalize('hello')).to.equal('Hello');
    });

    it('returns an empty string if input is empty', () => {
      expect(capitalize('')).to.equal('');
    });

    it('throws error if input is not a string', () => {
      expect(() => capitalize(123)).to.throw('Input must be a string');
    });
  });

  describe('reverseString()', () => {
    it('reverses the string', () => {
      expect(reverseString('abc')).to.equal('cba');
    });

    it('returns an empty string if input is empty', () => {
      expect(reverseString('')).to.equal('');
    });

    it('throws error if input is not a string', () => {
      expect(() => reverseString(null)).to.throw('Input must be a string');
    });
  });

  describe('isPalindrome()', () => {
    it('returns true for a palindrome', () => {
      expect(isPalindrome('racecar')).to.be.true;
    });

    it('returns false for a non-palindrome', () => {
      expect(isPalindrome('hello')).to.be.false;
    });

    it('throws error if input is not a string', () => {
      expect(() => isPalindrome({})).to.throw('Input must be a string');
    });
  });
});
