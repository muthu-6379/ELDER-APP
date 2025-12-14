document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordError = document.getElementById('passwordMatchError');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission for now

        // Password match validation
        if (password.value !== confirmPassword.value) {
            passwordError.textContent = 'Passwords do not match';
            return;
        } else {
            passwordError.textContent = '';
        }

        // Simulate success (replace this with actual AJAX or form post)
            alert('Registered Successfully!');
      
        form.reset(); // Clear the form fields after registration
    });
});
