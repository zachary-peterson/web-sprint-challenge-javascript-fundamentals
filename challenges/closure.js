// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: The nested function has lexical scope, meaning that it can look to the parent function where the variable internal is declared. myFunction would have access to the global scope as well as what is declared in the function itself, but as soon as nestedFunction() is declared, nestedFunction() forms a closure. The nestedFunction() then has access to the global scope as well as anything declared inside of myFunction(), while myFunction() has no access to anything declared inside of nestedFunction().


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

const summationOne = (a) => {  
  let counter = 0;
  for(i = 1; i <= a; i++){
    counter = counter + i;    
  }
  return counter;
}

console.log(summationOne(4));

