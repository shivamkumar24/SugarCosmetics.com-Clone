

let value=JSON.parse(localStorage.getItem("emailData"));

document.getElementById("Reg_email").innerText="Hello, "+value;

function userAddress(n,p,e,a,p,c,s,c){
    this.name=n;
    this.phone=p;
    this.email=e;
    this.address=a;
    this.pin=p;
    this.city=c;
    this.state=s;
    this.country=c;
}


let orderAddress=JSON.parse(localStorage.getItem("Address")) || [];
let arr=[];
function orderData(event){
    event.preventDefault();
    let form=document.getElementById("user_datails");
    let name=form.name.value;
    let phone=form.phone.value;
    let email=form.email.value;
    let address=form.address.value;
    let pin=form.pincode.value;
    let city=form.city.value;
    let state=form.state.value;
    let country=form.country.value;

    let user_address=new userAddress(name,phone,email,address,pin,city,state,country);
    arr.push(user_address);
    console.log(arr);
    localStorage.setItem("Address",JSON.stringify(arr));

    alert("If you want to make order confirm press OK....");
   window.location.href="order.html";

}


