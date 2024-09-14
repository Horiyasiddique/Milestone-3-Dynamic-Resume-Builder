var form = document.querySelector("#resume-form");
var resumeDisplayElement = document.querySelector("#resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var phone = document.querySelector("#phone").value;
    var education = document.querySelector("#education")
        .value;
    var expeience = document.querySelector("#experience")
        .value;
    var skills = document.querySelector("#skills").value;
    var resumeHTML = "\n  <h2><b>Resume</b></h2>\n  <h3>Peronal Information</h3>\n  <p><b>Name : <b/> ".concat(name, " </p>\n  <p><b>Email : <b/> ").concat(email, " </p>\n  <p><b>Phone : <b/> ").concat(phone, " </p>\n\n  <h3>Education</h3>\n  <p> ").concat(education, " </p>\n\n  <h3>Experience</h3>\n  <p>").concat(expeience, " </p>\n\n  <h3>Skills</h3>\n  <p>").concat(skills, " </p>\n  ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("the resume display elemt is missing");
    }
});
