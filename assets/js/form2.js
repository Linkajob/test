 function submitForm() {
            // Perform form submission (you may want to add validation here)
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://docs.google.com/forms/d/e/1FAIpQLSc3fjPDh8BW8lwJonCtiyZ9N1B5M8VWMxGii97Z5yRO7SXkSQ/formResponse", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var formData = new FormData(document.getElementById("myForm"));
            xhr.send(new URLSearchParams(formData).toString());

            // Display thank-you message
            document.getElementById("myForm").style.display = "none";
            document.getElementById("thankYouMessage").style.display = "block";
        }