var modals = document.querySelectorAll('.modal');
var btn = document.querySelectorAll("button.modal-button");
var span = document.getElementsByClassName("close");
const body = document.querySelector("body");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
    body.style.overflow = "hidden";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < span.length; i++) {
 span[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
      body.style.overflow = "auto";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
      body.style.overflow = "auto";    
     }
    }
}
