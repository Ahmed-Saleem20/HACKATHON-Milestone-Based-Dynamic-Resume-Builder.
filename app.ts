// Get form element
const form = document.getElementById('resumeForm') as HTMLFormElement;

// Add event listener to the form
form.addEventListener('submit', function (e: Event) {
    e.preventDefault();

    // Get form values
    const photoInput = document.getElementById('photo') as HTMLInputElement;
    const fullNameInput = document.getElementById('fullName') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const educationInput = document.getElementById('education') as HTMLTextAreaElement;
    const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;

    // Retrieve values
    const photo: string = photoInput.value;
    const fullName: string = fullNameInput.value;
    const email: string = emailInput.value;
    const phone: string = phoneInput.value;
    const education: string = educationInput.value;
    const experience: string = experienceInput.value;
    const skills: string = skillsInput.value;

    // Handle photo
    const photoFile = photoInput.files ? photoInput.files[0]:null;
    const photoURL = photoFile ? URL.createObjectURL(photoFile) : '';

    // Generate resume preview
    const previewHtml: string = `
        <p>${photoURL? `<img src="${photoURL}" id="resumePhoto" class="resume-photo" alt="ProfilePhoto">`: ''}</p>
        <h2>${fullName}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone No:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Get preview element and update content
    const previewElement = document.getElementById('resumePreview') as HTMLDivElement;
    if (previewElement) {
        previewElement.innerHTML = previewHtml;
        previewElement.style.display = 'block';
    }
});
