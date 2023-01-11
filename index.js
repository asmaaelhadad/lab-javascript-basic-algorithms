// Iteration 1: Names and Input
let hacker1= 'Asmaa' ;
console.log(`The driver's name is ${hacker1}`);

let hacker2= 'Asmaa' ;
console.log(`The Navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

let x= hacker1.length;
let y=hacker2.length ;
if (x>y){console.log(`The driver has the longest name, it has ${x} 
 characters`) ;}
else if (y>x){console.log(`It seems that the navigator has the longest name, it has ${y} characters.`) ;}

else if (y=x){console.log(`Wow, you both have equally long names,  ${y} characters!`) ;}

else {console.log('undefined');}

// Iteration 3: Loops


let hAcker1 = hacker1.toUpperCase();

let uppercase= "" ;
for (let i =0; i< hAcker1.length ; i++ ) {
  uppercase += hAcker1[i] + " ";
   } 
console.log(uppercase) ;


let z= hacker2.split("").reverse().join("") ;
console.log(z) ;


if (hacker1 > hacker2) {

  console.log("The driver's name goes first") ;
}
else if (hacker1 < hacker2) {

  console.log("Yo, the navigator goes first definitely.") ;
}

else if (hacker1 == hacker2) {

  console.log(" What?! You both have the same name?") ;
}

