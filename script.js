document.addEventListener('DOMContentLoaded', function() {
    let roomCount = 1;
    const roomInfo = document.getElementById('room-info');
    const amount = document.getElementById('amount');
    const thankYouText = document.getElementById('thank-you');
    const chosenRooms = document.getElementById('chosen-rooms');

    document.getElementById('plus').addEventListener('click', function() {
        roomCount++;
        updateRoomInfo();
    });

    document.getElementById('minus').addEventListener('click', function() {
        if (roomCount > 1) {
            roomCount--;
            updateRoomInfo();
        }
    });

    document.getElementById('signup').addEventListener('click', function() {
        chosenRooms.textContent = roomCount;
        thankYouText.style.display = 'block';
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            event.preventDefault();
            alert('Please fill in all fields.');
        }
    });

    function updateRoomInfo() {
        roomInfo.textContent = `${roomCount} room${roomCount > 1 ? 's' : ''}`;
        amount.textContent = `$${roomCount * 199}`;
    }
});
