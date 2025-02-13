document.addEventListener('DOMContentLoaded', function () {
    const backTop = document.getElementById("backTop")

    function backHome()  {
        window.location.href = "index.html" //creating function to go indexpage
    }
    
    backTop.addEventListener("click", backHome) //adding on click on backTop element to run index function
});