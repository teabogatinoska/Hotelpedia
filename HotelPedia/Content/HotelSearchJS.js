
function inicijalizacijaFunc() {

    var brStars = getCookie("numStars");
    var brDollars = getCookie("cookieDollars");

    if (brStars != "" && brDollars != "") {

        document.getElementById("brojIzbraniZvezdi").innerHTML = brStars;
        document.getElementById("brojIzbraniDolari").innerHTML = brDollars;

        document.cookie = 'numStars=; Max-Age=0';
        document.cookie = 'cookieDollars=; Max-Age=0';

        var date = new Date();
        date.setTime(date.getTime() + (1 * 1000));

        var zvezdi = document.getElementById("brojIzbraniZvezdi").innerHTML;
        var starsContainer = document.getElementById('stars');
        var checkboxes = starsContainer.querySelectorAll('span');
        for (var i = 4; i > zvezdi-1; i--) {

           checkboxes[i].classList.add('nevidliva');
           }
        var dolari = document.getElementById("brojIzbraniDolari").innerHTML;
        var dollarsContainer = document.getElementById('dollarz');
        var checkDollar = dollarsContainer.querySelectorAll('span');
        for (var i = 2; i > dolari - 1; i--) {

            checkDollar[i].classList.add('nevidliva');
        }
        
        funcFilter(1);
    }

}


function funcFilter(nacinPovik) {

    console.log("1. vleze vo funcFilter")

    var preneseni_stars = document.getElementById("brojIzbraniZvezdi").innerHTML.toString();
    var preneseni_dolars = document.getElementById("brojIzbraniDolari").innerHTML.toString();

    console.log("2. preneseni stars = ")
    console.log(preneseni_stars)
    console.log("2. preneseni dollars = ")
    console.log(preneseni_dolars)

    var arrHotels = document.getElementsByClassName('oneHotel');
    var arrLength = arrHotels.length;

    console.log("3. arrHotels:")
    console.log(arrHotels);
    console.log("3. arrLength:")
    console.log(arrLength)

    if (nacinPovik === 1) {
        console.log("povikana od body onload")
    } else {
        console.log("povikana onclick")
    }

    var checkboxes = document.querySelectorAll('input[name="filtri"]:checked');

    var vw_filters = [];        // vo vw_filters se site filtri od view
    checkboxes.forEach((checkbox) => {
        vw_filters.push(checkbox.value);
    });

    console.log("4. checkboxes:")
    console.log(checkboxes)
    console.log("4. vw_filters: ")
    console.log(vw_filters)

    var arr_rbr_hotel = [];

    for (var i = 0; i < arrLength; i++) {

        var ime_hotel = arrHotels[i].id;
        arr_rbr_hotel.push(ime_hotel.substring(ime_hotel.lastIndexOf("_") + 1));
    }


    for (var i = 0; i < arrLength; i++) {  // gi vrti hotelite

        var rbr_hotel = arr_rbr_hotel[i];
        var div_hotel = document.getElementById("hotel_" + rbr_hotel);

        var hotel_stars = div_hotel.querySelector('span[class=brStars]').textContent;
        var hotel_dollars = div_hotel.querySelector('span[class=brPrice]').textContent;

        var FLAG_TRGNI_HOTEL = false;

        // 1. Proverka za stars i dollars izbrani od home page
        if (!FLAG_TRGNI_HOTEL) {

            if (hotel_stars === preneseni_stars && hotel_dollars === preneseni_dolars) {

                FLAG_TRGNI_HOTEL = false;
            }
            else {
                FLAG_TRGNI_HOTEL = true;
            }
        }

        // 2. Proverka za filtri
        if (!FLAG_TRGNI_HOTEL) {

            for (var j = 0; j < vw_filters.length; j++) { // gi vrti selektiranite filtri

                // eden_filter_hotel primer: "parking"
                const eden_filter_hotel = document.getElementById(vw_filters[j] + "_" + rbr_hotel)

                // specijalni slucai za distance od center i distance od airport, koi ne se bool-----------

                // izbraniot filter e ditance from center < 1 km
                if (vw_filters[j] == "distCenter1") {

                    var distance = document.getElementById("distCenter1_" + rbr_hotel);
                    var value_distance = parseFloat(distance.innerHTML.toString());

                    if (value_distance < 1) {
                        FLAG_TRGNI_HOTEL = false;
                        break;
                    } else {
                        FLAG_TRGNI_HOTEL = true;
                    }
                }
                // izbraniot filter e ditance from center < 2 km
                else if (vw_filters[j] == "distCenter2") {

                    var distance = document.getElementById("distCenter2_" + rbr_hotel);
                    var value_distance = parseFloat(distance.innerHTML.toString());

                    if (value_distance < 2) {
                        FLAG_TRGNI_HOTEL = false;
                        break;
                    } else {
                        FLAG_TRGNI_HOTEL = true;
                    }
                }
                // izbraniot filter e ditance from center < 1 km
                else if (vw_filters[j] == "distAirport") {

                    var distance = document.getElementById("distAirport_" + rbr_hotel);
                    var value_distance = parseFloat(distance.innerHTML.toString());

                    if (value_distance < 25) {
                        FLAG_TRGNI_HOTEL = false;
                        break;
                    } else {
                        FLAG_TRGNI_HOTEL = true;
                    }
                }
                // kraj na specijalni slucai---------------------------------

                // ova e za boolean
                else {
                    // eden_filter_hotel primer: "parking" dali go ima hotelot
                    const eden_filter_hotel_checked = eden_filter_hotel.querySelectorAll('input[class="check-box"]:checked');

                    if (eden_filter_hotel_checked[0] == undefined) {
                        // ako vlegol ovde znaci deka go nema toj filter
                        FLAG_TRGNI_HOTEL = true;
                        break;
                    }
                } // end of else
            } // end of for (var j = 0; j < vw_filters.length; j++)
        } // end of if (!FLAG_TRGNI_HOTEL)



        // trganje hotel
        if (FLAG_TRGNI_HOTEL === true) {

            div_hotel.classList.remove("pokaziHotel"); // pazi!!! ne smee da se referencira array so remove so classList
            div_hotel.classList.add("sokrienDiv");

        } else {
            div_hotel.classList.remove("sokrienDiv");  // pazi!!! ne smee da se referencira array so remove so classList
            div_hotel.classList.add("pokaziHotel");
        }

    } // end of for (var i = 0; i < arrLength; i++) {  // gi vrti hotelite
}



