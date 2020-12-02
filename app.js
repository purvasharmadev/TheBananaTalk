// alert("script works!!")


// var username = prompt("enter your name")
// alert("Welcome " + username )

var btnTranslate = document.querySelector("#translate");
var txt = document.querySelector("#inputTxt");
var outputDiv = document.querySelector("#output")

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTranslateURL(text){
    return serverURL + "?" +"text=" + text
}

function errorHandler(error){
    console.log("Error Occured",error)
    alert("something wrong with server! Try again after sometime :( ")
}

function clickHandler(){
    
    console.log("button is clicked");
    var inputTxt = txt.value
    fetch(getTranslateURL(inputTxt))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        console.log(json.contents.translated)
    } )
    .catch(errorHandler)


}

btnTranslate.addEventListener("click", clickHandler)

