// ==================== DARK MODE TOGGLE ====================
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Update icon
    themeToggle.innerHTML = isDarkMode 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});

// ==================== NAVIGATION ====================
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

// ==================== HAMBURGER MENU ====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    
    // Animate hamburger
    hamburger.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.style.display = 'none';
            hamburger.classList.remove('active');
        }
    });
});

// Reset inline menu styles when switching back to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.style.display = '';
        hamburger.classList.remove('active');
    }
});

// ==================== SMOOTH SCROLL BEHAVIOR ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            showNotification('Message sent successfully! 🎉', 'success');
            contactForm.reset();
        } catch (error) {
            showNotification('Failed to send message. Please try again.', 'error');
            console.error('Contact form submission error:', error);
        }
    });
}

// ==================== NOTIFICATION ====================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideInUp 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill cards and project cards for animation
document.querySelectorAll('.skill-card, .project-card, .info-item').forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
});

// ==================== SCROLL INDICATOR ====================
const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ==================== PARALLAX EFFECT ====================
const floatingCards = document.querySelectorAll('.floating-card');
let latestScrollY = 0;
let latestMouseX = 0;
let latestMouseY = 0;
let animationFrameId = null;

function animateFloatingCards() {
    const scrollShift = latestScrollY * 0.03;
    const mouseShiftX = (latestMouseX - 0.5) * 10;
    const mouseShiftY = (latestMouseY - 0.5) * 10;

    floatingCards.forEach((card, index) => {
        const depth = (index + 1) * 0.35;
        card.style.transform = `translate3d(${mouseShiftX * depth}px, ${(scrollShift + mouseShiftY) * depth}px, 0)`;
    });

    animationFrameId = null;
}

function requestCardAnimation() {
    if (animationFrameId !== null) {
        return;
    }
    animationFrameId = window.requestAnimationFrame(animateFloatingCards);
}

window.addEventListener('scroll', () => {
    latestScrollY = window.scrollY;
    requestCardAnimation();
}, { passive: true });

// ==================== ACTIVE SECTION HIGHLIGHTING ====================
function highlightActiveSection() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// ==================== FORM VALIDATION ====================
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '#e5e7eb';
        }
    });

    input.addEventListener('focus', () => {
        input.style.borderColor = '#6366f1';
    });
});

// ==================== LAZY LOADING FOR IMAGES ====================
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
});

// ==================== TYPED TEXT ANIMATION ====================
function typeText(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Optional: Uncomment to enable typed animation on hero subtitle
// window.addEventListener('load', () => {
//     const subtitle = document.querySelector('.hero-subtitle');
//     if (subtitle) {
//         const text = subtitle.textContent;
//         typeText(subtitle, text, 30);
//     }
// });

// ==================== MOUSE FOLLOW EFFECT ====================
document.addEventListener('mousemove', (e) => {
    latestMouseX = e.clientX / window.innerWidth;
    latestMouseY = e.clientY / window.innerHeight;
    requestCardAnimation();
});

// ==================== PAGE LOAD ANIMATION ====================
window.addEventListener('load', () => {
    // Add fade-in effect when page loads
    document.body.style.opacity = '1';
});

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', (e) => {
    // Press 'd' to toggle dark mode
    if (e.key === 'd' || e.key === 'D') {
        themeToggle.click();
    }
});

// ==================== UTILITY FUNCTIONS ====================

// Get current year for footer
function updateYear() {
    const yearElement = document.querySelector('.year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

updateYear();

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
window.addEventListener('scroll', debounce(() => {
    highlightActiveSection();
}, 100));

highlightActiveSection();
requestCardAnimation();

console.log('✨ Portfolio loaded successfully! Dark mode toggle: press D key or click the icon.');
