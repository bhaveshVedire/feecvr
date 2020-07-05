function loadimages() {
    let images = document.getElementsByClassName("image");
    let spinners = document.getElementsByClassName("fa-spin");
    let table = document.getElementById("table");
    let cards = document.getElementsByClassName("card");
    for(let i = 0 ; i < images.length ; ++i){
        images[i].style.display = "block";
        spinners[i].style.display = "none"
    }
    for(let i = 0 ; i < cards.length ; ++i){
        cards[i].style.display = "block";
        spinners[i].style.display = "none"
    }
    table.style.display = "block"
    spinners[0].style.display = "none"
}


$(document).ready(function(){
    setTimeout(loadimages, 5000);
  });