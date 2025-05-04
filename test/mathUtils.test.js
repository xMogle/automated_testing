import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../utils/mathUtils.js';

describe('mathUtils', () => {
  describe('add()', () => {
    it('adds two numbers correctly', () => {
      expect(add(2, 3)).to.equal(5);
    });
  });

  describe('subtract()', () => {
    it('subtracts two numbers correctly', () => {
      expect(subtract(10, 4)).to.equal(6);
    });
  });

  describe('multiply()', () => {
    it('multiplies two numbers correctly', () => {
      expect(multiply(3, 5)).to.equal(15);
    });
  });

  describe('divide()', () => {
    it('divides two numbers correctly', () => {
      expect(divide(10, 2)).to.equal(5);
    });

    it('throws an error when dividing by zero', () => {
      expect(() => divide(5, 0)).to.throw('Cannot divide by zero');
    });
  });
  
});
