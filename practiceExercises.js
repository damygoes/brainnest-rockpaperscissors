// Mathematical Shapes
// A. Diagonal of a square : Mathematical formula - d = length x square root(2)
function diagonalOfASquare(length) {
	return (length * Math.sqrt(2)).toFixed(3);
}
console.log(diagonalOfASquare(9));

// B. Area of a triangle with 3 known sides. We use the Heron's Formula
function areaOfATriangle(side1, side2, side3) {
	let semiPerimeterOfTriangle = (side1 + side2 + side3) / 2;
	return Math.sqrt(
		semiPerimeterOfTriangle *
			(semiPerimeterOfTriangle - side1) *
			(semiPerimeterOfTriangle - side2) *
			(semiPerimeterOfTriangle - side3)
	).toFixed(3);
}
console.log(areaOfATriangle(5, 6, 7));

// B. Circumference and Surface Area of a circle
// Area = pi * r squared , circumference = 2 * pi * r
function circleGeometry(radius) {
	const PI = 3.14;
	let surfaceArea = PI * radius ** 2;
	let circumference = 2 * PI * radius;
	return `Area: ${surfaceArea} Circumference: ${circumference}`;
}
console.log(circleGeometry(4));

// Conditional Statements and Loops
// A. Comparing Integers
function compareIntegers(firstNumber, secondNumber) {
	if (firstNumber > secondNumber) {
		return `${firstNumber} is greater than ${secondNumber}`;
	} else {
		return `${secondNumber} is greater than ${firstNumber}`;
	}
}
console.log(compareIntegers(15, 100));

// B. Even or Odd
function isEvenOrOdd(number) {
	if (number % 2 === 0) {
		return `${number} is an even number`;
	} else {
		return `${number} is an odd number`;
	}
}
console.log(isEvenOrOdd(12));
