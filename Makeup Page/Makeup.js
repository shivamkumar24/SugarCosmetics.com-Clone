let makeupData = [
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg?v=1645608270",
        image_name: "MATTE ATTACK TRANSFERPROOF LIPSTICK",
        price: "699",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
        image_name: "CONTOUR DE FORCE FACE PALLETTE",
        price: "799",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-blush-01-peach-peak-soft-peach-pink-11020203884627.jpg?v=1619102626",
        image_name: "CONTOUR DE FORCE FACE MINI BRUSH",
        price: "349",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",
        image_name: "ALL SET TO GO BANANA POWDER",
        price: "599",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg?v=1645608270",
        image_name: "MATTE ATTACK TRANSFERPROOF LIPSTICK",
        price: "699",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
        image_name: "CONTOUR DE FORCE FACE PALLETTE",
        price: "799",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-blush-01-peach-peak-soft-peach-pink-11020203884627.jpg?v=1619102626",
        image_name: "CONTOUR DE FORCE FACE MINI BRUSH",
        price: "349",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",
        image_name: "ALL SET TO GO BANANA POWDER",
        price: "549",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-07-vanilla-latte-fair-12796432941139.jpg?v=1619114695",
        image_name: "GODDES TO FLOWLESS BB CREAM",
        price: "699",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-blush-01-peach-peak-soft-peach-pink-11020203884627.jpg?v=1619102626",
        image_name: "CONTOUR DE FORCE MINI BRONZER",
        price: "399",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
        image_name: "CONTOUR DE FORCE FACE MINI BRUSH",
        price: "349",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",
        image_name: "ALL SET TO GO BANANA POWDER",
        price: "599",
    },
];

let makeupArr = JSON.parse(localStorage.getItem("makeupDetails")) || [];
let output = makeupData.forEach(function (elem) {
    let box = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("h3");
    let price = document.createElement("h3");
    image.setAttribute("src", elem.image_url);
    name.innerText = elem.image_name;
    price.innerText = elem.price;

    let btn = document.createElement("button");
    btn.innerText = "Add to Card";
    btn.addEventListener("click", function () {
        addDetails(elem);
    });
    box.append(image, name, price, btn);
    document.querySelector("#container").append(box);
});

function addDetails(elem) {
    let makeupObj = {
        image: elem.image_url,
        name: elem.image_name,
        price: elem.price,
    };
    makeupArr.push(makeupObj);
    localStorage.setItem("makeupDetails", JSON.stringify(makeupArr));
}



