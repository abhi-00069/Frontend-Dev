function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log(this.brand + " " + this.model);
};

const car1 = new Car("Honda", "City");
const car2 = new Car("Toyota", "Hilux");

car1.getDetails();
car2.getDetails();
