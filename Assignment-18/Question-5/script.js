class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }
  calculateFare() {
    if (this.distance <= 0 || isNaN(this.distance)) {
      throw new Error("Invalid distance");
    }
    return this.distance * 10;
  }
}

const d1 = new Driver("Rahul", 4.8, "Swift");

try {
  const t1 = new Trip("A", "B", 12);
  console.log("Fare:", t1.calculateFare());
  const t2 = new Trip("A", "B", -5);
  console.log(t2.calculateFare());
} catch (e) {
  console.log("Error:", e.message);
}
