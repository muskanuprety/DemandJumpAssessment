requirejs.config({
	paths:{
		x-ray:'node_modules/x-ray/index'
	}
})




require(["x-ray"], function(Xray) {
		});

		// var Xray = require("x-ray");
		var xray = new Xray();


		var url = 'https://www.visitindy.com';
		var search = '/indianapolis-things-to-do-events';

		var dataa = xray(url + search, '.list-grid-item',
			[{
				name: 'h3 a',
				location: 'p a',
				link: 'h3 a@href',
				time: '.list-info'
			}]
			);

		console.log(dataa);
		console.log("hi");