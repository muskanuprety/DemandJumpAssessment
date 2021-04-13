# Indianapolis Events Web App!!
## Assessment for DemandJump by Muskan Uprety

The goal of this web app is to scrape all event information happening in Indianapolis and showcase them nicely in a webpage. The location of each event is also marked in Google Maps that is implemented in the web app using the Google map API.

The website we are trying to scrape from is ```https://www.visitindy.com/indianapolis-things-to-do-events```.

### Relavant Files:
```index.html``` : main html file

```create.js``` :  creates dataTable, loads Google Map, and adds Markers

```scrape.js``` :  Scrapes visit indy website and stores data in ```results.json```

The other files are my attempt to solve all the problems for this assessment, but was unable to do so in the given time. I would be happy to talk about what I was trying to do with them if needed.



I was able to scrape the data using a module called ```x-ray```, however, I am realtively inexperienced in using ```requirejs``` so I was not able to load the module for browser use. The code I wrote for scraping the visit-indy website is in ```scrape.js``` which stores the data in ```results.json```.

I also tried using **browserify** but with limited time and weird errors, I just decided to hardcode an array with 10 event information.

Next, I used jQuery to create a Datatable that lists the events from the array. The dataTable is sortable, searchable, and is paginated to include 5 events at a time in the page.

I also used Google's **Map Javascript API** to display Indianapolis in Google Maps. The location displayed in the visit-indy wepage were not in (lat, lng) format so I also used the **Geocoding API**  to mark the locations in the map. 

I had not used Google Map API before so this was a great learning opportunity to play around with the functionality.

I was able to create markers, but I was not able to filter the markers based on the items in the paginated table. The markers on the Map have all the locations for the events in my table. This could be a problem when there are a lot of events, so this would be the first issue I would fix if I had more time.

**Thank you for letting me be a part of this project. I enjoyed learning more about requirejs and Google Map APIs. I look forward to talking about my experience while working on this assignment.**

