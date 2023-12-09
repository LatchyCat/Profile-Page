//Main container

// alert('Hello, World!');



function displayDateTime() {
    var currentDateTime = new Date();
    var formattedDateTime = currentDateTime.toLocaleString();
    document.getElementById("datetime-display").textContent = formattedDateTime;
};

window.onload = displayDateTime;
