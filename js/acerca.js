let imgBx = document.querySelectorAll(".imgBx");
let contentBx = document.querySelectorAll(".contentBx");

for (var i = 0; i < imgBx.length; i++) {
    imgBx[i].addEventListener("mouseover", function () {
        for (var i = 0; i < contentBx.length; i++) {
            contentBx[i].className = "contentBx";
        }
        document.getElementById(this.dataset.id).className = "contentBx active";

        for (var i = 0; i < imgBx.length; i++) {
            imgBx[i].className = "imgBx";
        }
        this.className = "imgBx active";
    })
}