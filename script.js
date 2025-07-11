// Function to show the pop-up
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
    document.body.classList.add('no-scroll'); // Disable body scrolling
}

// Function to close the pop-up
function closePopupHandler() {
    document.getElementById('popup').style.display = 'none';
    document.body.classList.remove('no-scroll'); // Enable body scrolling
}

// Event listener to close the pop-up when clicking outside the content
document.getElementById('popup').addEventListener('click', (event) => {
    if (event.target === document.getElementById('popup')) {
        closePopupHandler();
    }
});

// Event listener to close the pop-up
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('close-popup').addEventListener('click', closePopupHandler);
    // Automatically show the pop-up when the page loads
    showPopup();

    // Trigger confetti on page load
    triggerConfetti();
});

// Confetti initialization
confetti({
    particleCount: 100, // Number of confetti pieces
    spread: 70,         // Spread of the confetti
    origin: { y: 0.6 }  // Origin of the confetti
});

// Function to trigger confetti
function triggerConfetti() {
    confetti({
        particleCount: 500, // Number of confetti pieces
        spread: 1000,       // Spread of the confetti
        origin: { y: 0.3 }  // Origin of the confetti
    });
}

// Function to show the clicked image in a larger view
function showImage(event) {
    const clickedImage = event.target;

    // Remove any previous large view
    const previousLargeImage = document.querySelector('.large-image');
    if (previousLargeImage) {
        previousLargeImage.remove();
    }

    // Create a new large image element
    const largeImage = document.createElement('img');
    largeImage.src = clickedImage.src;
    largeImage.classList.add('large-image');
    largeImage.style.position = 'fixed';
    largeImage.style.top = '50%';
    largeImage.style.left = '50%';
    largeImage.style.transform = 'translate(-50%, -50%)';
    largeImage.style.maxWidth = '90%';
    largeImage.style.maxHeight = '90%';
    largeImage.style.zIndex = '1000';
    largeImage.style.cursor = 'pointer';
    largeImage.style.boxShadow = '0 4px 8px rgba(0,0,0,0.5)';

    // Add an event listener to close the large image view when clicked
    largeImage.addEventListener('click', () => {
        largeImage.remove();
    });

    // Append the large image to the body
    document.body.appendChild(largeImage);
}

// Get all gallery images and add click event listeners
document.querySelectorAll('#main-gallery img').forEach(image => {
    image.addEventListener('click', showImage);
});
