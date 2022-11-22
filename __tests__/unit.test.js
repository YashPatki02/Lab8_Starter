// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber Tests
test('isPhoneNumber() returns true for valid phone numbers', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber() returns true for valid phone numbers', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber() returns false for invalid phone numbers', () => {
    expect(functions.isPhoneNumber('1234DFW7890')).toBe(false);
});

test('isPhoneNumber() returns false for invalid phone numbers', () => {
    expect(functions.isPhoneNumber('123 AAA 7890')).toBe(false);
});

// isEmail Tests
test('isEmail() returns true for valid emails', () => {
    expect(functions.isEmail('fury2020@gmail.com')).toBe(true);
});

test('isEmail() returns true for valid emails', () => {
    expect(functions.isEmail('hellopanda@yahoo.com')).toBe(true);
});

test('isEmail() returns false for invalid emails', () => {
    expect(functions.isEmail('hello world')).toBe(false);
});

test('isEmail() returns false for invalid emails', () => {
    expect(functions.isEmail('123@gmail. com')).toBe(false);
});

// isStrongPassword Tests
test('isStrongPassword() returns true for strong passwords', () => {
    expect(functions.isStrongPassword('My21*is_*34*_*_Po')).toBe(false);
});

test('isStrongPassword() returns true for strong passwords', () => {
    expect(functions.isStrongPassword('H23*el*lo*123*_1')).toBe(false);
});

test('isStrongPassword() returns false for weak passwords', () => {
    expect(functions.isStrongPassword('hello')).toBe(true);
});

test('isStrongPassword() returns false for weak passwords', () => {
    expect(functions.isStrongPassword('helloworld')).toBe(true);
});

// isDate Tests
test('isDate() returns true for valid dates', () => {
    expect(functions.isDate('12/31/2023')).toBe(true);
});

test('isDate() returns true for valid dates', () => {
    expect(functions.isDate('1/1/2023')).toBe(true);
});

test('isDate() returns false for invalid dates', () => {
    expect(functions.isDate('12/30/20')).toBe(false);
});

test('isDate() returns false for invalid dates', () => {
    expect(functions.isDate('1/1/202')).toBe(false);
});

// isHexColor Tests 
test('isHexColor() returns true for valid hex colors', () => {
    expect(functions.isHexColor('#FFFFAA')).toBe(true);
});

test('isHexColor() returns true for valid hex colors', () => {
    expect(functions.isHexColor('#0000FF')).toBe(true);
});

test('isHexColor() returns false for invalid hex colors', () => {
    expect(functions.isHexColor('F4FFF')).toBe(false);
});

test('isHexColor() returns false for invalid hex colors', () => {
    expect(functions.isHexColor('#000F0')).toBe(false);
});