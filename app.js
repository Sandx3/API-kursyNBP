var main = function(){
	var apiUrl =  'http:api.nbp.pl/api';

	$.ajax({
		url: apiUrl + '/exchangerates/tables/C?format=JSON',
		method: 'GET',
	}) .then(function(data) {
		printTable(data[0].rates);		
		console.log(data[0].effectiveDate);
	});

	function printTable(rates) {
		for (var i = 0; i<rates.length; i++){
			$('#exchange').append('<tr><td>' + (i+1) + '</td><td>' + rates[i].currency 
				+ '</td><td>' + rates[i].ask + '</td></tr>')
		}
	};
};

$(document).ready(main);