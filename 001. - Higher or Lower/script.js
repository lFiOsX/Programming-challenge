/**
 * Wpisz zgadywana liczbe do tablicy zgadnietych liczb
 * metoda startu i resetu gry
 * 
 */


window.onload = function(){
    var information = document.querySelector("#information");
    var playerNumbers = document.querySelector("#player-number");
    var playerNumberInput = document.querySelector("#player-number-input");
    var sendButton = document.querySelector("#game-form input:last-child");
    var statatistic = document.querySelector(".statistic");
    var gameCount;
    var gameLevel;
    var targetNumber;

        

    

    //Wylosuj liczbę
    function randomNumber(maxNumb){
        return Math.floor(Math.random() * maxNumb);
    }


    switch(gameLevel){
        case "easy": // 0-10
            targetNumber = randomNumber(11);
        case "normal": // 0-50
            targetNumber = randomNumber(51);
            break; 
        case "hard":// 0 -100
            targetNumber = randomNumber(101);
            break;
        default:
            targetNumber = null;
            break;
        }

    //dodaj liczbę z inputu do listy
        var tablica = [];
        sendButton.addEventListener("click", function(){
            playerNumbers.textContent = playerNumberInput.value;
            tablica += playerNumberInput.value + ", ";
            playerNumbers.textContent = tablica;
        })
        
        


        

    //wyswietl liczbe z listy

    //jesli liczba ger zostanie zmieniona to zrestartuj gre
    //funkcja restartu gry
    

};

