
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

const typingSpan = document.getElementById("typing-effect");

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


