/**
 * Po kliknięciu w przycisk wygeneruj imię.
 */

var generateButton = document.querySelector("#generate-button");
var label = document.querySelector("#label");
// label.textContent = document.querySelector(".select-list")[0].textContent;

var selectList = document.querySelector(".select-list");
selectList.addEventListener("change", function(){
    // label.textContent = document.querySelector(".select-list").value;
})


generateButton.onclick = function(){
    // w zalezności od wyboruu w select umiesc albo 1  WYLOSOWANE żeńskie, albo męskie
    
    switch(document.querySelector(".select-list").value){
        case "man":
        label.textContent = "imię męskie";
        case "woman":
        label.textContent = "imię żeńskies";
        //wylosuj 1 imię z imoion rzeńskich
        case "man-woman":
        label.textContent = "imię randomowe";
        //wylosuj 1 imię z obu list
    }
    
};