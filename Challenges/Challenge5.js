// Bird ES6 Class Challenge
class Bird {
  constructor(species, color, locations) {
    this.species = species;
    this.color = color;
    this.locations = locations;
  }

  getColor() {
    return this.color;
  }

  setColor(newColor) {
    this.color = newColor;
  }
  
  getLocations() {
    return this.locations;
  }
  
  addLocation(newLocation) {
    this.locations.push(newLocation);
  }
}

const newBird = new Bird("Canary", "Red", ["New York", "Spain"]);
console.log(newBird);
console.log(newBird.getColor());
newBird.setColor("Yellow");
console.log(newBird.getColor());
console.log(newBird.getLocations());
newBird.addLocation("Chile");
console.log(newBird.getLocations());
