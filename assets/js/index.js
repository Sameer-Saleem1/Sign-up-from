 // Get the form element by its ID
 const form = document.getElementById('signup-form');

 // Add a submit event listener to the form
 form.addEventListener('submit', function(event) {
     event.preventDefault(); // Prevent the default form submission

     // Get the input values
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     const termsChecked = document.getElementById('check').checked;

     // Perform validation if needed

     // Example: Check if the email and password fields are not empty
     if (email.trim() === '' || password.trim() === '') {
         alert('Please fill in all required fields.');
         return; // Prevent further processing if fields are empty
     }

     // Example: Check if the terms checkbox is checked
     if (!termsChecked) {
         alert('Please accept the terms and conditions.');
         return; // Prevent further processing if terms are not accepted
     }

     // If all validation passes, you can submit the form to the server or perform further actions
     // Example: Send the form data to the server using AJAX or fetch

     // Reset the form after submission (optional)
     form.reset();
 });