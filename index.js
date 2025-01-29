// console.log("turn 2 fan!")
// console.log("turn 2 fan!")
// console.log("turn 2 fan!")
// console.log("turn 2 fan!")
// console.log("turn 2 fan!")
// console.log("turn 2 fan!")

// var message ='turn our fan!'
// let num = 7
// const add = num + 3
// const mult = num * 5
// const sub = num - 8

// console.log(message)
// console.log(message)
// console.log(message)
// console.log(message)
// console.log(message)
// console.log(message)

// console.log(add)


// let remender = 10 / 2
// console.log(remender, 10, 30, 12)

// let number = 5
// let number2 = 10

// let name1 = "obi "
// let name2 = "peter "

// let fullname = name1 + name2
// console.log(fullname)

// let num1 = 4
// let num2 = 10
// let num3 = 10

// console.log(num1 + num2 + num3)

// function showMessage(){ 
    
// console.log(message)
// console.log(message)
// console.log(message)
// console.log(message)
// console.log(message)
// console.log(message)
// }

// showMessage()

// showMessage()


// function addnums(){
//     let num1 = 5
// }

// function addmult(num1, num2, str) {
//     let add = num1 + num2
//     let result = add * 10
//     let output = str + ' ' + result
//     return result
// }

// let result = addmult(10, 10, 'the result is')
// console.log(result * 10)

// let car1 = {name: 'camry', model: 2015, tyer: 4, color: 'black', price: '$3500'}
// let car2 = {
//     name: 'supra', 
//     model: 2022, 
//     tyer: 4, 
//     color: 'black', 
//     price: '$35000',
//     move: function (){

//     console.log('starting...........')
//     console.log('moving................')
//     return 'wow i can finaly move'
// }
// }


// console.log(car2)

// let car3 ={}
// car3.name = 'toyota'
// car3.model = 2020
// car3.tyer = 4
// car3.color = 'gery'
// car3.price = '$5600'

// console.log(car3)
// let values = Object.values(car3)
// let props = Object.keys(car3)
// console.log(values)
// console.log(props)

// let str = 'asshjhkhkrbwbubwyUBZNBSUUHWUEUHDUHHIASJDHIADKAIIAHIFHBHUZHI'
// let sentence = ' i am ... atomic '
// let position = sentence
// console.log(sentence.length)

// console.log(str.slice(5, 21))
// console.log(str.substring(5, 21))
// console.log(str.substr(5, 21))

let num11 = 200
// let string = `Who how are u? ${sentence} ${num11}`
// console.log(string)


let numstr = num11.toString()
console.log(numstr)

let decimalnum = 10.399967750
let decimal = decimalnum.toFixed(2)
// console.log(number(decimal) + 30)

let myarray = ['camry', 'blue', 4, 2024, 2000]                                                                 
console.log(myarray)
console.log(myarray[0])
console.log(myarray[1])
myarray.push('toyota')
myarray.push('red')
myarray.push(2020)
myarray.push(22000)
console.log(myarray)
console.log(myarray.length)
let newarray = myarray.splice(1, 3)
console.log(newarray)
console.log(myarray.toString())
console.log(myarray.sort())
myarray [0] = "benz";
console.log(myarray)

// function() {
//     console.log('My name  is peter')
// } 

let numarray = [10, 10, 27, 69, 40]
let anarray = []
console.log(numarray)
numarray.forEach((val)=>{
anarray.push   ( val )
})

console.log(anarray)

let maparray = numarray.map(function (val) {
    return val + 20
})
console.log(maparray)

let filterarray = numarray.filter(function (val)
{
    if (val < 40) {
        return val * 10
    }
})
console.log(filterarray)

console.log(new Date())

let ceiler = Math.ceil(4.1)
let floor = Math.floor(4.9)
let round1 = Math.round(4.5)
let round2 =Math.round(4.4)
console.log('ceiler=>', ceiler, 'floor=>', floor, 'rounder=>', round1, 'second rounder=>', round2)
console.log(Math.PI)

console.log(3 ** 2)

console.log(Math.random())
console.log(Math.floor(Math.random() * (11 - 5)) + 5)


let random = Array(10).fill(0)
console.log(random)

 randomnum = random.map((val) => Math.floor(Math.random() * (11 - 5)) + 5)
console.log(randomnum)