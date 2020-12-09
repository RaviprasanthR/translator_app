var input_text_button=document.querySelector('#input-button');
var input_text=document.querySelector('#input-text');
var output_text=document.querySelector('#output-text');


var url="https://api.funtranslations.com/translate/minion.json";

function translatetext(input){
    return url + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured ", error);
    alert("something wrong with server! try again later");
}

function display(){
    var inputtext=input_text.value;

    fetch(translatetext(inputtext))
        .then(response => response.json())
        .then(json =>{
            var translatedtext = json.contents.translated;
            output_text.innerText=translatedtext;
        })
        .catch(errorHandler)
};

input_text_button.addEventListener('click',display);   

