
$(document).ready(function(){
    let images = document.getElementsByClassName("image");
    let spinners = document.getElementsByClassName("fa-spin");
    let i = 0;
    let thirdPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            images[i].style.display = "block";
            spinners[i].style.display = "none";
            ++i;
            resolve("Success");
        }, 6000); 
    });

    let secondPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            images[i].style.display = "block";
            spinners[i].style.display = "none";
            ++i;
            resolve(thirdPromise);
        }, 4000);
    });

    let firstPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            images[i].style.display = "block";
            spinners[i].style.display = "none";
            ++i;
            resolve(secondPromise);
        }, 2000);
    });
    

    firstPromise.then().then().then(() => {
        console.log("Loaded Images Successfully");
    }).catch();

});