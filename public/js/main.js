window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
})



const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active")
}))

window.addEventListener("scroll", function(){
    const menu = document.querySelector(".nav-menu");
    menu.classList.toggle("abajo", window.scrollY>0);
})