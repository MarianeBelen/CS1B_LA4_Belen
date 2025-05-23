/*
Belen, Mariane 
BSCS 1B
LA4 - assignment_LA5.js
*/

//create has function that measure the length of the names
function hash(name) {
  return name.length % 10;
}

//vreate a hash table with 10 empty slots and has empty strings
let hashTable = new Array(10).fill("");

//put the given list of customers to add in the tabkle
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

//use for loop to loop each custumers
for (let i = 0; i < customers.length; i++) {
  let name = customers[i]; //this gets the customers name
  let index = hash(name); //uses the hash function to get the index

  //use while loop that says if the slot is not empty, move to the next one
  while (hashTable[index] !== "") {
    index = (index + 1) % 10; //increment
  }
  //stores the names in the table
  hashTable[index] = name;
  //this will alert saying they are added in the table as well as their index
  alert(name + " is added at position " + (index + 1));
}

//use prompt to ask the custiomer a number for serving
let servNum = parseInt(prompt("Enter the number (1-10) to serve:")) - 1;

//use if else that checks the inputed number is valid
if (servNum >= 0 && servNum < 10 && hashTable[servNum] !== "") {
  alert("Now serving: " + hashTable[servNum]);
  hashTable[servNum] = ""; //empty the slot
} else {
  alert("Invalid number or already empty."); //if invalid
}

//use console to show the table
console.log("Updated Hash Table:");
console.log(hashTable);
