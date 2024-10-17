// Get the modal
var modal = document.getElementById('loginModal');

// Get the button that opens the modal
var btn = document.getElementById('loginBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = 'flex';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Navbar Toggle for Mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
        });
    }

    // Login Modal Functionality
    const loginModal = document.getElementById('loginModal');
    const loginBtn = document.getElementById('loginBtn');
    const closeModal = document.querySelector('.close');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'flex'; // Show the modal
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            loginModal.style.display = 'none'; // Close the modal
        });
    }

    // Close the modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block'; // Show the button after scrolling down 300px
        } else {
            scrollToTopBtn.style.display = 'none'; // Hide the button if less than 300px from the top
        }
    });

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll back to the top smoothly
        });
    }

    // Form Validation for Login and Registration Pages
    const loginForm = document.querySelector('.auth-container form');
    const registerForm = document.querySelector('.auth-container form');

    if (loginForm || registerForm) {
        const validateForm = (form) => {
            const email = form.querySelector('#email');
            const password = form.querySelector('#password');
            const confirmPassword = form.querySelector('#confirm-password');

            // Basic validation for empty fields and password confirmation
            if (!email.value || !password.value) {
                alert('Please fill in all fields');
                return false;
            }
            if (confirmPassword && password.value !== confirmPassword.value) {
                alert('Passwords do not match');
                return false;
            }
            return true;
        };

        if (loginForm) {
            loginForm.addEventListener('submit', (event) => {
                if (!validateForm(loginForm)) {
                    event.preventDefault(); // Stop form submission if validation fails
                }
            });
        }

        if (registerForm) {
            registerForm.addEventListener('submit', (event) => {
                if (!validateForm(registerForm)) {
                    event.preventDefault(); // Stop form submission if validation fails
                }
            });
        }
    }
});

