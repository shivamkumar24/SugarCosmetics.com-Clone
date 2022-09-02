let trendingData = [
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/08.jpg?v=1630511040",
        image_name: "FACE PALETTE + LIP BALM",
        price: "699",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/RakshaBandhanKit-WBGImages.jpg?v=1654694624",
        image_name: "EVERYDAY MAKEUP KIT",
        price: "1499",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/PartyReadyKit-WBG1.png?v=1642487420",
        image_name: "PARTY READY KIT",
        price: "1299",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_2cb6e30d-c2a5-43c3-9ec4-7d00350fc004.jpg?v=1649346213",
        image_name: "MAKEUP STARTER KIT",
        price: "999",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_172725a5-b5f9-4648-869a-4c05561a1f81.jpg?v=1650023118",
        image_name: "9 IN 1 MAKEUP KIT",
        price: "399",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Wedding-Makeup-Kit---WBG-Images-op-3.jpg?v=1657523499",
        image_name: "WEDDING MAKEUP KIT",
        price: "1599",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_0ca61ef7-05ce-49be-9fa1-de7c41b99a1f.jpg?v=1650022932",
        image_name: "ANNIVERSARY KIT",
        price: "1799",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Launch---Sweat-No-More-Makeup-Kit---WBG-Images_11.jpg?v=1653494527",
        image_name: "SWEET AND NO MORE MAKEUP KIT",
        price: "2599",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/383779802-summer-makeup-kit-wbg-images.jpg?v=1649087039",
        image_name: "SUMMER MAKEUP KIT",
        price: "1599",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_37e8dc88-a720-44ed-a5f3-1e0f0e95bc17.jpg?v=1649692645",
        image_name: "DATE NIGHT MAKEUP KIT",
        price: "1799",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_969f5548-2c56-4506-ada8-159b53a8f630.jpg?v=1649423977",
        image_name: "GLAM UP KIT",
        price: "2599",
    },
];

let cartArr = JSON.parse(localStorage.getItem("cartDetails")) || [];
let output = trendingData.forEach(function (elem) {
    let box = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("h3");
    let price = document.createElement("h3");
    let btn = document.createElement("button");
    image.setAttribute("src", elem.image_url);
    name.innerText = elem.image_name;
    price.innerText = elem.price;
    btn.innerText = "Add to cart";
    btn.addEventListener("click", function () {
        addDetails(elem);
    });
    box.append(image, name, price, btn);
    document.querySelector("#container").append(box);
});

function addDetails(elem) {
    let detailsObj = {
        image: elem.image_url,
        name: elem.image_name,
        price: elem.price,
    };
    // console.log(detailsObj);
    cartArr.push(detailsObj);
    localStorage.setItem("cartDetails", JSON.stringify(cartArr));
}


document.querySelector("#Logo").addEventListener("click", function () {
    window.location.href = "../index.html";
});

document.querySelector("#cart").addEventListener("click", function () {
    window.location.href = "../Cart Page/Cart.html";
});