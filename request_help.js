document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('requst help');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission for testing

        // Validate phone number (10 digits)
        const phoneInput = document.getElementById('phone');
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phoneInput.value)) {
            alert("Please enter a valid 10-digit phone number.");
            phoneInput.focus();
            return;
        }

        // Check other fields (basic validation already handled by HTML)
        // Show success message
       
        // Reset the form
        form.reset();
    });
});
