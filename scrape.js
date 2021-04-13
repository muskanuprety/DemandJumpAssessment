// requirejs(["x-ray"], function(Xray) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
// });

var Xray = require("x-ray/");
var xray = new Xray();


var url = 'https://www.visitindy.com';
var search = '/indianapolis-things-to-do-events';

xray(url + search, '.list-grid-item',
	[{
		name: 'h3 a',
		location: 'p a',
		link: 'h3 a@href',
		time: '.list-info'
	}]
	)
	.write('/results.json');


// var xhr = new XMLHttpRequest();
// xhr.open('GET','https://cors-anywhere.herokuapp.com/https://www.visitindy.com/indianapolis-things-to-do-events');
// xhr.responseType = 'document';

// xhr.onload = function(){

// 	if (xhr.status == 200 && xhr.readyState == 4) {

// 		var response = xhr.responseXML.querySelectorAll("#list-title blue-dark a");

// 		console.log(response);
// 	}

// }

// xhr.onload = function(){
// 	console.log(xhr.status, xhr.statusText);
// }

// xhr.send();