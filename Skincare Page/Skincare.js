let skincareData = [
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1644399394",
        image_name: "CHARCOL PETROL BUBBLE MASK",
        price: "149",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Hydrating-Primer-3.jpg?v=1626423647",
        image_name: "AQUAHOLIC HYDRETING PRIMER",
        price: "699",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-12775753744467.jpg?v=1619113715",
        image_name: "CHEATSHEET ANTI-AGAINST MASK",
        price: "99",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1619113702",
        image_name: "CHEAT SHEET CAILYFYING MASK",
        price: "99",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/CCLipScrubWBG-3.jpg?v=1628610315",
        image_name: "COFFEE CULTURE LIP SCRUM",
        price: "299",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/373532210-artboard-1.jpg?v=1646149967",
        image_name: "CITRUS ANTI-POLLUTAED CERUM",
        price: "399",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Coffee-culture-cleansing-balm-stick-01.jpg?v=1643375708",
        image_name: "COFFEE CULTURE CLEANSING BALM STICK",
        price: "699",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-acne-combo-pack-of-6-14056089157715.jpg?v=1619113757",
        image_name: "ACNE COMBO(PACK OF 6)",
        price: "599",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-get-unmasked-pack-of-3-14056092467283.jpg?v=1619113899",
        image_name: "GET UMMASKED (PACK OF 3)",
        price: "299",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-hand-rub-01-roaring-rose-15541873836115.jpg?v=1619125116",
        image_name: "SWEEP RIGHT HAND AND RUB",
        price: "79",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292",
        image_name: "AQUAHOLIC PRIMING MOISTURIZERS",
        price: "349",
    },
];

let cartArr = JSON.parse(localStorage.getItem("cartDetails")) || [];
let output = skincareData.forEach(function (elem) {
    let box = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("h3");
    let price = document.createElement("h3");
    let btn = document.createElement("button");
    image.setAttribute("src", elem.image_url);
    name.innerText = elem.image_name;
    price.innerText = elem.price;
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
    // console.log(detailsObj)
    cartArr.push(detailsObj);
    localStorage.setItem("cartDetails", JSON.stringify(cartArr));
}


document.querySelector("#Logo").addEventListener("click", function () {
    window.location.href = "../index.html";
});

document.querySelector("#cart").addEventListener("click", function () {
    window.location.href = "../Cart Page/Cart.html";
});