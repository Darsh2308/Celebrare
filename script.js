document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Handle the login logic here (This can be customized later)
    alert('Login successful!');

    // Get references to necessary elements
    const logo = document.querySelector('.logo');
    const container = document.querySelector('.container');
    const zoomEffect = document.querySelector('.zoom-effect');

    // Move logo to center, rotate, and return to its original position
    logo.style.transition = 'transform 2s ease';
    logo.style.transform = 'translate(calc(50vw - 75px), calc(50vh - 75px)) rotate(360deg)';
    
    // Add a delay to show the full-screen image after the logo animation
    setTimeout(function() {
        // Add classes to trigger the zoom effect and hide the login form
        container.classList.add('logged-in');
        zoomEffect.classList.add('zoom-effect');

        // Reset the logo's position and transition after showing the full image
        logo.style.transition = 'none'; // Remove transition
        logo.style.transform = 'translate(0, 0)'; // Reset to original position
    }, 2000); // Duration of the animation
});
