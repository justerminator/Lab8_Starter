// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// phone number
test('test phone 555-555-5555', () => {
    expect(functions.isPhoneNumber('555-555-5555')).toBe(true);
  });

test('test phone (630)999-9999', () => {
  expect(functions.isPhoneNumber('(630)999-9999')).toBe(true);
});

test('test phone ###-###-####', () => {
  expect(functions.isPhoneNumber('###-###-####')).toBe(false);
});

test('test phone 3333333333', () => {
  expect(functions.isPhoneNumber('3333333333')).toBe(false);
});

// email
test('test email jjl025@ucsd.edu', () => {
  expect(functions.isEmail('jjl025@ucsd.edu')).toBe(true);
});

test('test email apple@gmail.com', () => {
  expect(functions.isEmail('apple@gmail.com')).toBe(true);
});

test('test email @@@@@@@@@@@', () => {
  expect(functions.isEmail('@@@@@@@@@@@')).toBe(false);
});

test('test email apple', () => {
  expect(functions.isEmail('apple')).toBe(false);
});

// password
test('test password a1234', () => {
  expect(functions.isStrongPassword('a1234')).toBe(true);
});

test('test password a_123', () => {
  expect(functions.isStrongPassword('a_123')).toBe(true);
});

test('test password @@@@@@@@@@@', () => {
  expect(functions.isStrongPassword('@@@@@@@@@@@')).toBe(false);
});

test('test password apple', () => {
  expect(functions.isStrongPassword('1234asdasdasd')).toBe(false);
});

// date
test('test date 12/12/1212', () => {
  expect(functions.isDate('12/12/1212')).toBe(true);
});

test('test date 6/3/1212', () => {
  expect(functions.isDate('6/3/1212')).toBe(true);
});

test('test date 6-3-1212', () => {
  expect(functions.isDate('6-3-1212')).toBe(false);
});

test('test date 2/23/20202', () => {
  expect(functions.isDate('2/23/20202')).toBe(false);
});

// hex color
test('test hex color #FFF', () => {
  expect(functions.isHexColor('#FFF')).toBe(true);
});

test('test hex color #123', () => {
  expect(functions.isHexColor('#123')).toBe(true);
});

test('test hex color 44444', () => {
  expect(functions.isHexColor('44444')).toBe(false);
});

test('test hex color epic', () => {
  expect(functions.isHexColor('epic')).toBe(false);
});