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

const itemThree = document.getElementById("item-3");
itemThree.addEventListener("mouseover", DetailThreeUp);
itemThree.addEventListener("mouseout", DetailThreeDown);

function DetailThreeUp(){
    let detail = document.getElementById("detail-3");
    detail.classList.remove("hidden");
}

function DetailThreeDown(){
    let detail = document.getElementById("detail-3");
    detail.classList.add("hidden");
}

const itemFour = document.getElementById("item-4");
itemFour.addEventListener("mouseover", DetailFourUp);
itemFour.addEventListener("mouseout", DetailFourDown);

function DetailFourUp(){
    let detail = document.getElementById("detail-4");
    detail.classList.remove("hidden");
}

function DetailFourDown(){
    let detail = document.getElementById("detail-4");
    detail.classList.add("hidden");
}

const itemFive = document.getElementById("item-5");
itemFive.addEventListener("mouseover", DetailFiveUp);
itemFive.addEventListener("mouseout", DetailFiveDown);

function DetailFiveUp(){
    let detail = document.getElementById("detail-5");
    detail.classList.remove("hidden");
}

function DetailFiveDown(){
    let detail = document.getElementById("detail-5");
    detail.classList.add("hidden");
}

const itemSix = document.getElementById("item-6");
itemSix.addEventListener("mouseover", DetailSixUp);
itemSix.addEventListener("mouseout", DetailSixDown);

function DetailSixUp(){
    let detail = document.getElementById("detail-6");
    detail.classList.remove("hidden");
}

function DetailSixDown(){
    let detail = document.getElementById("detail-6");
    detail.classList.add("hidden");
}

const itemSeven = document.getElementById("item-7");
itemSeven.addEventListener("mouseover", DetailSevenUp);
itemSeven.addEventListener("mouseout", DetailSevenDown);

function DetailSevenUp(){
    let detail = document.getElementById("detail-7");
    detail.classList.remove("hidden");
}

function DetailSevenDown(){
    let detail = document.getElementById("detail-7");
    detail.classList.add("hidden");
}

const itemEight = document.getElementById("item-8");
itemEight.addEventListener("mouseover", DetailEightUp);
itemEight.addEventListener("mouseout", DetailEightDown);

function DetailEightUp(){
    let detail = document.getElementById("detail-8");
    detail.classList.remove("hidden");
}

function DetailEightDown(){
    let detail = document.getElementById("detail-8");
    detail.classList.add("hidden");
}