// Get the modal
var ourmodal2 = document.getElementById('ourModal2');

// Get the button that opens the modal
var ourbtn2 = document.getElementById("ourBtn2");

// Get the <span> element that closes the modal
var ourspan2 = document.getElementsByClassName("ourclose2")[0];

// When the user clicks the button, open the modal
// When the user clicks the button, open the modal
ourbtn2.onclick = function() {
    ourmodal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ourspan2.onclick = function() {
    ourmodal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == ourmodal2) {
        ourmodal2.style.display = "none";
    }
}