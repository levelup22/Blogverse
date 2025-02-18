


function toggleForm(type) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const formTitle = document.getElementById('form-title');
    const formSubtitle = document.getElementById('form-subtitle');

    if (type === 'signup') {
        loginForm.style.opacity = '0';
        loginForm.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            loginForm.classList.remove('active');
            signupForm.classList.add('active');
            signupForm.style.opacity = '1';
            signupForm.style.transform = 'translateX(0)';
            formTitle.textContent = 'Create Account';
            formSubtitle.textContent = 'Sign up to get started with your new account';
        }, 200);
    } else {
        signupForm.style.opacity = '0';
        signupForm.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            signupForm.classList.remove('active');
            loginForm.classList.add('active');
            loginForm.style.opacity = '1';
            loginForm.style.transform = 'translateX(0)';
            formTitle.textContent = 'Welcome back';
            formSubtitle.textContent = 'Enter your credentials to access your account';
        }, 200);
    }
}

function createNightSky() {
    const stars = document.createElement('div');
    stars.className = 'stars';
    
    // Create twinkling stars
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        stars.appendChild(star);
    }
    
    // Create shooting stars
    for (let i = 0; i < 5; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.top = Math.random() * 50 + '%';
        shootingStar.style.left = Math.random() * 100 + '%';
        shootingStar.style.setProperty('--duration', (Math.random() * 2 + 4) + 's');
        shootingStar.style.animationDelay = (Math.random() * 5) + 's';
        stars.appendChild(shootingStar);
    }
    
    document.querySelector('.container').appendChild(stars);
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', createNightSky);