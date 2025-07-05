/**
 * Po kliknięciu w przycisk wygeneruj imię.
 */

var generateButton = document.querySelector("#generate-button");
var label = document.querySelector("#label");
// label.textContent = document.querySelector(".select-list")[0].textContent;

var selectList = document.querySelector(".select-list");


generateButton.onclick = function(){
    // w zależności od wyboru w select umieść albo 1  WYLOSOWANE żeńskie, albo męskie
    
    switch(document.querySelector(".select-list").value){
        case "man":
            label.textContent = "imię męskie";
            break;
        case "woman":
            label.textContent = "imię żeńskies";
            break;
            //wylosuj 1 imię z imoion rzeńskich
        case "man-woman":
            label.textContent = "losowo";
            break;
            //wylosuj 1 imię z obu list
    }
    
};