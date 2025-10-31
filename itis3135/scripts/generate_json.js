function getCourses() {
    const courses = [];
    const formData = new FormData(document.querySelector('form'));
    

    for (let i = 1; i <= courseCount; i++) {
        const dept = formData.get(`dept-${i}`);
        const number = formData.get(`number-${i}`);
        const name = formData.get(`name-${i}`);
        const reason = formData.get(`reason-${i}`);
        
        if (dept && number && name && reason) {
            courses.push({
                department: dept,
                number: number,
                name: name,
                reason: reason
            });
        }
    }
    
    return courses;
}

function generateJSON() {
    document.querySelector("h2").textContent = "Introduction JSON";
    const formData = {
        firstName: document.getElementById('firstName').value,
        preferredName: document.getElementById('preferredName').value,
        middleInitial: document.getElementById('middleName').value,
        lastName: document.getElementById('lastName').value,
        acknowledgementStatement: document.getElementById('acknowledgementStatement').value,
        acknowledgementDate: document.getElementById('acknowledgementDate').value,
        divider: document.getElementById('divider').value,
        mascotAdjective: document.getElementById('mascotAdjective').value,
        mascotAnimal: document.getElementById('mascotAnimal').value,
        image: document.getElementById('currentImageURL').value,
        imageCaption: document.getElementById('imageCaption').value,
        personalStatement: document.getElementById('personalStatement').value,
        personalBackground: document.getElementById('personalBackground').value,
        professionalBackground: document.getElementById('professionalBackground').value,
        academicBackground: document.getElementById('academicBackground').value,
        primaryComputer: document.getElementById('primaryComputer').value,
        courses: getCourses(),
        quote: document.getElementById('quote').value,
        quoteAuthor: document.getElementById('quoteAuthor').value,
        funnyThing: document.getElementById('funnyThing').value,
        shareThing: document.getElementById('shareThing').value,
        links: [
            {
                name: "CLT Web",
                href: document.getElementById('cltWeb').value
            },
            {
                name: "GitHub",
                href: document.getElementById('github').value
            },
            {
                name: "GitHub.io",
                href: document.getElementById('githubIo').value
            },
            {
                name: "freeCodeCamp",
                href: document.getElementById('freeCodeCamp').value
            },
            {
                name: "Codecademy",
                href: document.getElementById('codecademy').value
            },
            {
                name: "LinkedIn",
                href: document.getElementById('linkedIn').value
            }
        ]
    };
    
    const jsonOutput = JSON.stringify(formData, null, 2);

    console.log('Generated JSON:');
    console.log(jsonOutput);
    
    let preElement = document.getElementById('jsonOutput');
    if (!preElement) {
        preElement = document.createElement('pre');
        preElement.id = 'jsonOutput';
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
        } else {
            document.body.appendChild(preElement);
        }
    }
    preElement.textContent = jsonOutput;
    preElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    return formData;
}
document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateJson');
    if (generateBtn) {
        generateBtn.addEventListener('click', generateJSON);
    }
});