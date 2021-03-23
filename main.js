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