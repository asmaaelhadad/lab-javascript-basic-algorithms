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


//Bonus1


//Bonus1


let longterm= ("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat nisl vel auctor tristique. Praesent at tempor velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eu efficitur ipsum. Integer dictum, nunc ac dictum pulvinar, tortor leo lacinia libero, vel ullamcorper quam tellus non dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent ullamcorper elementum arcu viverra tristique. Vestibulum sagittis mauris eu dui rhoncus finibus. Suspendisse fermentum urna id neque pellentesque scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi porta tristique vestibulum. Suspendisse potenti" , " Sed vestibulum porta ante, ac consectetur lacus porta sit amet. Ut rutrum ipsum quis sem suscipit efficitur. Morbi rhoncus, urna finibus facilisis sodales, velit odio aliquam felis, id euismod nibh metus et purus. Donec diam nibh, luctus vitae diam id, molestie iaculis dui. Aenean non congue turpis. Phasellus posuere risus quis scelerisque viverra. Integer ac velit est. Nullam ac viverra dolor, eu hendrerit libero. D9onec finibus scelerisque consequat. Quisque vel mi a nibh hendrerit eleifend non vitae dolor. Vestibulum neque arcu, porttitor ac metus ac, fringilla elementum lacus. Nunc vehicula quam ipsum, ac vestibulum metus luctus id." , "Duis mattis sapien sit amet lectus condimentum, eu pellentesque arcu finibus. Duis consectetur odio ipsum, sed commodo urna dignissim vel. Curabitur sed lacus gravida mauris tempor varius eu non justo. Fusce cursus augue eget ligula sagittis dictum. Ut vel risus gravida, porta ligula mollis, laoreet ipsum. Sed id volutpat nisl, non volutpat quam. Nullam vehicula tincidunt lorem, vel maximus dui ultrices non. Sed sed nibh est. Quisque at elementum nisi, quis sodales enim. Integer egestas arcu neque, nec laoreet justo cursus et. Vestibulum in sem sit amet ligula molestie dictum. Curabitur felis metus, sollicitudin in tristique non, blandit eu diam." ) ;

console.log (longterm.split(" ").length);
     