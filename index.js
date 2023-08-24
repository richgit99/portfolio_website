const cards = document.querySelectorAll('.card');
const toggle_button = document.getElementById("toggle_button");
const nav_items = document.getElementById("nav_items");
const language = document.querySelectorAll('.language');
const image_slider = document.getElementById("image_slider");
const standard = document.querySelectorAll('.standard');
const sliding_animation = document.querySelectorAll('.sliding_animation');
const details = document.querySelectorAll('.details');
const other_software_skills = document.querySelectorAll(".other_software_skills");
const scroll_top_button = document.getElementById("scroll_top_button");

const projects = document.getElementById("projects");
const programming_languages = document.getElementById("programming_languages");
const education = document.getElementById("education");
const about_me = document.getElementById("about_me");
const contact_me = document.getElementById("contact_me");

const projects_button = document.getElementById("projects_button");
const programming_button = document.getElementById("programming_button");
const education_button = document.getElementById("education_button");
const about_me_button = document.getElementById("about_me_button");
const contact_me_button = document.getElementById("contact_me_button");

const all_nav_buttons = [projects_button, programming_button, education_button,
    about_me_button, contact_me_button];

projects_button.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, projects.offsetTop);
});

education_button.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, education.offsetTop);
});

about_me_button.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, about_me.offsetTop);
});

contact_me_button.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, contact_me.offsetTop);
});

programming_button.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, programming_languages.offsetTop);
});

let counter = 0;
const images = [
    'car_pic.jpeg',
    'beach_pic.jpeg',
    'old_goa_pic.jpeg',
    'swimming_pic.jpeg',
    'fort.jpeg'
];

function change_image() {
    image_slider.style.backgroundImage = `url(${images[counter]})`;
    counter = (counter + 1) % images.length;
}

change_image();

setInterval(change_image, 4000);

const observer2 = new IntersectionObserver(all_languages => {
    all_languages.forEach(each_language => {
        each_language.target.classList.toggle("add_progress_animation", each_language.isIntersecting)
        if (each_language.isIntersecting) observer2.unobserve(each_language.target);
    }), {
        threshold: 1,
    }
});

language.forEach(lang => {
    observer2.observe(lang);
});


toggle_button.onclick = function () {
    nav_items.classList.toggle('active');

}


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        // if(entry.isIntersecting) observer.unobserve(entry.target);
    }), {
        threshold: 0.5,
    }
});


cards.forEach(card => {
    observer.observe(card);
});


// Card Intersection Observer   
const observer3 = new IntersectionObserver(all_standards => {
    all_standards.forEach(each_standard => {
        each_standard.target.classList.toggle("fade_down_animation", each_standard.isIntersecting)
        // if(each_language.isIntersecting) observer2.unobserve(each_language.target);
    }), {
        threshold: 1,
    }
});

standard.forEach(per_standard => {
    observer3.observe(per_standard);
});
// Aboout me animation  

const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        // if(entry.isIntersecting) observer.unobserve(entry.target);
    }), {
        threshold: 0.6,
    }
});


sliding_animation.forEach(section => {
    observer4.observe(section);
});


// Contact me animation  

const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        // if(entry.isIntersecting) observer.unobserve(entry.target);
    }), {
        threshold: 0.8,
    }
});


details.forEach(each_detail => {
    observer5.observe(each_detail);
});

// Circular animation 
const observer6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        // if(entry.isIntersecting) observer.unobserve(entry.target);
    }), {
        threshold: 0.5,

    }
});


other_software_skills.forEach(section => {
    observer6.observe(section);
});

// form validation

const submit_button = document.getElementById('submit_button');

document.addEventListener('DOMContentLoaded', function () {

    let counter = 0;

    const form = document.querySelector('.contact_me_table');
    const user_name_input = document.getElementById("user_name");
    const user_email_input = document.getElementById("user_email");
    const email_subject_input = document.getElementById('email_subject');
    const email_message_input = document.getElementById('email_message');

    const all_inputs = [user_name_input, user_email_input, email_message_input, email_subject_input];

    submit_button.addEventListener('click', function (event) {
        const nameRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let isFullNameValid = false;
        let isEmailValid = false;
        let isSubjectValid = false;
        let isMessageValid = false;

        if (!nameRegex.test(user_name_input.value)) {
            user_name_input.setCustomValidity('Please enter a valid name');
            user_name_input.style.border = '2px solid red';
            event.preventDefault(); 
        }
        else {
            isFullNameValid = true;
            user_name_input.setCustomValidity('');
            user_name_input.style.border = ''; 
        }

        if (!emailRegex.test(user_email_input.value)) {
            user_email_input.setCustomValidity('Please enter a valid email address');
            user_email_input.style.border = '2px solid red';
            event.preventDefault(); 
        } else {
            isEmailValid = true;
            user_email_input.setCustomValidity('');
            user_email_input.style.border = ''; 
        }

        if (email_subject_input.value.trim() === '') {
            email_subject_input.setCustomValidity('Please enter a subject');
            email_subject_input.style.border = '2px solid red';
            event.preventDefault(); 
        } else {
            isSubjectValid = true;
            email_subject_input.setCustomValidity('');
            email_subject_input.style.border = ''; 
        }

        if (email_message_input.value.trim() === '') {
            email_message_input.setCustomValidity('Please enter a message');
            email_message_input.style.border = '2px solid red';
            event.preventDefault(); 
        } else {
            isMessageValid = true;
            event.preventDefault();
            email_message_input.setCustomValidity('');
            email_message_input.style.border = ''; 
        }

        // console.log(counter);
        if (isFullNameValid == true && isEmailValid == true && isSubjectValid == true && isMessageValid == true) {

            setTimeout(() => {

                submit_button.innerText = "Message Sent"; submit_button.style.padding = '0.3em';
                submit_button.style.width = '200px'; submit_button.style.minWidth = '160px';
            }, 1500);
            
        }
    });
});

scroll_top_button.onclick = function () {
    // scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: "smooth" });
}


window.addEventListener('scroll', () => {

    if (window.pageYOffset > 700) {
        scroll_top_button.style.display = 'block';
    }

    else {
        scroll_top_button.style.display = 'none';
    }
});

