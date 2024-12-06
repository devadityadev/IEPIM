// Form Validation and Submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();  // Prevent form submission to handle it via JS

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Check if all fields are filled
    if (name && email && message) {
        // If valid, display success message
        alert("Thank you for your message! We will get back to you soon.");
        
        // Optionally, reset form after submission
        document.getElementById("contactForm").reset();
    } else {
        // If any field is empty, show an error message
        alert("Please fill out all fields.");
    }
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
