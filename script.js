document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const tallerLinks = document.querySelectorAll('.taller-link');
    const alquilerLinks = document.querySelectorAll('.alquiler-link');
    const basketballLinks = document.querySelectorAll('.basketball-link');
    const logoLink = document.getElementById('logo-link');

    function showSection(targetId) {
        // Oculta todas las secciones
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.add('hidden');
        });

       
        const targetSection = document.getElementById(targetId);
        targetSection.classList.remove('hidden');

        
        if (targetId === 'donaciones') {
            document.getElementById('donaciones').classList.remove('hidden');
        }

        if (targetId === 'inicio') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    function showDetailSection(detailSectionId, detailTitleId, detailDescriptionId, title, description) {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.add('hidden');
        });

        const detailSection = document.getElementById(detailSectionId);
        detailSection.classList.remove('hidden');

        document.getElementById(detailTitleId).innerText = title;
        document.getElementById(detailDescriptionId).innerText = description;
    }

    // Manejar los clics en los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            showSection(targetId);
        });
    });

    // Manejar el clic en el logo para volver a Inicio
    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('inicio');
    });

    
    tallerLinks.forEach(link => {
        link.addEventListener('click', function() {
            const taller = this.dataset.taller;
            const titulo = taller.charAt(0).toUpperCase() + taller.slice(1);
            const descripcion = `Descripción del taller de ${titulo}`;
            showDetailSection('detalle-taller', 'taller-titulo', 'taller-descripcion', titulo, descripcion);
        });
    });

    
    alquilerLinks.forEach(link => {
        link.addEventListener('click', function() {
            const alquiler = this.dataset.alquiler;
            const titulo = alquiler.charAt(0).toUpperCase() + alquiler.slice(1).replace('-', ' ');
            const descripcion = `Descripción del servicio de alquiler de ${titulo}`;
            showDetailSection('detalle-alquiler', 'alquiler-titulo', 'alquiler-descripcion', titulo, descripcion);
        });
    });

    
    basketballLinks.forEach(link => {
        link.addEventListener('click', function() {
            const basketball = this.dataset.basketball;
            const titulo = basketball.charAt(0).toUpperCase() + basketball.slice(1).replace('-', ' ');
            const descripcion = `Descripción del servicio de ${titulo}`;
            showDetailSection('detalle-basketball', 'basketball-titulo', 'basketball-descripcion', titulo, descripcion);
        });
    });

    // Manejar los botones de donaciones
    document.querySelectorAll('.donacion-btn').forEach(button => {
        button.addEventListener('click', function() {
            const amount = this.dataset.amount;
            document.getElementById('donacion-amount').innerText = amount;
            document.getElementById('mensaje-donacion').classList.remove('hidden');
        });
    });

    document.getElementById('otro-monto-btn').addEventListener('click', function() {
        const amount = document.getElementById('otro-monto-input').value;
        document.getElementById('donacion-amount').innerText = amount;
        document.getElementById('mensaje-donacion').classList.remove('hidden');
    });

    // Carousel
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    let currentIndex = 0;

    function showSlide(index) {
        const slideWidth = slides[0].offsetWidth;
        carousel.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 2;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 2) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    window.addEventListener('resize', () => showSlide(currentIndex)); 
});




















