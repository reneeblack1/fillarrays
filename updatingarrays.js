//Task 1
let greetingArray = Array(7).fill("Hello");
console.log(greetingArray);

//Task 2
let greetingNumArray = greetingArray.fill(3, 1, 3);
console.log(greetingNumArray);

//Task 3
let everyTenNumber = Array(5);
for (let i = 0; i < everyTenNumber.length; i++) {
    everyTenNumber[i] = i * 10;
}
console.log(everyTenNumber);