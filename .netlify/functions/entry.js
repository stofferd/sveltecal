const fetch = require('node-fetch');

exports.handler = async (event, context, callback) => {
	const res = await fetch(
		`https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEET_ID}/values/Sheet1?key=${process.env.API_KEY}&majorDimension=COLUMNS`
	);
	const sheet = await res.json();

	callback(null, { statusCode: 200, body: JSON.stringify(sheet) });
};
