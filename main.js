document.addEventListener('DOMContentLoaded', function() {
    // Show/hide button based on scroll position
    window.onscroll = function() {
        const button = document.getElementById("backToTop");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    };

    // Smooth scroll to top when clicked
    document.getElementById("backToTop").onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
});