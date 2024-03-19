// JavaScript for applying additional styling dynamically
document.addEventListener("DOMContentLoaded", function() {
    var h1Element = document.querySelector("h1");
    h1Element.style.fontFamily = "Arial, sans-serif";
    
    var pElements = document.querySelectorAll("p");
    pElements.forEach(function(pElement) {
        pElement.style.fontWeight = "bold";
    });
});