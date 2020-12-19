
document.addEventListener('DOMContentLoaded', function () {

    const allStarLabels = document.querySelectorAll('.rating label');

    allStarLabels.forEach(thisLabel =>

        thisLabel.addEventListener('click', e => {
            e.preventDefault();
            let radioElement = e.target.previousElementSibling;
            radioElement.checked = !radioElement.checked;
            document.getElementById("brIzbraniStars").innerHTML = radioElement.value;

            var brStars = getCookie("numStars");

            if (brStars != "") {

                document.cookie = 'numStars=; Max-Age=0';

            }
            setCookie("numStars", radioElement.value);

        })
    )
    var range = document.getElementById('myRange');
    range.addEventListener('click', function () {
        var rangeValue = range.value;
        var brDollars = getCookie("cookieDollars");
        if (brDollars != "") {

            document.cookie = 'cookieDollars=; Max-Age=0';

        }
        setCookie("cookieDollars", rangeValue);
    });
    
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






