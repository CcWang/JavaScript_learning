//using "this " and "new"
// Create a vehicleConstructor that takes in the name, number of wheels, and number of passengers
// Each vehicle should have a makeNoise method
// Using the constructor, create a Bike
// redefine the Bike's makeNoise method to print "ring ring!"
// Using the constructor, create a Sedan
// redefine the Sedan's makeNoise method to print "Honk Honk!"
// Using the constructor, create a Bus
// Give the bus a pickUpPassengers method that takes in the number of passengers to pick up and adds them to the passenger count
// Then make the following modifications:
//
// Have the Vehicle constructor also take in a "speed"
// Store the speed as an attribute
// Create a private variable called distance_travelled that starts at 0
// Create a private method called updateDistanceTravelled that increments distance travelled by speed
// Add a method to the Vehicle called "move" that calls updateDistanceTravelled and then makeNoise
// Add a method called checkMiles that console.logs the distance_travelled
 function Vehicle(name, wheels,passengers,speed) {
   this.name = name;
   this.speed = speed;
   this.wheels = wheels;
   this.passengers = passengers;
   this.makeNoise = function (noise) {
     console.log(noise,noise);
   };
   var self = this;
   var distance_travelled = 0; //privateMethod
   var updateDistanceTravelled = function () {
     distance_travelled += self.speed;
   };//privateMethod
   // Object can access the privateMethod;
   // privateMethod uses self to refer object and access object attribute
   this.move = function (noise) {
     updateDistanceTravelled();
     this.makeNoise(noise);
     return this;
   };
   //use return to chain function 
   this.checkMiles = function () {
     console.log(distance_travelled);
   };
 };
var Bike = new Vehicle("Bike", 2,1,5);
Bike.move('Ring').move("Ringring");
Bike.checkMiles();
var Sedan = new Vehicle("Sedan", 4,0,50);
Sedan.move("Honk");
Sedan.checkMiles();
var Bus = new Vehicle('Bus', 4,2, 45);
Bus.pickUpPassengers = function (num) {
  Bus.passengers +=num;
};
Bus.checkPassengers = function () {
  console.log("The number of passengers is " + Bus.passengers);
}
Bus.pickUpPassengers(4);
Bus.checkPassengers();
Bus.pickUpPassengers(8);
Bus.checkPassengers();
