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

if (classicDemo) {
    classicDemo.addEventListener("click", (e) => {
        e.preventDefault();
        window.open("https://classic.giftever.store", "_blank");
    });
}

if (royalDemo) {
    royalDemo.addEventListener("click", (e) => {
        e.preventDefault();
        window.open("https://royal.giftever.store", "_blank");
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
const closePopup = document.querySelector(".close-popup");

if(closePopup){

    closePopup.addEventListener("click",function(){

        promoPopup.style.display="none";

    });

}
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
const continueWhatsapp=document.getElementById("continueWhatsapp");

continueWhatsapp.addEventListener("click",function(){

const promoCode=promoInput.value.trim().toUpperCase() || "No Promo";

const productName=selectedPrice===199
?"Classic Surprise"
:"Royal Surprise";
const orderId="GF"+Date.now().toString().slice(-6);

const today=new Date();

const orderDate=today.toLocaleDateString();

const orderTime=today.toLocaleTimeString([],{

hour:"2-digit",

minute:"2-digit"

});
const message =

`Hello GIFTEVER! 👋

I want to order ${productName}.

🆔 Order ID: ${orderId}

💵 Final Price: ₹${finalPrice}

🏷️ Promo Code: ${promoCode}

📅 ${orderDate}

⏰ ${orderTime}

I'm ready to place my order.

Please guide me with the payment process. 😊`; 

const phone="918926152451";

window.open(

`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,

"_blank"

);

});
