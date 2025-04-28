let currentStep = 0;
const milestones = document.querySelectorAll(".time-milestone");
const progress = document.querySelector(".time-progress");
const box = document.querySelector(".time-box");
const nextBtn = document.getElementById("time-next");
const prevBtn = document.getElementById("time-prev");

const steps = [
    { text: "High School Diploma", img: "./img/logo-sesi.png", imgWidth: "80px" },
    { text: "Technical Course in Administration", img: "./img/logo-etec.png", imgWidth: "60px" },
    { text: "Technical Course in Systems Development", img: "./img/logo-senai.png", imgWidth: "100px" },
    { text: "College - TBD", img: "./img/logo-college.png", imgWidth: "50px" }
];

function updateTimeline() {
    progress.style.width = `${(currentStep / (milestones.length - 1)) * 100}%`;
    milestones.forEach((milestone, index) => {
        milestone.classList.toggle("time-active", index <= currentStep);
    });
    box.innerHTML = `
        <p>${steps[currentStep].text}</p>
        <img src="${steps[currentStep].img}" alt="Step Image" style="width: ${steps[currentStep].imgWidth};">
    `;
    if (window.innerWidth > 600) {
        box.style.left = `${(currentStep / (milestones.length - 1)) * 100}%`;
        box.style.transform = `translateX(-50%)`;
    } else {
        box.style.left = "auto";
        box.style.transform = "none";
    }
    prevBtn.disabled = currentStep === 0;
    nextBtn.disabled = currentStep === milestones.length - 1;
}

nextBtn.addEventListener("click", () => {
    if (currentStep < milestones.length - 1) {
        currentStep++;
        updateTimeline();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        updateTimeline();
    }
});

updateTimeline();

function sendEmail(event) {
    event.preventDefault();
    const email = document.getElementById('emailInput').value;
    const subject = encodeURIComponent('Contact from Portfolio');
    const body = encodeURIComponent(`Hello Giulia,\n\nI'd like to get in touch with you!\n\nMy email: ${email}`);
    
    window.location.href = `mailto:g.schiavetto18@gmail.com?subject=${subject}&body=${body}`;
}