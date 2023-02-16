window.onload = function() {
    startTab();
}
            
function startTab() {
    document.getElementById("defaultOpen").click();
}
           
function openPage(evt, pageName) {
    // declare my variables
    var i, site, navlinks;
    // Get all elements with class="site" and hide them
    site = document.getElementsByClassName("site");
    for (i = 0; i < site.length; i++) {
        site[i].style.display = "none";
    }
    // Get all elements with "navlinks" and remove class "active"
    navlinks = document.getElementsByClassName("navlinks");
    for (i = 0; i < navlinks.length; i++) {
        navlinks[i].className = navlinks[i].className.replace(" active", "");
    }
    // Show the current site, add an "active" class to the link that opened it
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}
