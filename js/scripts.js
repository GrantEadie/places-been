// Business Logic for PlaceBeen -------
function PlaceBeen() {
  this.attributes = [];
  this.currentPlace = 0;
}

PlaceBeen.prototype.addPlace = function(place) {
  this.attributes.push(place);
}


// Business Logic for Place -------
function Place(location, date, notes) {
  this.location = location;
  this.date = date;
  this.notes = notes;
}


Place.prototype.allAttributes = function() {
  return this.location + " " + this.date + " " + this.notes;
}

let placeBeen = new PlaceBeen();
let place = new Place("Twisp", "2077", "Our last military stronghold before the lazer dragons.");
let place2 = new Place("An Island in the Sun", "4999", "A lovely place for a glass of white wine.");
let place3 = new Place("Sting's House", "August 7th, 1983", "We did too much acid.");
placeBeen.addPlace(place);
placeBeen.addPlace(place2);
placeBeen.addPlace(place3);



//Co-authored-by: Kolman Soifer <ko


 Co-autho

//  Co-authored-by: Adam Mansell <adammansellhmb@gmail.com>