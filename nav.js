// Delete the line top on Navbar
document.querySelector("#cross").addEventListener("click", del);
function del(event){
    event.target.parentNode.remove();
};
document.querySelector("#Logo").addEventListener("click",function(){
    window.location.href = "../Home Page/Home.html";
});
