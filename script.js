let showResult = document.getElementById("result");
let input1 = document.getElementById("password")


console.log("Hello World");

const maya = "text me";


let form = 3;
form = "mot"



let typing;
function tryme(){
    typing = "confirming";
    
}

tryme();



const num = 2
const str = "string" || 'string'
let obj = {
    maya: 3,
    gender : "female",
    dept : 2
}


console.log(obj.maya)
 obj = "Paul"

 console.log(obj)
// const arr = [ 
//      {name: "bola",
//     gender : "female",
//     dept : 2} ,
//     "devMaya" ,
//     2
// ]

// console.log(arr)

// const arr2 = ["red", "blue" , "yellow"]

// console.log(arr2)

const arr3  = [2, 3 , 4, 5, 6]



console.log(arr3[3])

const arr4 = ["green" , 4 , "blue"]
console.log(arr4)


let jack  = false 

// if(jack !== true){
//   alert("i am true ")
// }else{
//     alert("i am false")
// }

let password = "Omobolaji";




function bola(){

    console.log(input1.value)
 if (password == input1.value) {
      showResult.innerHTML = "Login successful"
  showResult.style.color = "green"
  showResult.style.fontSize = "20px"
  showResult.style.fontWeight = "bold"
  showResult.style.padding = "10px"
 
   
}else{
    showResult.innerHTML = "Login failed"
    showResult.style.color = "red"
    showResult.style.fontSize = "20px"
    showResult.style.fontWeight = "bold"
    showResult.style.padding = "10px"
}
}


