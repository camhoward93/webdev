// Bird Object Challenge

// Constructor and Prototype Definitions
function Bird(species, color, locations) {
    this.species = species;
    this.color = color;
    this.locations = locations;
}

Bird.prototype.getColor = function() {
    return this.color;
};

Bird.prototype.setColor = function(newColor) {
    this.color = newColor;
};

Bird.prototype.getLocations = function() {
    return this.locations;  
};

Bird.prototype.addLocation = function(newLocation) {
    this.locations.push(newLocation);  
};

// Main Program
const newBird = new Bird("Canary", "Red", ["New York", "Spain"]);
console.log(newBird);
console.log(newBird.getColor());
newBird.setColor("Yellow");
console.log(newBird.getColor());
console.log(newBird.getLocations());
newBird.addLocation("Chile");
console.log(newBird.getLocations());
