// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Form Submission Handling
const fitForm = document.getElementById('fit-form');

if (fitForm) {
    fitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(fitForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for submitting your information! Our experts will contact you shortly with personalized recommendations.');
        
        // Reset form
        fitForm.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.product-card, .guide-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.product-card, .guide-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on page load
    animateOnScroll();
});

// Video placeholder interaction
const videoPlaceholders = document.querySelectorAll('.video-placeholder');
videoPlaceholders.forEach(placeholder => {
    placeholder.addEventListener('click', () => {
        alert('Video content will be available soon. Thank you for your patience!');
    });
});