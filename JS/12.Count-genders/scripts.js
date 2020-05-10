/*Count genders
Create an array containing 6 persons, girls and boys. Each person should have 2 keys, name and gender.
Loop into the array and check how many girls and boys do you have. The output should be something like : "My list contains 2 girls and 4 boys"
--------------------------------------------------------------------------------------------------------------------*/
// array of six persons, with name and gender as keys
const persons = [ 
  { name: "Alice", gender: "girl"},
  { name: "Nora",  gender: "girl"},
  { name: "Mike",  gender: "boy"},
  { name: "Nick",  gender: "boy"},
  { name: "Tom",   gender: "boy"},
  { name: "Sam",   gender: "boy"}
  ];

  counterGirls = 0;
  counterBoys  = 0;

   for (let i = 0; i < persons.length; i++ ) {
    let text = persons[i].gender; 
     if (text == "boy") {
    //counterBoys = counterBoys + 1;
      counterBoys++
     } else if (text == "girl") {
    //counterGirls= counterGirls + 1
      counterGirls++
    };
   }   

  console.log("My List contains " + counterGirls + " girls and " + counterBoys + " boys"); 
    // output: My List contains 2 girls and 4 boys
  
  
