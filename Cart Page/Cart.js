

let cartArr = JSON.parse(localStorage.getItem("cartDetails")) || [];
let total = 0;
let Qty = 0;

//BrushesArr Access
cartArr.forEach(function (elem, index) {
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
    cartArr.splice(index, 1);
    localStorage.setItem("cartDetails", JSON.stringify(cartArr));
}

document.querySelector("#totalAmount").innerText = total;
document.querySelector("#totalQuantity").innerText = Qty;




document.getElementById("shopping_continue").addEventListener("click",function(){
    window.location.href="form.html";
});

