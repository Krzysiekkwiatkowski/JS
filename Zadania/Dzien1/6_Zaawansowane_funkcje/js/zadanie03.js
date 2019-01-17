/**
 * Funkcje wyższego rzędu.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */

//Twój komentarz ... Deklaracja funkcji
function sortArray() {

    //Twój komentarz ... Utworzenie tablicy liczb
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Twój komentarz ... Wywołanie funkcji sortującej
    points.sort(function(a, b) {
        //Twój komentarz ... Określenie sposobu sortowania
        return a-b;
    });

    //Twój komentarz ... Zwrócenie posortowanej tablicy
    return points;
}

//Twój komentarz ... Wyświetlenie wyniku
console.log(sortArray());
