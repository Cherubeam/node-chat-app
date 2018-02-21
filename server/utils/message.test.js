const expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		let from = 'Jen';
		let text = 'Some message';
		let message = generateMessage(from, text);

		expect(typeof message.createdAt).toBe('number');
		expect(message.from === from);
		expect(message.text === text);
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		let from = 'Dev';
		let latitude = 15;
		let longitude = 19;
		let url = 'https://www.google.com/maps?q=15,19';
		let message = generateLocationMessage(from, latitude, longitude);

		expect(typeof message.createdAt).toBe('number');
		expect(message.from === from);
		expect(message.url === url);
	});
});
