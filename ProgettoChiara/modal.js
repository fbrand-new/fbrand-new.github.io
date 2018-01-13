
// Get the modal: we might have some troubles if we define more than one
modal();

function modal() {
    var modal = document.getElementById("cModal");
    var img = document.getElementById('myImg');
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("captionA");
    img.onclick = function () {
        modal.style.display = "flex"; //Voglio il div del modal come block
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    };
}

