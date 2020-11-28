// alert("script works!!")


// var username = prompt("enter your name")
// alert("Welcome " + username )

var btnTranslate = document.querySelector("#translate");
var txt = document.querySelector("#inputTxt");
var outputDiv = document.querySelector("#output")

function clickHandler(){
    // document.body.style.backgroundColor = "blue";
    console.log(txt.value);
    console.log("button is clicked");
    outputDiv.innerText =  txt.value;
}

btnTranslate.addEventListener("click", clickHandler)