function funcSort() {

    var arrHotels = document.getElementsByClassName('oneHotel');
    var arrZaSort = [];

    var sortOptions = document.getElementById('sortSelect');
    var sortChoice = sortOptions.value;

    var ii = 0;

    for (var i = 0; i < arrHotels.length; i++) {

        ii = i + 1;

        if (sortChoice === "most_stars") {

            var child = document.getElementById("brStars_" + ii)

            //var child = arrHotels[i].querySelectorAll('.brStars');
            
            var sorterBy = 0 - child.innerHTML;
        }
        else if (sortChoice === "least_stars") {
            var child = document.getElementById("brStars_" + ii)
            var sorterBy = child.innerHTML;
        }
        else if (sortChoice === "lowest_price") {
            var child = document.getElementById("brPrice_" + ii)
            var sorterBy = child.innerHTML;
        }
        else if (sortChoice === "highest_price") {
            var child = document.getElementById("brPrice_" + ii)
            var sorterBy = 0 - child.innerHTML;
        }
        else if (sortChoice === "center_closest") {
            var child = document.getElementById("distCenter1_" + ii)
            var sorterBy = child.innerHTML;
        }
        else if (sortChoice === "airport_closest") {
            var child = document.getElementById("distAirport_" + ii)
            var sorterBy = child.innerHTML;
        }
        else if (sortChoice === "az") {
            var child = document.getElementById("imeAngHotel_" + ii)
            var sorterBy = child.innerHTML;
        }
        else {
            var child = document.getElementById("imeAngHotel_" + ii)
            var sorterBy = child.innerHTML;
        }

        arrZaSort.push([sorterBy, arrHotels[i]]);
    }

    arrZaSort.sort(function (a, b) {

        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }

    });

    console.log(arrZaSort);

    var hoteliContainer = document.getElementsByClassName("hoteliContainer")
    var conteinerDiv = hoteliContainer[0]
    conteinerDiv.innerHTML = ""

    for (var i = 0; i < arrZaSort.length; i++) {
        conteinerDiv.append(arrZaSort[i][1]);
    }

}


document.getElementById("idsubmit").addEventListener("click", function () {

    var arrHotels = document.getElementsByClassName('oneHotel');
    var arrNewHotels = [...arrHotels];

    var searchinput = document.getElementById("searchinput").value;
    var nameEN = document.getElementsByClassName('imeAngHotel');
    var nameMK = document.getElementsByClassName('imeMkHotel');

    var arrResult = [];

    for (var i = 0; i < arrNewHotels.length; i++) {

        if (nameEN[i].textContent.toLowerCase().includes(searchinput) || nameMK[i].textContent.toLowerCase().includes(searchinput)) {
            arrResult.push(arrNewHotels[i]);
        }
    }

    var innerhtml = "";

    for (var i = 0; i < arrResult.length; i++) {
        innerhtml += arrResult[i].innerHTML;
    }

    var newcontainerFilters = document.getElementById("newcontainerFilters");
    newcontainerFilters.style.display = "inline";

    newcontainer.innerHTML = "";
    newcontainer.innerHTML = innerhtml;

    newcontainer.append(newcontainerFilters);

});


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";

}
