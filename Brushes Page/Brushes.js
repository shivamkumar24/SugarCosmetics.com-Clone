let brushesData = [
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",
        image_name: "BLEND TREND FACE BRUSH-006 HIGHLIGHTER",
        price: "399",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",
        image_name: "BLEND TREND FACE BRUSH-003 CONTOUR",
        price: "399",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
        image_name: "BLEND TREND DUAL EYESHADOW BRUSH",
        price: "599",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",
        image_name: "BLEND TREND FACE BRUSH-006 HIGHLIGHTER",
        price: "399",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",
        image_name: "BLEND TREND FACE BRUSH-003 CONTOUR",
        price: "399",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
        image_name: "BLEND TREND DUAL EYESHADOW BRUSH",
        price: "599",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",
        image_name: "BLEND TREND FACE BRUSH-006 HIGHLIGHTER",
        price: "399",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",
        image_name: "BLEND TREND FACE BRUSH-003 CONTOUR",
        price: "399",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
        image_name: "BLEND TREND DUAL EYESHADOW BRUSH",
        price: "599",
    },
];

let cartArr = JSON.parse(localStorage.getItem("cartDetails")) || [];
let output = brushesData.forEach(function (elem) {
    let box = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("h3");
    let price = document.createElement("h3");
    image.setAttribute("src", elem.image_url);
    name.innerText = elem.image_name;
    price.textContent = elem.price;
    let btn = document.createElement("button")
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", function () {
        addDetails(elem);
    });

    box.append(image, name, price, btn);
    document.querySelector("#container").append(box);
});

function addDetails(elem) {
    detailsObj = {
        image: elem.image_url,
        name: elem.image_name,
        price: elem.price,
    };
    //   console.log(detailsObj);
    cartArr.push(detailsObj);
    localStorage.setItem("cartDetails", JSON.stringify(cartArr));
}





document.querySelector("#Logo").addEventListener("click", function () {
    window.location.href = "../index.html";
});

document.querySelector("#cart").addEventListener("click", function () {
    window.location.href = "../Cart Page/Cart.html";
});