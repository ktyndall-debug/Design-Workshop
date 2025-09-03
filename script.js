// Define modal functions globally first
function openModal(modalId) {
    console.log('Opening modal:', modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        console.log('Modal opened successfully');
    } else {
        console.error('Modal not found:', modalId);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function showVersion(version) {
    const versionBtns = document.querySelectorAll('.version-btn');
    versionBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(version)) {
            btn.classList.add('active');
        }
    });

    const lightImg = document.getElementById('portfolio1-light');
    const darkImg = document.getElementById('portfolio1-dark');
    
    if (lightImg && darkImg) {
        if (version === 'light') {
            lightImg.classList.add('active');
            darkImg.classList.remove('active');
        } else {
            darkImg.classList.add('active');
            lightImg.classList.remove('active');
        }
    }
}

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Contact form handling with Web3Forms
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.form-submit-btn');
            const submitText = this.querySelector('.submit-text');
            const submitLoading = this.querySelector('.submit-loading');
            const messageDiv = document.getElementById('form-message');
            
            // Show loading state
            submitBtn.disabled = true;
            submitText.style.display = 'none';
            submitLoading.style.display = 'flex';
            messageDiv.style.display = 'none';
            
            try {
                // Get form data
                const formData = new FormData(this);
                
                // Check for access key
                const accessKey = formData.get('access_key');
                if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
                    throw new Error('Web3Forms access key not configured. Please add your access key to the form.');
                }
                
                // Submit to Web3Forms
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                
                if (result.success) {
                    // Success message
                    messageDiv.innerHTML = '<i class="fas fa-check-circle"></i>Thank you! Your message has been sent successfully. I\'ll get back to you soon!';
                    messageDiv.className = 'form-message success';
                    messageDiv.style.display = 'block';
                    
                    // Reset form
                    this.reset();
                    
                    // Hide message after 5 seconds
                    setTimeout(() => {
                        messageDiv.style.display = 'none';
                    }, 5000);
                } else {
                    throw new Error(result.message || 'Failed to send message');
                }
                
            } catch (error) {
                console.error('Form submission error:', error);
                
                // Error message
                messageDiv.innerHTML = '<i class="fas fa-exclamation-circle"></i>' + error.message;
                messageDiv.className = 'form-message error';
                messageDiv.style.display = 'block';
                
                // Hide error message after 7 seconds
                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 7000);
            } finally {
                // Reset button state
                submitBtn.disabled = false;
                submitText.style.display = 'inline';
                submitLoading.style.display = 'none';
            }
        });
    }
});

// Close modal when clicking outside or on close button
document.addEventListener('click', function(e) {
    console.log('Click detected on:', e.target.className); // Debug line
    
    // Close button functionality
    if (e.target.classList.contains('close')) {
        console.log('Close button clicked'); // Debug line
        const modal = e.target.closest('.modal');
        if (modal) {
            console.log('Closing modal:', modal.id); // Debug line
            closeModal(modal.id);
        }
    }
    
    // Close when clicking outside modal content
    if (e.target.classList.contains('modal')) {
        console.log('Modal background clicked'); // Debug line
        closeModal(e.target.id);
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal[style*="block"]');
        if (activeModal) {
            closeModal(activeModal.id);
        }
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.about-card, .portfolio-item, .service-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Portfolio image loading and error handling
function handleImageError(img) {
    // Create a placeholder if image fails to load
    const placeholder = document.createElement('div');
    placeholder.className = 'image-placeholder';
    placeholder.innerHTML = '<i class="fas fa-image"></i><p>Image Preview</p>';
    placeholder.style.cssText = `
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        font-size: 1.2rem;
    `;
    
    img.parentNode.replaceChild(placeholder, img);
}

// Add error handling to all images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            handleImageError(this);
        });
        
        img.addEventListener('load', function() {
            console.log('Image loaded successfully:', this.src);
        });
    });
    
    // Add specific handling for modal images
    const modalImages = document.querySelectorAll('.modal-image');
    modalImages.forEach(img => {
        img.addEventListener('error', function() {
            console.error('Modal image failed to load:', this.src);
            this.style.background = '#f1f5f9';
            this.style.minHeight = '400px';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.border = '2px dashed #cbd5e1';
            this.innerHTML = '<div style="text-align: center; color: #64748b;"><i class="fas fa-image" style="font-size: 3rem; margin-bottom: 1rem;"></i><br>Image not found<br><small>' + this.src + '</small></div>';
        });
        
        img.addEventListener('load', function() {
            console.log('Modal image loaded successfully:', this.src);
        });
    });
});