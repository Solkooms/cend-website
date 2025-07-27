// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Currency Converter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const cadAmountInput = document.getElementById('cadAmount');
    const ghsAmountOutput = document.getElementById('ghsAmount');
    const exchangeRate = 7.48;
    
    // Update GHS amount when CAD amount changes
    cadAmountInput.addEventListener('input', function() {
        const cadAmount = parseFloat(this.value) || 0;
        const ghsAmount = (cadAmount * exchangeRate).toFixed(2);
        ghsAmountOutput.textContent = ghsAmount;
    });
    
    // Amount button functionality
    const amountButtons = document.querySelectorAll('.amount-btn');
    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
            const amount = this.textContent.replace('$', '');
            cadAmountInput.value = amount;
            const ghsAmount = (parseFloat(amount) * exchangeRate).toFixed(2);
            ghsAmountOutput.textContent = ghsAmount;
        });
    });
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Form validation and interaction
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    
    ctaButton.addEventListener('click', function() {
        const cadAmount = document.getElementById('cadAmount').value;
        
        if (!cadAmount || cadAmount <= 0) {
            alert('Please enter a valid amount to send');
            return;
        }