
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