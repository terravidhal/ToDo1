//Recursive Sigma

function rSigma(num) {
  // Handle invalid input types (non-numbers)
  if (typeof num !== 'number') {
    return 'Invalid input: Please provide a number.';
  }

  // Handle negative numbers (return 0)
  if (num < 0) {
    return 0;
  }

  // Handle decimal numbers (round down using Math.floor)
  num = Math.floor(num);

  // Base case (n = 0)
  if (num === 0) {
    return 0;
  }

  // Recursive case (return n + rSigma(n-1))
  return num + rSigma(num - 1);
}

// Examples:
console.log(rSigma(5)); // Output: 15 (somme des nombres entiers de 1 à 5. )
console.log(rSigma(2.5)); // Output: 3 (rounded down)( représente la somme des nombres entiers de 1 à 2)
console.log(rSigma(-1)); // Output: 0 (la somme des nombres entiers de 1 à -1)
console.log(rSigma('hello')); // Output: "Invalid input: Please provide a number."



//Recursive Factorial
function rFact(num) {
    // Handle invalid input types (non-numbers)
    if (typeof num !== 'number') {
      return 'Invalid input: Please provide a number.';
    }
  
    // Handle negative numbers (return 0)
    if (num < 0) {
      return 0;
    }
  
    // Handle decimal numbers (truncate down using Math.floor)
    num = Math.floor(num);
  
    // Base case (n = 0)
    if (num === 0) {
      return 1; // 0! is defined as 1
    }
  
    // Recursive case (n! = n * (n-1)!)
    return num * rFact(num - 1);
  }
  
  // Examples:
  console.log(rFact(3)); // Output: 6 (produit des nombres entiers de 1 à 3. )
  console.log(rFact(6.5)); // Output: 720 (truncated to integer)
  console.log(rFact(-1)); // Output: 0
  console.log(rFact('hello')); // Output: "Invalid input: Please provide a number."
  
