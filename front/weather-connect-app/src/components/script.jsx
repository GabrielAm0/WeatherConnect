
var api_key = 'ff0e793530ac4053929bc43af63b8a0a';

var query = 'Rua Custódio de Melo, Indaiá, Belo Horizonte - MG, 31270-300, Brasil';

var api_url = 'https://api.opencagedata.com/geocode/v1/json'

var request_url = api_url
 + '?'
 + 'key=' + api_key
 + '&q=' + encodeURIComponent(query)
 + '&pretty=1'
 + '&no_annotations=1';

var request = new XMLHttpRequest();
request.open('GET', request_url, true);

request.onload = function () {

	if (request.status === 200) {
		var data = JSON.parse(request.responseText);
		console.log(data.results[0].geometry.lat);
		console.log(data.results[0].geometry.lng);

	} else if (request.status <= 500) {

		console.log("unable to geocode! Response code: " + request.status);
		var data = JSON.parse(request.responseText);
		console.log('error msg: ' + data.status.message);
	} else {

		console.log("server error");
	}
};

request.onerror = function () {
	console.log("unable to connect to server");
};

request.send();
