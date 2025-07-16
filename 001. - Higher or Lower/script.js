/**
 * Wpisz zgadywana liczbe do tablicy zgadnietych liczb
 * metoda startu i resetu gry
 * 
 */


window.onload = function(){
    /**
     * div - z informacją WYŻEJ/NIŻEJ
     */
    var information = document.querySelector("#information");
    /**
     * div - prezentuje wpisane juz liczby przez uzytkownika
     */
    var playerNumbers = document.querySelector("#player-number");
    /**
     *input -  text wprowadzony przez użytkowanika do okienka textowego
     */
    var playerNumberInput = document.querySelector("#player-number-input");
    /**
     * button - wysyła liczbę, którą podał użytkownika
     */
    var sendButton = document.querySelector("#game-form input:last-child");
    /**
     * wszystkie divy, które zawierają dane statystyczne
     */
    var statatistic = document.querySelector(".statistic");
    /**
     * liczni żyć gier
     */
    var gameCount;
    /**
     * poziomu gry
     */
    var gameLevel;
    /**
     * cel danej rundy / wylosowana liczba do zgadnięcia
     */
    var targetNumber;
    /**
     * tablica - przechowuje numery uzytownika
    */
    var userNumbers = [];

        

    

    //Wylosuj liczbę
    function randomNumber(maxNumb){
        return Math.floor(Math.random() * maxNumb);
    }


   // po naciśnięciu przycisku zapisz podaną liczbe przez uzytkowanika do tablicy i wypisz ją sformatowaną
   sendButton.addEventListener("click", function(){
    //dodaj do tablicy i sparsuj na numer dane wprowadzone przez użytkownika
       userNumbers.push(Number(playerNumberInput.value));
       playerNumbers.textContent = userNumbers.join(", ");

       if(userNumbers.includes(targetNumber)){
    //    if(userNumbers.includes(targetNumber)){
           alert("wygrałeś grę!");
           // dodać tu w przyszłości cos bardziej fajnego + resetowanie gry i dodawanie statystyk
       }
    })
    
    // tymczasowo
    gameLevel = "easy";
    switch(gameLevel){
        case "easy": // 0-10
            targetNumber = randomNumber(11);
            break;
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
    

    //tymczasowo!!! --------------------------------
    //mozna kiedyś zrobic cheat który aktywuje to i znika

    var tempPresentVariableInParag = document.querySelector("#container p:first-of-type");
    tempPresentVariableInParag.textContent += " " + targetNumber + " tablica: " + userNumbers[0];
    //-------------------------------------------



        
        //nie  pozwolic na powórzenia, nie pozwolic na wpisywanie liter i na wysysłanie pustego pola
    //wyswietl liczbe z listy

    //jesli liczba ger zostanie zmieniona to zrestartuj gre
    //funkcja restartu gry
    
    

    // usunąć powtórzenia liczb i białe znaki i jesli nie jest liczba

};

