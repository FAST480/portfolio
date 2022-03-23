const links = document.querySelectorAll('.nav__menu--link');
const arrow = document.querySelector('.arrow-down-link');

const allLinks = [...links, arrow];
allLinks.forEach((link) => {

    link.addEventListener('click', (e) => {
        e.preventDefault();

        const id = link.getAttribute('href').substring(1);
        const section = document.getElementById(id);

        if(section)
        {
            seamless.scrollIntoView((section), {
                behavior: "smooth",
                block: "start",
                inline: "center",
            });
        }
    });

});
