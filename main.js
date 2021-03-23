darkModeOff();
const darkMode = document.querySelector("#darkMode");
darkMode.addEventListener('click', () =>{
    console.log("clicked")
    if (darkMode.checked === true){
        darkModeOn()
    }else{
        darkModeOff();
    }
})
function darkModeOff(){
    document.querySelector("body").style.backgroundColor = "gray";
    document.querySelector("#calcBody").style.backgroundColor = "lightGray"
    const buttons = document.querySelectorAll(".button");
    for (let button of buttons){
        button.style.backgroundColor = "darkgray";
    }
    document.querySelector("#clear").style.backgroundColor = "slateblue";
    document.querySelector("#screen").style.backgroundColor = "whitesmoke";
    document.querySelector("#screen p").style.color = "black";
}
function darkModeOn(){
    document.querySelector("body").style.backgroundColor = "darkslategrey";
    document.querySelector("#calcBody").style.backgroundColor = "rgb(151, 150, 150";
    const buttons = document.querySelectorAll(".button");
    for (let button of buttons){
        button.style.backgroundColor = "slategray";
    }
    document.querySelector("#clear").style.backgroundColor = "rgb(110, 36, 36)";
    document.querySelector("#screen").style.backgroundColor = "black";
    document.querySelector("#screen p").style.color = "white";
}
let firstNum = "";
let operation = "";
let secondNum = "";
console.log(firstNum)
const screen = document.querySelector("#screen p");
const display = document.querySelector("#screen p");
const buttonDiv = document.querySelector("#buttonDiv");
buttonDiv.addEventListener('click', (e)=> addKeyToString(e.target));

function addKeyToString(key){
    console.log(firstNum, operation, secondNum, key.id)
    if(!operation && (!isNaN(key.innerHTML) || (key.innerHTML === "." && !(firstNum.includes("."))))){
        firstNum += key.innerHTML;
        console.log(firstNum)
    }else if(key.id === "clear"){
        firstNum = "";
        operation = "";
        secondNum = "";
    }else if(firstNum && !secondNum &&
    (key.id === "div" || key.id === "mult" || 
    key.id === "min" || key.id === "plus" || 
    key.id === "sqrt" || key.id === "sqrd")){
        if(key.id === "sqrt"){
            firstNum = Math.sqrt(firstNum);
        }else if(key.id === "sqrd"){
            firstNum = firstNum ** 2;
        }else{
            operation = key.innerHTML;
        }
    }else if(firstNum && operation && (!isNaN(key.innerHTML) || (key.innerHTML === "." && !(secondNum.includes("."))))){
        secondNum += key.innerHTML;
    }else if(firstNum && operation && secondNum && 
        (key.id === "div" || key.id === "mult" || 
        key.id === "min" || key.id === "plus" || 
        key.id === "eql")){
            firstNum = eval(screen.innerHTML);
            operation = "";
            secondNum = "";
            if(key.id === "div" || key.id === "mult" || 
            key.id === "min" || key.id === "plus" ){
                operation = key.innerHTML;
            }
        }
    updateScreen();
}

function updateScreen(){
    screen.innerHTML = `${firstNum} ${operation} ${secondNum}`;
}