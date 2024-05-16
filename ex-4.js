// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here

for (let name in restaurants) {
  newRestaurants[name] = "Restaurant Name:" + restaurants[name];
}

console.log(newRestaurants);
