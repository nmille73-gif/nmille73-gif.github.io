const formElement = document.querySelector("form");
let courseCount = 0;

function addCourse() {
  courseCount++;
  const coursesList = document.getElementById('courseList');
  const li = document.createElement('li');
  li.className = 'course-item';
  li.id = `course-${courseCount}`;
  
  li.innerHTML = `
    <div class="course-inputs">
      <label>Department:</label>
      <input type="text" name="dept-${courseCount}" placeholder="4-digit department code" value="ITIS" required>
      
      <label>Course Number:</label>
      <input type="text" name="number-${courseCount}" placeholder="4-digit course number" value="3135" required>
      
      <label>Course Name:</label>
      <input type="text" name="name-${courseCount}" placeholder="Course name" value="Front End Web Application Development" required>
      
      <label>Reason for Taking:</label>
      <input name="reason-${courseCount}" type="text" placeholder="Why are you taking this course?" value="It's required first and foremost, but I am also interested in learning more about front-end development." style="width: 400px; height: 20px;" required>
      
      <button type="button" class="remove-btn" onclick="removeCourse(${courseCount})">Delete Course</button>
    </div>
  `;
  
  coursesList.appendChild(li);
}

function removeCourse(id) {
  const course = document.getElementById(`course-${id}`);
  if (course) {
    course.remove();
  }
}

function loadImage() {
    const imageInput = document.getElementById('introImage');
    if (imageInput.files && imageInput.files[0]) {
      const image = imageInput.files[0];
      const imageURL = URL.createObjectURL(image);
      document.getElementById('loadImage').innerHTML = `<img src="${imageURL}" style="max-width: 300px; margin-top: 10px;">`;
    }
  }

  function resetForm() {
    location.reload(); 
  }

  function generateOutputPage() {
    const formData = new FormData(formElement);
    const data = {
        firstName: formData.get('firstName'),
        middleName: formData.get('middleName'),
        lastName: formData.get('lastName'),
        preferredName: formData.get('preferredName'),
        acknowledgementStatement: formData.get('acknowledgementStatement'),
        acknowledgementDate: formData.get('acknowledgementDate'),
        mascotAdjective: formData.get('mascotAdjective'),
        mascotAnimal: formData.get('mascotAnimal'),
        divider: formData.get('divider'),
        imageCaption: formData.get('imageCaption'),
        personalStatement: formData.get('personalStatement'),
        personalBackground: formData.get('personalBackground'),
        professionalBackground: formData.get('professionalBackground'),
        academicBackground: formData.get('academicBackground'),
        primaryComputer: formData.get('primaryComputer'),
        quote: formData.get('quote'),
        quoteAuthor: formData.get('quoteAuthor'),
        funnyThing: formData.get('funnyThing'),
        shareThing: formData.get('shareThing'),
        cltWeb: formData.get('cltWeb'),
        github: formData.get('github'),
        githubIo: formData.get('githubIo'),
        freeCodeCamp: formData.get('freeCodeCamp'),
        codecademy: formData.get('codecademy'),
        linkedIn: formData.get('linkedIn')
      };
      
      const courses = [];
      for (let i = 1; i <= courseCount; i++) {
        const dept = formData.get(`dept-${i}`);
        const number = formData.get(`number-${i}`);
        const name = formData.get(`name-${i}`);
        const reason = formData.get(`reason-${i}`);
        
        if (dept && number && name && reason) {
          courses.push({ dept, number, name, reason });
        }
      }
      let coursesHTML = '';
      if (courses.length > 0) {
        coursesHTML = '<ul>';
        courses.forEach((course) => {
          coursesHTML += `
            <li>
              <strong>${course.dept} ${course.number} - ${course.name}</strong>: ${course.reason}
            </li>
          `;
        });
        coursesHTML += '</ul>';
      } else {
        coursesHTML = 'No courses listed.';
      }
      
      const imageElement = document.querySelector('#loadImage img');
  const imageSrc = imageElement ? imageElement.src : '';
  let outputHTML = `
    <div class="output-container">
      <h2>${data.firstName} ${data.middleName ? data.middleName + ' ' : ''}${data.lastName}</h2>
      ${data.preferredName ? `<p><em>Preferred Name: ${data.preferredName}</em></p>` : ''}
      
      <h3>Mascot: ${data.mascotAdjective} ${data.mascotAnimal} ${data.divider}</h3>
      
      ${imageSrc ? `<img src="${imageSrc}" alt="Profile" style="max-width: 400px; margin: 20px 0;"><br><em>${data.imageCaption}</em>` : ''}
      
      <p>${data.personalStatement}</p>
      
      <ul>
        <li><strong>Personal:</strong> ${data.personalBackground}</li>
        <li><strong>Professional:</strong> ${data.professionalBackground}</li>
        <li><strong>Academic:</strong> ${data.academicBackground}</li>
        <li><strong>Primary Computer:</strong> ${data.primaryComputer}</li>
        <li><strong>Courses I'm Taking and Why</strong>
          ${coursesHTML}
        </li>
      
  `;
  
  
  outputHTML += `
      <p style="text-align: center">"${data.quote}"<br> 
      <i>${data.quoteAuthor}</i></p>
      
     ${data.funnyThing ? `<li><b>Funny/Interesting Item to Remember Me By: </b>${data.funnyThing}` : ''}</li>
      ${data.shareThing ? `<li><b>Something to Share: </b>${data.shareThing}` : ''}</li>
      </ul>
      
        <a href="${data.cltWeb}" target="_blank">CLT Web</a> ${data.divider}
        <a href="${data.github}" target="_blank">GitHub</a> ${data.divider}
        <a href="${data.githubIo}" target="_blank">GitHub.io</a> ${data.divider}
        <a href="${data.freeCodeCamp}" target="_blank">freeCodeCamp</a> ${data.divider}
        <a href="${data.codecademy}" target="_blank">Codecademy</a> ${data.divider}
        <a href="${data.linkedIn}" target="_blank">LinkedIn</a> ${data.divider}
    
      <hr>
        <p><small>${data.acknowledgementStatement}</small></p>
      <p><small>Date: <i>${data.acknowledgementDate}</i></small></p>
      
      <button type="button" onclick="resetForm()" style="margin-top: 20px; padding: 10px 20px; font-size: 1em;">Reset Form</button>
    </div>
  `;
  const main = document.querySelector('main');
  main.innerHTML = outputHTML;
}
document
  .querySelector("#clear")
  .addEventListener("click", function (event) {
    Array.from(document.querySelectorAll("form input")).forEach((input) => {
      input.value = "";
    });
  });

formElement.addEventListener("submit", function(e) {
  e.preventDefault();
  const requiredFields = formElement.querySelectorAll('[required]');
  let allValid = true;
  
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
  generateOutputPage();
});