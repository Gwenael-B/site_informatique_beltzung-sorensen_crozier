document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentIndex = 0;
    let timer;

    // Création des points
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        else dot.classList.add('inactive');
        
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetTimer(); // On relance le décompte de 5s après un clic
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function goToSlide(index) {
        currentIndex = index;
        
        // Si on dépasse la dernière image, on revient à la première
        if (currentIndex >= slides.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = slides.length - 1;

        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        dots.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.replace('inactive', 'active');
            } else {
                dot.classList.replace('active', 'inactive');
            }
        });
    }

    // Fonction pour passer à l'image suivante
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    // Lancement du défilement automatique (5000ms = 5s)
    function startTimer() {
        timer = setInterval(nextSlide, 10000);
    }

    function resetTimer() {
        clearInterval(timer);
        startTimer();
    }

    startTimer();
});