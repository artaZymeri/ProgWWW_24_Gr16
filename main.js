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



        document.getElementById('get-started-btn').addEventListener('click', function() {
            document.getElementById('get-started-modal').style.display = 'block';
        });

        // Close the modal when the close button is clicked
        document.getElementById('close-get-started-modal').addEventListener('click', function() {
            document.getElementById('get-started-modal').style.display = 'none';
        });

        // Close the modal when clicking outside of it
        window.addEventListener('click', function(event) {
            if (event.target == document.getElementById('get-started-modal')) {
                document.getElementById('get-started-modal').style.display = 'none';
            }
        });