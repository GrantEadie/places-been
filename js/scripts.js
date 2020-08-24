// Business Logic for PlaceBeen -------
function PlaceBeen() {
  this.attributes = [];
  this.currentId = 0;
}

PlaceBeen.prototype.addPlace = function (place) {
  place.id = this.assignId();
  this.attributes.push(place);
}

PlaceBeen.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlaceBeen.prototype.findPlace = function(id) {
  for (let i=0; i< this.attributes.length; i++){
    if (this.attributes[i]) {
      if (this.attributes[i].id == id) {
        return this.attributes[i];
      }
    }
  };
  return false;
}

PlaceBeen.prototype.deletePlace = function(id) {
  for (let i=0; i< this.attributes.length; i++) {
    if (this.attributes[i]) {
      if (this.attributes[i].id == id) {
        delete this.attributes[i];
        return true;
      }
    }
  };
  return false;
}


// Business Logic for Place -------
function Place(location, date, notes) {
  this.location = location;
  this.date = date;
  this.notes = notes;
}


Place.prototype.allAttributes = function () {
  return this.location + " " + this.date + " " + this.notes;
}


// USER INTERFACE 
let placeBeen = new PlaceBeen();

$(document).ready(function () {
  $("form#new-place").submit(function (event) {
    event.preventDefault();
    const inputLocation = $("input#location").val();
    const inputDate = $("input#date").val();
    const inputNotes = $("input#notes").val();
    let newPlace = new Place(inputLocation, inputDate, inputNotes);
    placeBeen.addPlace(newPlace);
    console.log(placeBeen.attributes);
  });
});