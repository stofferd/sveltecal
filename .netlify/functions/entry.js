import fetch from 'node-fetch';
exports.handler = async (event, context, callback) => {
	// const fetch = require('node-fetch');

	// const pwords = process.env.GATSBY_PASSWORDS;
	// const body = JSON.parse(event.body);
	// const match = pwords && pwords.split(' ').includes(body.typed);

	// callback(null, {
	// 	statusCode: 200,
	// 	body: '' + match
	// });
	const sheet = await fetch(
		`https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEET_ID}/values/Sheet1?key=${process.env.API_KEY}`
	);

	callback(null, { statusCode: 200, body: sheet });
};
