const navlinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () =>{
    document.body.classList.toggle("show-mobile-menu");

}); 

manuCloseButton.addEventListener("click", () => menuOpenButton.click ());
navlinks.forEach(link => {
    link.addEventListener("click",menuOpenButton.click()  );
})
