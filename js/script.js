const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section")
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-link");

window.addEventListener("scroll", () => {

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + 200;

        if( scrollPosition >= sectionTop && 
            scrollPosition < sectionTop + sectionHeight
        ){
            
            links.forEach(link => {
                link.classList.remove("active")
                console.log(link.getAttribute("href"));
                
                if(link.getAttribute("href") === "#" + section.id){
                    link.classList.add("active");
                }
            })
        }
    });
});

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("display");
});

links.forEach(navlink => {
console.log(navlink);

    navlink.addEventListener("click", () => {
        navLinks.classList.remove("display")
    });
});
