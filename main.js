document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to top when clicked
    document.getElementById("backToTop").onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
});