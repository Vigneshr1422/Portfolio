const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('ul');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('slide');
});

function opentab(tabname) {
    const tablinks = document.querySelectorAll('.skil');
    const tabcontents = document.querySelectorAll('.content');

    tablinks.forEach(link => link.classList.remove('active'));
    tabcontents.forEach(content => content.style.display = 'none');

    document.getElementById(tabname).style.display = 'block';
    event.currentTarget.classList.add('active');
}

