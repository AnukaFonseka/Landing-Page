
// Change navbar style when scroll
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {  
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Initialize the Google Map after the DOM content is loaded
    initMap();
});

// Smooth scrolling to sections when clicking nav links
document.querySelectorAll('a.nav-link, .navbar-brand').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, 
                behavior: 'smooth'
            });
        }
    });
});

// Manage navbar collapse on link click
document.addEventListener("DOMContentLoaded", () => {
    const navbarCollapse = document.querySelector("#navbarNav");
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, 
                    behavior: "smooth",
                });
            }

            if (navbarCollapse.classList.contains("show")) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: true,
                });
                bsCollapse.hide();
            }
        });
    });
});


// Swiper slider configuration
const swiper = new Swiper('.swiper', {
    
    // Optional parameters
    loop: true,

    // Enable autoplay
    autoplay: {
        delay: 2000, 
        disableOnInteraction: false, 
    },
  
    // pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  
// Change dot color on card hover
const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');

cards.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
        dots[index].style.backgroundColor = '#0864b1'; 
    });
    card.addEventListener('mouseout', () => {
        dots[index].style.backgroundColor = ''; 
    });
});

// Initialize Google Map with custom marker
function initMap() {
    const location = { lat: 40.78255467138316, lng: -73.96815832339787 }; // Example coordinates for Central Park
    const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 15,
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: 'images/map-marker-icon.svg', // Replace with the correct path to your custom SVG icon
        title: 'Central Park',
    });
}

// Load Google Maps API script with your API key
const googleMapScript = document.createElement('script');
googleMapScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB7kbfj1W88pLMBACs5DKYel8396HJtXRE&callback=initMap';
googleMapScript.async = true;
document.head.appendChild(googleMapScript);