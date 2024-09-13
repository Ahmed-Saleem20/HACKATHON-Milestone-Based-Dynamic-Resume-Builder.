"use strict";
// Get form element
const form = document.getElementById('resumeForm');
// Add event listener to the form
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Get form values
    const photoInput = document.getElementById('photo');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const educationInput = document.getElementById('education');
    const experienceInput = document.getElementById('experience');
    const skillsInput = document.getElementById('skills');
    // Retrieve values
    const photo = photoInput.value;
    const fullName = fullNameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const education = educationInput.value;
    const experience = experienceInput.value;
    const skills = skillsInput.value;
    // Handle photo
    const photoFile = photoInput.files ? photoInput.files[0] : null;
    const photoURL = photoFile ? URL.createObjectURL(photoFile) : '';
    // Generate resume preview
    const previewHtml = `
        <p>${photoURL ? `<img src="${photoURL}" id="resumePhoto" class="resume-photo" alt="ProfilePhoto">` : ''}</p>
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
    const previewElement = document.getElementById('resumePreview');
    if (previewElement) {
        previewElement.innerHTML = previewHtml;
        previewElement.style.display = 'block';
    }
});
