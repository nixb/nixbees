// Get the modal
var ourmodal3 = document.getElementById('ourModal3');

// Get the button that opens the modal
var ourBtn123 = document.getElementById("ourBtn123");

// Get the <span> element that closes the modal
var ourspan3 = document.getElementsByClassName("ourclose3")[0];

// When the user clicks the button, open the modal
// When the user clicks the button, open the modal
ourBtn123.onclick = function() {
    ourmodal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ourspan3.onclick = function() {
    ourmodal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == ourmodal2) {
        ourmodal3.style.display = "none";
    }
}