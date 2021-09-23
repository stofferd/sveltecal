exports.handler = async (event, context, callback) => {
	// const pwords = process.env.GATSBY_PASSWORDS;
	// const body = JSON.parse(event.body);
	// const match = pwords && pwords.split(' ').includes(body.typed);

	// callback(null, {
	// 	statusCode: 200,
	// 	body: '' + match
	// });
	const sheet = await window.fetch(
		`https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEET_ID}/values/Sheet1?key=${process.env.API_KEY}`
	);

	callback(null, { statusCode: 200, body: sheet });
};

// # curl https://sheets.googleapis.com/v4/spreadsheets/1BluOB1j7-d_bupUntDj0whvELL78xKCNjOQcdT4Z_34/values/Sheet1?key=AIzaSyBeWq1McsbBnrln1C64GX7AMRbz2xVfRl8
