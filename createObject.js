// Create a vehicleConstructor that takes in the name, number of wheels, and number of passengers
// Each vehicle should have a makeNoise method
// Using the constructor, create a Bike
// redefine the Bike's makeNoise method to print "ring ring!"
// Using the constructor, create a Sedan
// redefine the Sedan's makeNoise method to print "Honk Honk!"
// Using the constructor, create a Bus
// Give the bus a pickUpPassengers method that takes in the number of passengers to pick up and adds them to the passenger count
function vehicleConstructor(name, wheels,passengers) {
  var vehicel = {};
  vehicel.name = name;
  vehicel.wheels = wheels;
  vehicel.passengers = passengers;
  vehicel.makeNoise = function (noice) {
    console.log(noice,noice);
  };
  return vehicel;
};
var Bike = vehicleConstructor("Bike", 2,1);
Bike.makeNoise("ring");
console.log(Bike.name);
console.log(Bike.wheels);
console.log(Bike.passengers);
var Sedan = vehicleConstructor("Sedan", 4,4);
Sedan.makeNoise("Honk");
console.log("Name of the vehicle is " + Sedan.name);
console.log("Number of " + Sedan.name + "'s wheels is "+ Sedan.wheels);
console.log("Number of " + Sedan.name + "'s passengers is "+Sedan.passengers);
var Bus = vehicleConstructor("Bus", 4, 0);
Bus.pickUpPassengers = function (num) {
  Bus.passengers +=num;
  console.log("Now there are "+ Bus.passengers + " passengers in this bus.");
}
Bus.pickUpPassengers(10);
Bus.pickUpPassengers(5);
