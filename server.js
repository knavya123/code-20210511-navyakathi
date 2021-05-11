const helper = require("./helper");

var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
	result = helper.add_entries(req.body);
	console.log(JSON.stringify(result));

	res.contentType('application/json');
	res.send({
		'data': result.data,
		'num_overweight_people': result.num_overweight_people
	});
})

app.listen(port);
console.log("Listening on port: " + port);