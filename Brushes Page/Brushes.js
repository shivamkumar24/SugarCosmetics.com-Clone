let brushesData=[
    {
        image_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",
        image_name:"BLEND TREND FACE BRUSH-006 HIGHLIGHTER",
        price:"399",
    },
    {
        image_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",
        image_name:"BLEND TREND FACE BRUSH-003 CONTOUR",
        price:"399",
    },
    {
        image_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
        image_name:"BLEND TREND DUAL EYESHADOW BRUSH",
        price:"599",
    },
    {
        image_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",
        image_name:"BLEND TREND FACE BRUSH-006 HIGHLIGHTER",
        price:"399",
    },
    {
        image_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",
        image_name:"BLEND TREND FACE BRUSH-003 CONTOUR",
        price:"399",
    },
    {
        image_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
        image_name:"BLEND TREND DUAL EYESHADOW BRUSH",
        price:"599",
    },
    {
        image_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",
        image_name:"BLEND TREND FACE BRUSH-006 HIGHLIGHTER",
        price:"399",
    },
    {
        image_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",
        image_name:"BLEND TREND FACE BRUSH-003 CONTOUR",
        price:"399",
    },
    {
        image_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
        image_name:"BLEND TREND DUAL EYESHADOW BRUSH",
        price:"599",
    },
];

let brushesArr=JSON.parse(localStorage.getItem("brushesDetails")) || [];
let output=brushesData.forEach(function(elem){
    let box=document.createElement("div");
    let image=document.createElement("img");
    let name=document.createElement("h3");
    let price=document.createElement("h3");
    image.setAttribute("src",elem.image_url);
    name.textContent=elem.image_name;
    price.textContent=elem.price;
    let btn=document.createElement("button")
    btn.innerText="Add to Cart";
    btn.addEventListener("click",function(){
        addDetails(elem);
    });

    box.append(image,name,price,btn);
    document.querySelector("#container").append(box);
});

function addDetails(elem){
    detailsObj = {
        image: elem.image_url,
        name: elem.name,
        price: elem.price,
      };
      // console.log(detailsObj);
      brushesArr.push(detailsObj);
      localStorage.setItem("brushesDetails", JSON.stringify(brushesArr));
}

