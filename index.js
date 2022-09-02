// Delete the line top on Navbar
document.querySelector("#cross").addEventListener("click", del);
function del(event) {
    event.target.parentNode.remove();
};

//Corousel
let imagesLink = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/eedba493-c795-435f-b323-a026045a571b.gif",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/be784c39-2c84-45d0-89c4-e79f72b380b0.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/0a0d2b46-e424-4f4c-baf3-da2d2fc14f88.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/efc32eea-4d1e-4275-b72d-13a399550ba4.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/32e53a7b-879e-4c34-a5bc-b95c85ee4a9e.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/7d151892-4d17-466e-8a06-743392796264.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/5dfdfad9-7419-46b3-85dc-1cde9429619d.gif",
]

let LeftBtn = document.querySelector("#left-btn");
let RightBtn = document.querySelector("#right-btn");
let imageState = 0;

RightBtn.addEventListener("click", function () {
    imageState++;
    if (imageState === imagesLink.length) {
        imageState = 0;
    }
    Corousel.src = imagesLink[imageState];
});

LeftBtn.addEventListener("click", function () {
    imageState--;
    if (imageState < 0) {
        imageState = imagesLink.length - 1;
    }
    Corousel.src = imagesLink[imageState];
});

// Quick Beauty
let BeautyimagesLink = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/64f2889d-e2d9-4047-82cd-e0e820230a77.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/10821512-ceff-4594-934a-86cbde6c6a44.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/fb3fbeba-23b1-42cf-946d-d69c2a3f393f.jpg",
]

let LeftBtn1 = document.querySelector("#left-btn-1");
let RightBtn1 = document.querySelector("#right-btn-1");
let Beauty = document.querySelector("#beauty");
let imageState1 = 0;

RightBtn1.addEventListener("click", function () {
    imageState1++;
    if (imageState1 === BeautyimagesLink.length) {
        imageState1 = 0;
    }
    beauty.src = BeautyimagesLink[imageState1];
});

LeftBtn1.addEventListener("click", function () {
    imageState1--;
    if (imageState1 < 0) {
        imageState1 = BeautyimagesLink.length - 1;
    }
    beauty.src = BeautyimagesLink[imageState1];
});

//New Launch
let LaunchimagesLink = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/89e51326-1363-44e1-94f1-d5bd00bd2ca9.gif",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/37471559-27d1-4509-9e31-29d889be7036.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/f190c764-84cf-4eea-a381-8b701be65852.gif",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/a1ea3283-9593-4f1c-8e6b-70c3a5062c37.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg",
]

let LeftBtn2 = document.querySelector("#left-btn-2");
let RightBtn2 = document.querySelector("#right-btn-2");
let Launch = document.querySelector("#launch");
let imageState2 = 0;

RightBtn2.addEventListener("click", function () {
    imageState2++;
    if (imageState2 === BeautyimagesLink.length) {
        imageState2 = 0;
    }
    newLaunch.src = BeautyimagesLink[imageState2];
});

LeftBtn2.addEventListener("click", function () {
    imageState2--;
    if (imageState2 < 0) {
        imageState2 = LaunchimagesLink.length - 1;
    }
    newLaunch.src = LaunchimagesLink[imageState2];
});

document.querySelector("#Corousel").addEventListener("click", function () {
    window.location.href = "./Trending Page/Trending.html";
});

document.querySelector("#beauty").addEventListener("click", function () {
    window.location.href = "./Skincare Page/Skincare.html";
});

document.querySelector("#newLaunch").addEventListener("click", function () {
    window.location.href = "./Trending Page/Trending.html";
});

document.querySelector(".explore").addEventListener("click", function () {
    window.location.href = "./Brushes Page/Brushes.html";
});