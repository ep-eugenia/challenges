/*Is the Word Singular or Plural?
Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
--------------------------------------------------------------------------------------------------------------------*/
//input: word: "changes"
/*function isPlural(word) {
	return word[word.length - 1] == 's';
}

console.log(isPlural("changes")); //output: true*/


//input: word: "change"
function isPlural(word) {
	return word[word.length - 1] == 's';
}

console.log(isPlural("change")); //output: false
