// Item One EventListener and Functions for the details appearing on hovering
const itemOne = document.getElementById("item-1");
itemOne.addEventListener("mouseover", DetailOneUp);
itemOne.addEventListener("mouseout", DetailOneDown);

function DetailOneUp(){
    let detail = document.getElementById("detail-1");
    detail.classList.remove("hidden");
}

function DetailOneDown(){
    let detail = document.getElementById("detail-1");
    detail.classList.add("hidden");
}

// Item Two EventListener and Functions for the details appearing on hovering
const itemTwo = document.getElementById("item-2");
itemTwo.addEventListener("mouseover", DetailTwoUp);
itemTwo.addEventListener("mouseout", DetailTwoDown);

function DetailTwoUp(){
    let detail = document.getElementById("detail-2");
    detail.classList.remove("hidden");
}

function DetailTwoDown(){
    let detail = document.getElementById("detail-2");
    detail.classList.add("hidden");
}