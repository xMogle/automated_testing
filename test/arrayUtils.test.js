import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../utils/arrayUtils.js';

describe('arrayUtils', () => {
  describe('findMax()', () => {
    it('returns the maximum number in an array', () => {
      expect(findMax([1, 2, 3, 10])).to.equal(10);
    });

    it('throws error if input is not an array', () => {
      expect(() => findMax('not-array')).to.throw('Input must be an array');
    });
  });

  describe('findMin()', () => {
    it('returns the minimum number in an array', () => {
      expect(findMin([5, -1, 3, 0])).to.equal(-1);
    });

    it('throws error if input is not an array', () => {
      expect(() => findMin(null)).to.throw('Input must be an array');
    });
  });
  

  describe('removeDuplicates()', () => {
    it('removes duplicate values from array', () => {
      expect(removeDuplicates([1, 2, 2, 3, 3, 3])).to.deep.equal([1, 2, 3]);
    });

    it('returns an empty array when input is empty', () => {
      expect(removeDuplicates([])).to.deep.equal([]);
    });

    it('throws error if input is not an array', () => {
      expect(() => removeDuplicates({})).to.throw('Input must be an array');
    });
  });
});
