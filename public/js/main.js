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


var typed = new Typed(".auto-type", {
    strings: ['Contáctame', 'Conóceme', 'Comunícate conmigo'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

var typed2 = new Typed(".auto-type2", {
    strings: ['Soy un Desarrollador web frontend y backend, especializado en la práctica de proponer soluciones y ejecutar proyectos en las diferentes áreas, 2 años de experiencia en el desarrollo de aplicaciones web o páginas web, certificado en el área de redes por CISCO, extensa experiencia en reuniones con el cliente para la identificación de requerimientos y diseño, he liderado dos equipos de 4 programadores en los cuales se realizaron proyectos de IOT, certificado en Huawei training como desarrollador en HMS Core. Me describo a mi mismo como alguien rápido aprendiendo, persistente, que ama resolver problemas y aprender sobre nuevas tecnologías. Soy bueno trabajando con equipos y siempre estoy buscando una solución mejor y más escalable. Siempre estoy muy entusiasmado por trabajar en proyectos interesantes.'],
    typeSpeed: 2,
    backSpeed: 2
})