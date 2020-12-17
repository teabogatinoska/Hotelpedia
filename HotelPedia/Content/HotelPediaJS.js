
document.addEventListener('DOMContentLoaded', function () {

    const allStarLabels = document.querySelectorAll('.rating label');

    allStarLabels.forEach(thisLabel =>
        thisLabel.addEventListener('click', e => {
            e.preventDefault();
            let radioElement = e.target.previousElementSibling;
            radioElement.checked = !radioElement.checked;
            document.getElementById("brIzbraniStars").innerHTML = radioElement.value;
            alert(radioElement.value)
        })
    )
});


function GetValue() {
    return $('#brIzbraniStars').html();
}


/*document.getElementById("btnAA").addEventListener("click", function () {



});

*/