
$('#form-item').submit(function(){ 

	var item = $(this).serializeArray();
	var title;
	var itemEN = translate(item[0]['value'], 'hr', 'en');

	event.preventDefault();
	var settings = {
		"async": false,
		"crossDomain": true,
		"url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=" + itemEN,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
			"x-rapidapi-key": "YOUR API KEY"
		}
	}
	$.ajax(settings).done(function (response) {
	    var results = "";
		data = response['hints'];
		title =  data[i]['food']['label'];
	    for(var i=0; i<response['hints'].length; i++){
	        if(data[i]['food']['image']){
				results = results 
				+ "<div class='col-item'>"
	            + "<img src='"         +data[i]['food']['image']        + "' alt='No image'/>"
	            + "<p>Food: "          +translate(title, 'en', 'hr')    + "</p>"
	            + "<p>Category: "      +data[i]['food']['category']     + "</p>"
	            + "<p>Energy Kcal: "   +data[i]['food']['nutrients']['ENERC_KCAL']    +"</p>"
	            + "<p>CHOCDF: "        +data[i]['food']['nutrients']['CHOCDF']        +"</p>"
	            + "<p>Fats: "          +data[i]['food']['nutrients']['FAT']           +"</p>"
	            + "<p>Proteins: "      +data[i]['food']['nutrients']['PROCNT']        +"</p></div>";
	        }
	    }
		document.getElementById('items').innerHTML = results;
		console.log(response);
	
	});
});


function translate(data, srcLang, exLang){
	var settings = {
		"async": false,
		"crossDomain": true,
		"url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
		"method": "POST",
		"headers": {
			"x-rapidapi-host": "google-translate1.p.rapidapi.com",
			"x-rapidapi-key": "Your API KEY",                                      
			"accept-encoding": "application/gzip",
			"content-type": "application/x-www-form-urlencoded"
		},
		"data": {
			"source": srcLang,
			"q": data,
			"target": exLang
		}
	}

	$.ajax(settings).done(function (response) {
		return (response['data'][0]['translations']['translatedText']);
	});
}
