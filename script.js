// const var1 = 2;
// let var2 = 4;
// var2 = 6;
// console.log(var2)
// if (var2 < 10){
//     console.log(true);
// }else{
//     console.log(false)

// }

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }



// function funcName(message){
//     console.log("Function work properly " + message);
//     alert("It's a function " + message);
// }

// let message = "Test"
// funcName(message);








// function myFunction(value){
//     if(value < 25){
//         alert("Less than need");
//     }else if(value == 25){
//         alert("You Win");
//     }else{
//         alert("More than need");
//     }
// }
// myFunction(25);






// let global = 3


// function calculator(a, b){
//     let local = a + b + global
//     return local;
// }

// console.log(global);

// let result = calculator(2, 4);
// console.log(result)







// function calcPlus(a,b){
//     return a + b
// }

// function calcMinus(a,b){
//     return a - b
// }

// function calcMultiply(a,b){
//     return a * b
// }

// function calcDiv(a,b){
//     return a / b
// }

// let result = null




// function mainFunction(operation, a, b){
//     if (operation == "+"){
//         result = calcPlus;
//         console.log(result)
//     }else if(operation == "-"){
//         result = calcMinus;
//         console.log(result)
//     }else if(operation == "*"){
//         result = calcMultiply;
//         console.log(result)
//     }else if (operation == "*"){
//         result = calcMultiply;
//         console.log(result)
//     }else if(operation == "/"){
//         result = calcDiv;
//         console.log(result)
//     }
        
// }



// let EmptyArray = []; //empty array
// let ArrayWithValue = ["Red", "Green", "Blue"]; //an array with values
// console.log(ArrayWithValue); // [RGB]
// console.log(ArrayWithValue[0]);//red
// console.log(ArrayWithValue[1]);//green
// console.log(ArrayWithValue[2]);//blue
// console.log(ArrayWithValue.lenght);
// for (let i = 0; i < ArrayWithValue.length; i++){
//     console.log(ArrayWithValue[i]);//traditional for
// }

// for(let element of ArrayWithValue){
//     console.log(element);//for each

// }




let array = ["1"];
array.push("2");//adaugam la lista
array.unshift("0");//adaugam la inceput
array.pop();//stergem ultimul element
array.shift();//stergem primul element
console.log(array);

let multidimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// console.log(multidimensional[0][0]);//1
for (let i = 0; i < multidimensional.length; i++){
    for(let j = 0; j < multidimensional.length; j++){
        console.log(multidimensional[i][j]);

    }
}
