// function sums(a: number, b: number) {
//     return a + b;
// }
// console.log(sums(10, 10))

var names: string = "suhaib"
var age: number = 123;
var rollNumber: number = 132125;

console.log(names, age, rollNumber)



function check(str) {

    for (var i = 0; i <= str.length; i++) {
        if (str[i] % 2 === 0) {
            console.log("this is a even")
        }
    }

    return str;
}
console.log(check(12345))