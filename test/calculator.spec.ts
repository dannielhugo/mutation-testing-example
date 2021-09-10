import { add, divide, multiply, sub } from '../src/calculator';

describe('add', () => {
  it('should return 15 for add(10,5)', () => {
    expect(add(10, 5)).toBe(15);
  });

  it('should return 5 for add(2,3)', () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe('sub', () => {
  it('should return 5 for sub(10,5)', () => {
    expect(sub(10, 5)).toBe(5);
  });

  it('should return -5 for sub(5,10)', () => {
    expect(sub(5, 10)).toBe(-5);
  });
});

describe('multiply', () => {
  it('should return 50 for multiply(10,5)', () => {
    expect(multiply(10, 5)).toBe(50);
  });

  it('should return -50 for multiply(-5,10)', () => {
    expect(multiply(-5, 10)).toBe(-50);
  });
});

describe('divide', () => {
  it('should return 2 for divide(10,5)', () => {
    expect(divide(10, 5)).toBe(2);
  });

  it('should return -0.50 for divide(-5,10)', () => {
    expect(divide(-5, 10)).toBe(-0.5);
  });
});
