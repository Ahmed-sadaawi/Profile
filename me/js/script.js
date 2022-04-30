const btnMenu = document.getElementById('btn-menu');
const links = document.getElementById('nav');

btnMenu.onclick = function() {
    btnMenu.classList.toggle('fa-times');
    links.style.display = "inline-block";
    links.classList.toggle('clip-path-polygon');


}

const listLink = document.querySelectorAll('a,i').forEach((i) => {
    i.addEventListener('click', (e) => {
        const sections = document.querySelectorAll('section').forEach((section) => {

            if (e.target.dataset.go === section.dataset.go) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });

    });
});