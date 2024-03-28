function submitForm() {
    // Perform form submission
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://docs.google.com/forms/d/e/1FAIpQLSfrCvdwtKB5jSJOVyr0ZG2RBnG5Ei_RXmEcG7BHdfvczHoe8g/formResponse", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var formData = new FormData(document.getElementById("investorForm"));
    xhr.send(new URLSearchParams(formData).toString());

    // Display thank-you message
    document.getElementById("investorForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
    return false; // Prevent default form submission
}
