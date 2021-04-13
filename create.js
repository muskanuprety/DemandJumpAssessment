




let sorted = false;
var address;
var x;
let data_for_table = [

	{	name: 'Nickelodeon’s Dora & Diego - Let’s Explore', 
		link: "https://www.visitindy.com/indianapolis-nickelodeon-s-dora-amp-diego-let-s-explore-2021-2-6",
		location: "The Children's Museum of Indianapolis", 
		time: "April 13-July 11, 2021" },

	{	name: 'Indiana Pacers vs. LA Clippers', 
		link: "https://www.visitindy.com/indianapolis-indiana-pacers-vs-la-clippers-2021-4-13",
		location: "Bankers Life Fieldhouse", 
		time: "April 13, 2021" },

	{	name: 'Creativity vs. COVID: Ending the Pandemic for Good', 
		link: "https://www.visitindy.com/indianapolis-creativity-vs-covid-ending-the-pandemic-for-good",
		location: "Herron School of Art and Design", 
		time: "April 13-May 9, 2021" },

	{	name: 'Paul S. Briggs–Cell Personae: The Impact of Incarceration on Black Lives', 
		link: "https://www.visitindy.com/indianapolis-paul-s-briggs-ell-personae-the-impact-of-incarceration-on-black-lives",
		location: "Herron School of Art and Design", 
		time: "April 13-24, 2021" },

	{	name: 'SHIFT: What Can Museums Change?', 
		link: "https://www.visitindy.com/indianapolis-shift-what-can-museums-change",
		location: "Herron School of Art and Design", 
		time: "April 13-24, 2021" },

	{	name: 'Makers Mark Bourbon Dinner', 
		link: "https://www.visitindy.com/indianapolis-makers-mark-bourbon-dinner",
		location: "St. Elmo Steak House", 
		time: "April 14, 2021" },
		
	{	name: 'Forensic Science Lecture Series - Old Drug, New Issues - Cannabis and OWI in the Recreational Age', 
		link: "https://www.visitindy.com/indianapolis-forensic-science-lecture-series-old-drug-new-issues-cannabis-and-owi-in-the-recreational-age",
		location: "Indiana Medical History Museum", 
		time: "April 14, 2021" },
		
	{	name: 'WOW presents Renee King', 
		link: "https://www.visitindy.com/indianapolis-wow-presents-renee-king",
		location: "The Jazz Kitchen", 
		time: "April 14, 2021" },
		
	{	name: 'Wheeling Nailers vs. Indy Fuel', 
		link: "https://www.visitindy.com/indianapolis-fuel-041521",
		location: "Indiana Farmers Coliseum", 
		time: "April 15, 2021" },
		
	{	name: 'Mixed Media Collage', 
		link: "https://www.visitindy.com/indianapolis-mixed-media-collage",
		location: "Garfield Park Conservatory and Gardens", 
		time: "April 15, 2021" },
];


$(document).ready( function () {
    var table = $('#fancyTable').DataTable({

    	"pageLength": 5,
    	"lengthMenu":[5,10],
    	data: data_for_table,
    	"columns":[
    				{"data":"name"},
					{"data":"link", 
					"render": function(data, type, row, meta){
			            if(type === 'display'){
			                data = '<a href="' + data + '">' + data + '</a>';
			            }
			            return data;
			         }},
					{"data":"location"},
					{"data":"time"}
    	]

    	}
    		

    	);
    
} );
		
		

 address = []
for (var i = 0; i< data_for_table.length; i++){
	address.push(data_for_table[i]['location']);
}

function initMap(){
	var arguments_for_map = {
		zoom: 10,
		center: {lat: 39.7684, lng: -86.1581}
	}
	var map = new google.maps.Map(document.getElementById('map'), arguments_for_map);
	// console.log('yip')
	var geocoder = new google.maps.Geocoder();
	codeAddress(geocoder, map)
}


function codeAddress(geocoder, map) {
	for (var i of address){
	geocoder.geocode({'address': i}, function(results, status) {
      if (status === 'OK') {
        //map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
});
}}
