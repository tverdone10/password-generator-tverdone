
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var sym = ["!", "?", ",", ".", " ", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-"]


console.log(num)

var randomUpper = upperCase [Math.floor(Math.random()*upperCase.length)]
var randomNum = num [Math.floor(Math.random()*num.length)]
var randomLower = lowerCase [Math.floor(Math.random()*lowerCase.length)]
var randomSym = sym [Math.floor(Math.random()*sym.length)]

console.log(randomUpper)
console.log(randomNum)
console.log(randomLower)
console.log(randomSym)

var passWord = randomUpper + randomNum + randomLower + randomSym

var passArray = [randomUpper, randomNum, randomLower, randomSym, randomUpper, randomNum, randomLower, randomSym]

console.log(passArray)
console.log(passWord)



function shuffle(passArray) {
    passArray.sort(function (){
        return Math.random () -.5;
    })
}

console.log(shuffle(passArray))

function genErate () {
    document.getElementById("password").innerHTML = passArray.join("")
}

function copyClipboard(){
    var copyText = document.querySelector("textarea");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy"); 


}

// or

// var passVariables = {
//     capital: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" "Jones",
//     low: "abcdefghijklmnopqrstuvwxyz",
//     symbol: "!@#$%^&+-=",
//     num: "1234567890"
// }



// function randomLetter (){
//     return num[Math.floor(Math.random() * upperCase.length)]
// }
// // var rand = num [Math.floor(Math.random() * num.length)]

// var letter = randomLetter ()

// console.log(letter)






// function () {
//     (var i = 0, n = "capital.length" i < length; i++)

// }