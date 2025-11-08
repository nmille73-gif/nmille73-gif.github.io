const formElement = document.querySelector("form");
//Sets locationCount to 1 since there is already one location available/required by default
let locationCount = 1;

//If user chooses to add another location, this function provides the HTML for the user to type it in and stores it
function addLocation() {
    locationCount ++;
    const locationList = document.getElementById('otherLocations');
  const li = document.createElement('li');
  li.className = "location";
  li.id = `location-${locationCount}`;
  li.innerHTML = `
  <div>
  <label for="location-${locationCount}">Location: </label>
  <input type="text" name="location-${locationCount}" placeholder="Enter a location">
  </div>`;
  locationList.appendChild(li);
}

//Provides functionality to reset button
function resetForm() {
    location.reload(); 
  }

//Provides the submitted page after form has been submitted, confirming all of the inputted details from the user OR default values if none were provided
function generateOutput() {
    const formData = new FormData(formElement);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const preferredName = formData.get('preferredName');
    const email = formData.get("userEmail");
    const occasion = formData.get('occasion');
    const specifications = formData.get('specifications');
    const date = formData.get('date_picker');
    const locations = formData.getAll('locations').filter((loc) => loc.trim() !== '');
    let outputHTML = `
    <header>
        <h1>Wes Packham Photography</h1>
        <nav>
            <a href="./">Home</a> ~
            <a href="about.html">About Wes</a> ~
            <a href="location.html">Locations</a> ~
            <a href="gallery.html">Gallery</a> ~
            <a href="booking.html">Book With Wes</a>
        </nav>
        <h2>Booking Confirmation</h2>
    </header>
    <main>
        <h3>Your booking request has been submitted to Wes!</h3>
        <div class="confirmation-details">
            <h4>Booking Details:</h4>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            ${preferredName ? `<p><strong>Preferred Name:</strong> ${preferredName}</p>` : ''}
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Occasion:</strong> ${occasion}</p>
            ${specifications ? `<p><strong>Specifications:</strong> ${specifications}</p>` : ''}
            ${date ? `<p><strong>Date:</strong> ${date}</p>` : ''}
            <p><strong>Preferred Location(s):</strong></p>
            <ul>
                ${locations.map((loc) => `<li>${loc}</li>`).join('')}
            </ul>
            <p><a href="booking.html">Submit Another Booking</a></p>
        </div>
    </main>
    <footer>
        <p>Designed by <a href="../millernoraincorp.com/index.html">Miller Nora Incorporated</a>&copy; 2025</p>
    </footer>
`;
document.body.innerHTML = outputHTML;
}
if (formElement) {
    formElement.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const requiredFields = formElement.querySelectorAll('[required]');
        let allValid = true;
        //Makes sure each required field has a value, and if not sends a message to the user to fill it out before they can submit
        requiredFields.forEach((field) => {
            if (!field.value.trim()) {
                allValid = false;
                field.style.border = "2px solid red";
            } else {
                field.style.border = "";
            }
        });
        if (!allValid) {
            alert("Please fill in all required fields!");
            return;
        }
        
        generateOutput();
    });
}

//Provides functionality for clear button, to delete all default values in form
const clearButton = document.querySelector("#clear");
if (clearButton) {
    clearButton.addEventListener("click", function (event) {
        Array.from(document.querySelectorAll("form input, form textarea")).forEach((input) => {
            input.value = "";
        });
    });
}

//Event listener for reset button
const resetButton = document.querySelector("#reset");
if (resetButton) {
    resetButton.addEventListener("click", resetForm);
}