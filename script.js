/* ===============================================
(1) Mobile Menu Toggle
(This is needed on ALL pages)
===============================================
*/
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

/* ===============================================
(2) Active Nav Link on Scroll
(This section is REMOVED because we are no longer on a single page)
===============================================
*/


/* ===============================================
(3) Typing Effect for Header
(This code now checks if the "typing-effect" element exists before running)
===============================================
*/
const typingSpan = document.getElementById("typing-effect");

// Only run this code if we are on the Home Page (where typingSpan exists)
if (typingSpan) {
    const words = ["Developer", "Student", "Programmer", "Learner"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        } else {
            typingSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1500); 
                return;
            }
        }
        
        const typeSpeed = isDeleting ? 100 : 200;
        setTimeout(typeEffect, typeSpeed);
    }
    
    document.addEventListener("DOMContentLoaded", typeEffect);
}

