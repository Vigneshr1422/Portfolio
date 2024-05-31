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

//  active tab
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.skil').classList.add('active');
    document.querySelector('.content').style.display = 'block';
});
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully!');
});
