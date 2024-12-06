// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();  // Prevent default form submission

    // Retrieve input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate the fields
    if (name && email && message) {
        alert("Thank you for your message! We will get back to you soon.");
        
        // Optionally reset the form
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all fields before submitting.");
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
