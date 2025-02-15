document.addEventListener('DOMContentLoaded', function () {
    // Function to check if a cookie exists
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Function to set a cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    // Check if the cookie is not present
    if (!getCookie('userAcknowledged')) {
        const wrapper = document.querySelector('[data-cookie-ack="wrapper"]');
        if (wrapper) {
            wrapper.classList.add('show');
        }
    }

    // Set up the click event to set the cookie and remove the 'show' class
    const ackElement = document.querySelector('[data-cookie-ack="consentCapture"]');
    if (ackElement) {
        ackElement.addEventListener('click', function () {
            setCookie('userAcknowledged', 'true', 30);
            const wrapper = document.querySelector('[data-cookie-ack="wrapper"]');
            if (wrapper) {
                wrapper.classList.remove('show');
            }
        });
    }
});
