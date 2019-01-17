/**
 * Zagnieżdżanie funkcji.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */


//Twój komentarz ... Deklaracja funkcji
function jeden() {

    //Twój komentarz ... Deklaracja i inicjacja zmiennej
    var zmienna1 = 1;

    //Twój komentarz ... Deklaracja funkcji
    function dwa() {

        //Twój komentarz ... Wyświetlenie wartości zmiennej
        console.log(zmienna1);

        //Twój komentarz ... Deklaracja i inicjacja zmiennej
        var zmienna2 = 3;
    }

    //Twój komentarz ... Wywołanie funkcji dwa
    dwa();

    //Twój komentarz ... Wyświetlenie zmiennej, która nie została zainicjowana w tym zasiegu
    console.log(zmienna2);
}

//Twój komentarz ... Wywołanie funkcji jeden
jeden();