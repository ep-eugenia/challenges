/*Extract City Facts
Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
- name
- population
- continent
The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).
--------------------------------------------------------------------------------------------------------------------*/

// Example1: object Tokyo
/*var city = {
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
}; */

function cityFacts(city) {
  //console.log(city.name + " has a population of " + city.population + " and is situated in " + city.continent);
 }
 //cityFacts(city); // output: Tokyo has a population of 13,929,286 and is situated in Asia

// Example2: object Paris
 var city = {
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
};

function cityFacts(city) {
  console.log(city.name + " has a population of " + city.population + " and is situated in " + city.continent);
 }
 cityFacts(city); // output: Paris has a population of 13,929,286 and is situated in Europe