document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('header').classList.toggle('active');
    });
});
