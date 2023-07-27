const toggler= document.querySelector(".nav__toggler");
const navbar= document.querySelector(".navbar");
toggler.addEventListener("click",(e)=>{
    console.log("clicked");
    navbar.classList.toggle("nav__expanded");
});
