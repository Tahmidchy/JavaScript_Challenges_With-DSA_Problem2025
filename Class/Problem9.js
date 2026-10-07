/*
TODO: Problem-9: Create a class for the hotel that includes the hotel's name, the number of rooms, and the cost of an overnight stay; then, calling the `getName` method should return the hotel's name.
*/

// Solution: 

class Hotel {
    constructor(name, numberOfRooms, costPerNight) {
        this.name = name;
        this.numberOfRooms = numberOfRooms;
        this.costPerNight = costPerNight;
    
        }
    getName() {
        return this.name;
    }
}
   
const Hotel1 = new Hotel("Hotel Sunshine", 100, 150);
console.log("Hotel Name:", Hotel1.getName());