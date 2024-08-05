document.addEventListener('DOMContentLoaded', function() {
    // Select the submit button and form elements
    var submitButton = document.getElementById('submit-button');
    var contactPage = document.getElementById('contact-page');

    // Add event listener to the submit button
    submitButton.addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Create a new paragraph element
        var thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = 'Thank you for your message';

        // Apply the desired styling
        thankYouMessage.style.fontSize = '24px';
        thankYouMessage.style.textAlign = 'center'; // Center the text horizontally

        // Clear the existing content of the contact page
        contactPage.innerHTML = '';

        // Append the new paragraph to the contact page
        contactPage.appendChild(thankYouMessage);
    });
});
