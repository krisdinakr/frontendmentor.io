const button = document.getElementById('button');
const emailField = document.getElementById('email');
const content = document.getElementsByClassName('hero__content')[0];
const errorIcon = document.getElementById('error-icon');
const alertBox = document.createElement('div');
alertBox.className = 'alert';
alertBox.textContent = 'Please provide a valid email!'

function validateEmail(email) {
    const re = /\S+@\S+\.\S+$/;
    return re.test(String(email).toLowerCase());
}

button.addEventListener('click', function(evt) {
    const email = emailField.value;
    if (!validateEmail(email) || (!email)) {
        evt.preventDefault();
        emailField.style.borderColor = 'hsl(0, 93%, 68%)';
        content.appendChild(alertBox);
        errorIcon.style.display = 'block';
    };
})
