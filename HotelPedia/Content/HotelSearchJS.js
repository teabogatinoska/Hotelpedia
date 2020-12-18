

function checkCookie() {

    var brStars = getCookie("numStars");
    var brDollars = getCookie("cookieDollars");
    /*
    if (brDollars != "") {

        document.getElementById("brojIzbraniDolari").innerHTML = brDollars;
        alert(brDollars);

        document.cookie = 'cookieDollars=; Max-Age=0';

        var date = new Date();
        date.setTime(date.getTime() + (1 * 1000));
        document.cookie('cookieDollars', "", { expires: date });  // expires after 1 second
    }
    */

    if (brStars != "" && brDollars != "") {

        document.getElementById("brojIzbraniZvezdi").innerHTML = brStars;
        document.getElementById("brojIzbraniDolari").innerHTML = brDollars;

        document.cookie = 'numStars=; Max-Age=0';
        document.cookie = 'cookieDollars=; Max-Age=0';

        var date = new Date();
        date.setTime(date.getTime() + (1 * 1000));
        //document.cookie('cookieDollars', "", { expires: date });
        //document.cookie('numStars', "", { expires: date });  // expires after 1 second
       getHotels();
       alert("nova funkcija")
    }
    
   
}

function getHotels() {
    alert("povikana");

}

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





function funcSort() {

    var arrHotels = document.getElementsByClassName('oneHotel');
    var arrZaSort = [];

    var sortOptions = document.getElementById('sortSelect');
    var sortChoice = sortOptions.value;

    for (var i = 0; i < arrHotels.length; i++) {

        if (sortChoice === "most_stars") {
            var child = arrHotels[i].querySelectorAll('.brStars');
            var sorterBy = 0 - child[0].textContent;
        }
        else if (sortChoice === "least_stars") {
            var child = arrHotels[i].querySelectorAll('.brStars');
            var sorterBy = child[0].textContent;
        }
        else if (sortChoice === "lowest_price") {
            var child = arrHotels[i].querySelectorAll('.brPrice');
            var sorterBy = child[0].textContent;
        }
        else if (sortChoice === "highest_price") {
            var child = arrHotels[i].querySelectorAll('.brPrice');
            var sorterBy = 0 - child[0].textContent;
        }
        else if (sortChoice === "center_closest") {
            var child = arrHotels[i].querySelectorAll('.distCenter');
            var sorterBy = child[0].textContent;
        }
        else if (sortChoice === "airport_closest") {
            var child = arrHotels[i].querySelectorAll('.distAirport');
            var sorterBy = child[0].textContent;
        }
        else if (sortChoice === "az") {
            var child = arrHotels[i].querySelectorAll('.imeAngHotel');
            var sorterBy = child[0].textContent;
        }
        else {
            var child = arrHotels[i].querySelectorAll('.imeAngHotel');
            var sorterBy = child[0].textContent;
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

function funcFilter() {
    var arrHotels = document.getElementsByClassName('oneHotel');
    var arrNewHotels = [...arrHotels];

    //var filters = document.getElementsByName('filtri')
    var checkboxes = document.querySelectorAll('input[name="filtri"]:checked');
    console.log(checkboxes)

    var filters = [];
    checkboxes.forEach((checkbox) => {
        filters.push(checkbox.value);
    });

    console.log("filters:")
    console.log(filters)
    console.log("end of filters...")

    var zz = arrNewHotels[0].querySelectorAll(".parking");
    console.log(zz[0])


    console.log("---------------")
    var child = arrNewHotels[0].querySelectorAll('.cancellation');
    console.log(child[0].innerHTML.toString());


    var child = arrNewHotels[1].querySelectorAll('.cancellation');
    console.log(child[0].innerHTML.toString());


    console.log("---------------")
    /*
        for (var i = 0; i < filters.length; i++) {
    
            for (var j = 0; j < arrNewHotels.length; j++) {
    
                var qq = arrNewHotels[j].querySelectorAll("." + filters[i]);
               // console.log(qq[0].value)
    
            }
        }*/
}
