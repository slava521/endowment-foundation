$(document).ready(function(){
    $("#slider").owlCarousel({
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true,
		autoPlay: true,
		autoPlayTimeout: 1000,
		autoPlayHoverPause: true,
		autoPlaySpeed: true,
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});