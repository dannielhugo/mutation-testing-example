import { isGreaterThan, isLowerThan } from '../src/helper';

describe('isGreaterThan', () => {
  it('should return true for isGreaterThan(10,5)', () => {
    expect(isGreaterThan(10, 5)).toBe(true);
  });
  
  it('should return false for isGreaterThan(2,3)', () => {
    expect(isGreaterThan(2, 3)).toBe(false);
  });
});

describe('isLowerThan', () => {
  it('should return false for isLowerThan(10,5)', () => {
    expect(isLowerThan(10, 5)).toBe(false);
  });

  it('should return true for isLowerThan(2,3)', () => {
    expect(isLowerThan(2, 3)).toBe(true);
  });
});