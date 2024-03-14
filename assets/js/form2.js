 function submitForm() {
            // Perform form submission (you may want to add validation here)
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://docs.google.com/forms/d/e/1FAIpQLSccMKytLQGKMuzkg91Z1nQzr5sh1-K4xRk7cFqu_68My8dFvA/formResponse", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var formData = new FormData(document.getElementById("myForm"));
            xhr.send(new URLSearchParams(formData).toString());

            // Display thank-you message
            document.getElementById("myForm").style.display = "none";
            document.getElementById("thankYouMessage").style.display = "block";
        }