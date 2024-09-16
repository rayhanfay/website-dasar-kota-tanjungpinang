document.addEventListener("DOMContentLoaded", () => {
    const fiturdropdown = document.querySelector(".fiturdropdown");
    const fiturdropdownContent = document.querySelector(".fiturdropdown-content");
    const menuToggle = document.querySelector('.tombol-menu');
    const navLinks = document.querySelector('.link-navigasiweb');
    const welcomeSlider = document.querySelector('.selamat-datang-tpi');
    let slideIndex = 0;


    // Welcome slider
    function showWelcomeSlide() {
        const slides = welcomeSlider.querySelectorAll('.slide');
        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndex) ? 'block' : 'none';
        });
        slideIndex = (slideIndex + 1) % slides.length;
    }

    if (welcomeSlider) {
        showWelcomeSlide(); 
        setInterval(showWelcomeSlide, 5000); 
    }
    

    // Toggle mobile menu
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


    // Handle fiturdropdowns
    const fiturdropdownToggles = document.querySelectorAll('.fiturdropdown-toggle');
    fiturdropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            event.preventDefault(); 
            const openfiturdropdowns = document.querySelectorAll('.fiturdropdown-content.show');
            openfiturdropdowns.forEach(fiturdropdown => {
                if (fiturdropdown !== toggle.nextElementSibling) {
                    fiturdropdown.classList.remove('show');
                }
            });
            const fiturdropdownContent = toggle.nextElementSibling;
            fiturdropdownContent.classList.toggle('show');
        });
    });

    
    // Selengkapnya button click event
        const selengkapnyaBtn = document.querySelector('.tombol-lengkap');
        selengkapnyaBtn.addEventListener('click', () => {
            window.location.href = 'sejarah-tanjungpinang-kala-itu.html'; 
        });

        const wisataButton = document.querySelector("#kota-beribu-wisata-tpi .tombol-lengkap");
    
        if (wisataButton) {
        wisataButton.addEventListener("click", () => {
            window.location.href = "kota-beribu-wisata-tpi.html"; 
        });
    }
    
        // Image slider 
        const images = document.querySelectorAll(".efek-slider img");
        let currentImageIndex = 0;
        
        function showNextImage() {
           images[currentImageIndex].classList.remove('active');
           currentImageIndex = (currentImageIndex + 1) % images.length;
           images[currentImageIndex].classList.add('active');
        }
        
        if (images.length > 0) {
           images[currentImageIndex].classList.add('active');
           setInterval(showNextImage, 3000);
        }
});
