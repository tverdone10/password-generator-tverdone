var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var sym = ["!", "?", ",", ".", " ", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-"]
var noThing = document.getElementById("password")

var allChar = num.join("") + upperCase.join("") + lowerCase.join("") + sym.join("")

console.log(allChar)

console.log(num)

function genErate () {
    var newPass = ""

    for (var i = 0; i <= 20; i++){
        newPass = newPass + allChar.charAt(Math.floor(Math.random() * Math.floor(allChar.length -1)))

    }
    document.getElementById("password").innerHTML = newPass 

}















// I had it set up as below for a while if you're interested to see how I started doing it! 
//Spent all day working on it and realize I could do it with a function that is way shorter lol




// var randomUpper = upperCase [Math.floor(Math.random()*upperCase.length)]
// var randomNum = num [Math.floor(Math.random()*num.length)]
// var randomLower = lowerCase [Math.floor(Math.random()*lowerCase.length)]
// var randomSym = sym [Math.floor(Math.random()*sym.length)]

// var randomUpper2 = upperCase [Math.floor(Math.random()*upperCase.length)]
// var randomNum2 = num [Math.floor(Math.random()*num.length)]
// var randomLower2 = lowerCase [Math.floor(Math.random()*lowerCase.length)]
// var randomSym2 = sym [Math.floor(Math.random()*sym.length)]

// var randomUpper3 = upperCase [Math.floor(Math.random()*upperCase.length)]
// var randomNum3 = num [Math.floor(Math.random()*num.length)]
// var randomLower3 = lowerCase [Math.floor(Math.random()*lowerCase.length)]
// var randomSym3 = sym [Math.floor(Math.random()*sym.length)]

// console.log(randomUpper)
// console.log(randomNum)
// console.log(randomLower)
// console.log(randomSym)



// // var passWord = randomUpper + randomNum + randomLower + randomSym

// // var passArray = [randomUpper, randomNum, randomLower, randomSym]
// // var passArray2 = [randomUpper2, randomNum2, randomLower2, randomSym2]
// // var passArray3 = [randomUpper3, randomNum3, randomLower3, randomSym3]

// console.log(passArray)
// console.log(passWord)



// // function shuffle(passArray) {
// //     passArray.sort(function (){
// //         return Math.random () -.5;
// //     })
// // }



// console.log(shuffle(passArray))

// function genErate () {
//     noThing = "";
//  for (var i = 0; i<= 10; i++){
//     var passArray = [randomUpper, randomNum, randomLower, randomSym]
//      var passArray2 = [randomUpper2, randomNum2, randomLower2, randomSym2]
//      var passArray3 = [randomUpper3, randomNum3, randomLower3, randomSym3]
//     function shuffle(passArray) {
//         passArray.sort(function (){
//             return Math.random () -.5;
//         })
//     }

    
//     document.getElementById("password").innerHTML = passArray.join("") + passArray2.join("") + passArray3.join("")
    
// }
// }
// function copyClipboard(){
//     var copyText = document.querySelector("textarea");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999)
//     document.execCommand("copy"); 


// }
