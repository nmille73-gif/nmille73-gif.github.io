// Function to generate HTML output independently
function generateHTML() {
    document.querySelector("h2").textContent = "Introduction HTML";
    const formData = new FormData(document.querySelector('form'));
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
      <h2>${data.firstName} ${data.middleName ? data.middleName + '. ' : ''}${data.lastName} ${data.divider} ${data.mascotAdjective} ${data.mascotAnimal}</h2>
      ${data.preferredName ? `<p><em>Preferred Name: ${data.preferredName}</em></p>` : ''}
      
      ${imageSrc ? `<img src="${imageSrc}" alt="Profile" ><br><em>${data.imageCaption}</em>` : ''}
      
      <p style="text-align: left">${data.personalStatement}</p>
      
      <ul style="text-align: left">
        <li><strong>Personal:</strong> ${data.personalBackground}</li>
        <li><strong>Professional:</strong> ${data.professionalBackground}</li>
        <li><strong>Academic:</strong> ${data.academicBackground}</li>
        <li><strong>Primary Computer:</strong> ${data.primaryComputer}</li>
        <li><strong>Courses I'm Taking and Why</strong>
          ${coursesHTML}
        </li>
      
      <p style="text-align: center">"${data.quote}"<br> 
      <i>${data.quoteAuthor}</i></p>
      
     ${data.funnyThing ? `<li><b>Funny/Interesting Item to Remember Me By: </b>${data.funnyThing}</li>` : ''}
      ${data.shareThing ? `<li><b>Something to Share: </b>${data.shareThing}</li>` : ''}
      </ul>
      
        <a href="${data.cltWeb}" target="_blank">CLT Web</a> ${data.divider}
        <a href="${data.github}" target="_blank">GitHub</a> ${data.divider}
        <a href="${data.githubIo}" target="_blank">GitHub.io</a> ${data.divider}
        <a href="${data.freeCodeCamp}" target="_blank">freeCodeCamp</a> ${data.divider}
        <a href="${data.codecademy}" target="_blank">Codecademy</a> ${data.divider}
        <a href="${data.linkedIn}" target="_blank">LinkedIn</a>
    
      <hr>
        <p><small>${data.acknowledgementStatement}</small></p>
      <p><small>Date: <i>${data.acknowledgementDate}</i></small></p>
    </div>
  `;

    let preElement = document.getElementById('htmlOutput');
    if (!preElement) {
        preElement = document.createElement('pre');
        preElement.id = 'htmlOutput';
        preElement.style.backgroundColor = '#f4f4f4';
        preElement.style.border = '1px solid #ccc';
        preElement.style.padding = '15px';
        preElement.style.marginTop = '20px';
        preElement.style.overflow = 'auto';
        preElement.style.maxHeight = '500px';
        preElement.style.whiteSpace = 'pre-wrap';
        preElement.style.wordWrap = 'break-word';
        preElement.style.textAlign = 'left';
        
        const main = document.querySelector('main');
        if (main) {
            main.appendChild(preElement);
        }
    }
    
    preElement.textContent = outputHTML;

    preElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    

    console.log('Generated HTML:');
    console.log(outputHTML);
}

document.addEventListener('DOMContentLoaded', function() {
    const generateHtmlBtn = document.getElementById('generateHtml');
    if (generateHtmlBtn) {
        generateHtmlBtn.addEventListener('click', generateHTML);
    }
});