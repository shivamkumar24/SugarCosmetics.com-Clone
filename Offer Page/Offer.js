let offerData = [
    {
        image_url: "https://d32baadbbpueqt.cloudfront.net/Promotion/e5a7597a-e92c-4ee8-abae-b5dbda2d1467.jpg",
    },
    {
        image_url: "https://d32baadbbpueqt.cloudfront.net/Promotion/a1a487db-aa91-4ea9-8867-eced4b88f7ca.jpg",
    },
    {
        image_url: "https://d32baadbbpueqt.cloudfront.net/Promotion/48e275f2-e59f-4d70-89af-8170d2851917.jpg",
    },
    {
        image_url: "https://d32baadbbpueqt.cloudfront.net/Promotion/2df38bd5-4c0f-4d83-b45e-774d65cdd196.jpg",
    },
    {
        image_url: "https://d32baadbbpueqt.cloudfront.net/Promotion/2641279a-b130-40c8-896d-db03e2bb79d0.jpg",
    },
    {
        image_url: "https://d32baadbbpueqt.cloudfront.net/Promotion/1c8f8fbc-6277-4175-96e3-bc91fce30a5b.jpg",
    },
    {
        image_url: "https://d32baadbbpueqt.cloudfront.net/Promotion/a481d0fd-2f78-41b3-b10f-5f363cfe583c.jpg",
    },
    {
        image_url: "https://d32baadbbpueqt.cloudfront.net/Promotion/7dfbb470-5442-41e2-83df-d5b9a8acfc47.jpg",
    },
];

// let offerArr = JSON.parse(localStorage.getItem("offerDetails")) || [];
let output = offerData.forEach(function (elem) {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.image_url);
    image.addEventListener("click", function () {
        addDetails(elem);
    });
    box.append(image);
    document.querySelector("#container").append(box);
});

function addDetails(elem) {
    window.location.href = "../Makeup Page/Makeup.html";
}




document.querySelector("#Logo").addEventListener("click", function () {
    window.location.href = "../index.html";
});

document.querySelector("#cart").addEventListener("click", function () {
    window.location.href = "../Cart Page/Cart.html";
});