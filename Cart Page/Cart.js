let brushesArr = JSON.parse(localStorage.getItem("brushesDetails")) || [];
let total = 0;
let Qty = 0;

//BrushesArr Access
brushesArr.forEach(function (elem, index) {
    let box = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("h3");
    let price = document.createElement("h2");
    let del = document.createElement("button");
    image.setAttribute("src", elem.image);
    name.innerText = elem.name;
    price.innerText = elem.price;
    del.innerText = "Delete";
    del.addEventListener("click", function () {
        deleteContent(elem, index);
    });
    total = total + Number(elem.price);
    Qty++;
    box.append(image, name, price, del);
    document.querySelector("#container").append(box);
});
// console.log(total);
// console.log(Qty);

function deleteContent(elem, index) {
    total = total - Number(elem.price);
    Qty--;
    brushesArr.splice(index, 1);
    localStorage.setItem("brushesDetails", JSON.stringify(brushesArr));
}

document.querySelector("#totalAmount").innerText = total;
document.querySelector("#totalQuantity").innerText = Qty;



//MakeupPage Access
let makeupArr = JSON.parse(localStorage.getItem("makeupDetails")) || [];
makeupArr.forEach(function (elem, index) {
    let box = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("h3");
    let price = document.createElement("h2");
    let del = document.createElement("button");
    image.setAttribute("src", elem.image);
    name.innerText = elem.name;
    price.innerText = elem.price;
    del.innerText = "Delete";
    del.addEventListener("click", function () {
        deleteContent1(elem, index);
    });
    total = total + Number(elem.price);
    Qty++;
    box.append(image, name, price, del);
    document.querySelector("#container").append(box);
});

function deleteContent1(elem, index) {
    total = total - Number(elem.price);
    Qty--;
    makeupArr.splice(index, 1);
    localStorage.setItem("makeupDetails", JSON.stringify(makeupArr));
}

document.querySelector("#totalAmount").innerText = total;
document.querySelector("#totalQuantity").innerText = Qty;



//SkincarePage Access
let skincareArr = JSON.parse(localStorage.getItem("skincareDetails")) || [];
skincareArr.forEach(function (elem, index) {
    let box = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("h3");
    let price = document.createElement("h2");
    let del = document.createElement("button");
    image.setAttribute("src", elem.image);
    name.innerText = elem.name;
    price.innerText = elem.price;
    del.innerText = "Delete";
    del.addEventListener("click", function () {
        deleteContent2(elem, index);
    });
    total = total + Number(elem.price);
    Qty++;
    box.append(image, name, price, del);
    document.querySelector("#container").append(box);
});

function deleteContent2(elem, index) {
    total = total - Number(elem.price);
    Qty--;
    skincareArr.splice(index, 1);
    localStorage.setItem("skincareDetails", JSON.stringify(skincareArr));
}

document.querySelector("#totalAmount").innerText = total;
document.querySelector("#totalQuantity").innerText = Qty;



//TrendingPage Access
let trendingArr = JSON.parse(localStorage.getItem("trendingDetails")) || [];
trendingArr.forEach(function (elem, index) {
    let box = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("h3");
    let price = document.createElement("h2");
    let del = document.createElement("button");
    image.setAttribute("src", elem.image);
    name.innerText = elem.name;
    price.innerText = elem.price;
    del.innerText = "Delete";
    del.addEventListener("click", function () {
        deleteContent3(elem, index);
    });
    total = total + Number(elem.price);
    Qty++;
    box.append(image, name, price, del);
    document.querySelector("#container").append(box);
});

function deleteContent3(elem, index) {
    total = total - Number(elem.price);
    Qty--;
    trendingArr.splice(index, 1);
    localStorage.setItem("trendingDetails", JSON.stringify(trendingArr));
}
// console.log(total)
document.querySelector("#totalAmount").innerText = total;
document.querySelector("#totalQuantity").innerText = Qty;




