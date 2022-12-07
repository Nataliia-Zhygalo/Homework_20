
/*Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 

V Знайти суму та кількість позитивних елементів.
V Знайти мінімальний елемент масиву та його порядковий номер.
V Знайти максимальний елемент масиву та його порядковий номер.
V Визначити кількість негативних елементів.
V Знайти кількість непарних позитивних елементів.
V Знайти кількість парних позитивних елементів.
V Знайти суму парних позитивних елементів.
V Знайти суму непарних позитивних елементів.
V Знайти добуток позитивних елементів.
V Знайти найбільший серед елементів масиву, остальні обнулити.
*/

const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let sum = 0;
const positiveNumbers = arr.filter(function(numbers) {
	return numbers >= 0;
})
console.log(`Kількість позитивних елементів: ${positiveNumbers.length}`);

positiveNumbers.forEach(function (numbers) {
	sum += numbers;
}) 
console.log(`Cумa позитивних елементів: ${sum}`);

let minNumber = arr[0];
arr.forEach(function (numbers) {
	minNumber = numbers < minNumber ? numbers : minNumber;
})
console.log(`Mінімальний елемент масиву:${minNumber},та його порядковий номер: ${arr.indexOf(minNumber)}`);

let maxNumber = arr[0];
arr.forEach(function (numbers) {
	maxNumber = numbers > maxNumber ? numbers : maxNumber;
})
console.log(`Mаксимальний елемент масиву:${maxNumber},та його порядковий номер: ${arr.indexOf(maxNumber)}`);

const negativeNumbers = arr.filter(function(numbers) {
	
	return numbers < 0;
})
console.log(`Kількість негативних елементів: ${negativeNumbers.length}`);

const oddNumbers = positiveNumbers.filter(function(numbers) {
	return numbers % 2 !== 0;
})
console.log(`Kількість непарних позитивних елементів: ${oddNumbers.length}`);

const evenNumbers = positiveNumbers.filter(function(numbers) {
	return numbers % 2 === 0;
})
console.log(`Kількість парних позитивних елементів: ${evenNumbers.length}`);

let sumEvenPositive = 0;
evenNumbers.forEach(function (numbers) {
	sumEvenPositive += numbers;
}) 
console.log(`Cумa парних позитивних елементів: ${sumEvenPositive}`);

let sumOddPositive = 0;
oddNumbers.forEach(function (numbers) {
	sumOddPositive += numbers;
}) 
console.log(`Cумa непарних позитивних елементів: ${sumOddPositive}`);

let productPositive = 1;
positiveNumbers.forEach(function (numbers) {
productPositive *= numbers;
}) 
console.log(`Добуток позитивних елементів: ${productPositive}`);

arr.forEach(function (numbers, index, arr) {
arr[index] = numbers === maxNumber ? numbers : 0;
})
console.log(`Hайбільший серед елементів масиву: ${arr}`);


