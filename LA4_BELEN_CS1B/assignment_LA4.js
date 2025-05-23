/*
Belen, Mariane 
BSCS 1B
LA4 - assignment_LA4.js
*/

//Create variable to store the given names of customers
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Egelbert"];

//create amother variable to ask for dor their name
let daCustomer = prompt("Enter Name: ");
//then we will use push to add the prompt name
customers.push(daCustomer);
//alert the prompt name and give its index number
alert(`Welcome ${daCustomer}, You Number: ${customers.length}`);

//creaye a variable to ask for thw number serviced, use parseInt to convert the prompt into number 
let number = parseInt(prompt(`Enter the number to be serviced (1 to ${customers.length}):`));
//if number is greater than or qual to 1 and is less than the number of elements it will follow the code below
if (number >= 1 && number <= customers.length) {
    //create variable name and subtact 1
    let name = customers[number - 1];
    //alert that the customers order is being served
    alert(`Now serving: ${name}`);
    //use splice to remove the customer from the array
    customers.splice(number - 1, 1);
    //then log the updated array
    console.log("Updated:", customers);
} else { //else if it is invalid
    alert("Invalid number.");
}