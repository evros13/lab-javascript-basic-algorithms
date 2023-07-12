// Iteration 1: Names and Input

let hacker1 = "Mariano";
let hacker2 = "Manola";

console.log(`The driver's name is ${hacker1}.`)
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

let length1 = hacker1.length
let length2 = hacker2.length

if (length1 > length2) {
  console.log(`The driver has the longest name, it has ${length1} characters.`)
}
else if (length1 < length2) {
  console.log(`It seems that the navigator has the longest name, it has ${length2} characters.`)
}
else if (length1 === length2) {
  console.log(`Wow, you both have equally long names, ${length1} characters!`)
}

// Iteration 3: Loops

//3.1
let capName = hacker1.toUpperCase()
let newName = "";
let i = 0
while (i < capName.length) {
    newName += capName[i];
    i++;
    newName += " ";
}

console.log(newName)


//3.2 (it's in a column, not a row... I tried)
let reversedName = "";
let j = hacker2.length - 1
while (j >= 0) {
    reversedName += hacker2[j];
    j--;
}

console.log(reversedName)


//3.3
switch(hacker1.localeCompare(hacker2)) {
    case -1:
      console.log("The driver's name goes first.");
      break;
  
    case 1:
        console.log("Yo, the navigator goes first, definitely.");
      break;
  
    case 0:
        console.log("What?! You both have the same name?");
      break;
  
    default:
      console.log("There is an error.");
  }





