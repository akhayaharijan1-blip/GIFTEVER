console.log("GIFTEVER Loaded Successfully");
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});
const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:0.15

});

fadeElements.forEach((el)=>observer.observe(el));
// ==========================
// Demo Buttons (Future Ready)
// ==========================

const classicDemo = document.getElementById("classic-demo");
const royalDemo = document.getElementById("royal-demo");

if(classicDemo){

classicDemo.addEventListener("click",(e)=>{

e.preventDefault();

// Classic Demo Link Here

});

}

if(royalDemo){

royalDemo.addEventListener("click",(e)=>{

e.preventDefault();

// Royal Demo Link Here

});

}
// ==========================
// Order Buttons (Future Ready)
// ==========================

const classicOrder = document.getElementById("classic-order");
const royalOrder = document.getElementById("royal-order");

if(classicOrder){

classicOrder.addEventListener("click",(e)=>{

e.preventDefault();

// WhatsApp Link Here

});

}

if(royalOrder){

royalOrder.addEventListener("click",(e)=>{

e.preventDefault();

// WhatsApp Link Here

});

    }
const promoPopup = document.getElementById("promoPopup");

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button=>{

button.addEventListener("click",function(e){

e.preventDefault();

selectedPrice=Number(button.dataset.price);

finalPrice=selectedPrice;

promoInput.value="";

promoResult.innerHTML="";

promoPopup.style.display="flex";

});

});

promoPopup.addEventListener("click",function(e){

if(e.target===promoPopup){

promoPopup.style.display="none";

}

});
document.querySelector(".close-popup").addEventListener("click",function(){

promoPopup.style.display="none";

});
const promoInput=document.getElementById("promoInput");

const promoResult=document.getElementById("promoResult");

const applyPromo=document.getElementById("applyPromo");

let selectedPrice=199;

let finalPrice=199;

applyPromo.addEventListener("click",function(){

const code=promoInput.value.trim().toUpperCase();

if(code==="FIRST47"){

finalPrice=Math.round(selectedPrice*0.53);

promoResult.innerHTML=
`🎉 Congratulations!<br>
47% OFF Applied<br><br>
<del>₹${selectedPrice}</del>
&nbsp;
<b>₹${finalPrice}</b>`;

}

else{

finalPrice=selectedPrice;

promoResult.innerHTML=
"❌ Invalid Promo Code";

}

});
