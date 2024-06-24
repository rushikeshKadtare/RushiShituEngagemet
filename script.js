document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('phone').value;

    if (name && email) {
        alert(`Thank you for your RSVP, ${name}!`);
        document.getElementById('rsvpForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
