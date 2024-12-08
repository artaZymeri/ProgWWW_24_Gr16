// Get modal element and buttons
const modal = document.getElementById('registration-modal');
const joinBtn = document.getElementById('join-btn');
const closeModalBtn = document.getElementById('close-modal');

// Open the modal when the Join Now button is clicked
joinBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal if the user clicks anywhere outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

