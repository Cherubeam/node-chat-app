const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non-string values', () => {
		let nonString = isRealString({});
		expect(nonString).toBeFalsy();
	});

	it('should reject string with only spaces', () => {
		let emptyString = isRealString('   ');
		expect(emptyString).toBeFalsy();
	});

	it('should allow string with non-space characters', () => {
		let validString = isRealString('  GOT  ');
		expect(validString).toBeTruthy();
	});
});
