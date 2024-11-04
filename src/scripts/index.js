"use strict";
const personalInfo = {
    name: "ChingSan Ning",
    title: "Student in FJU MIIA",
    about: `Hi, It's CSNING, a Taiwanese university student majoring in Medical Informatics. I'm dedicating on becoming a MLE / DS on my enthusiasms.`,
    contact: [
        "(+886) 978-563-809",
        "410570554@m365.fju.edu.tw",
        "1111 S Grand Ave, LA, CA 90015",
    ],
    skills: [
        "Java | Spring Boot",
        "Python | Scikit-Learn | R",
        "OracleSQL | PostgresSQL",
        "Vue3 | TypeScript | Express.js",
        "Docker | Git",
    ],
    certifications: [
        "TOEIC 540 while Slept in Listening Section.",
        "CEFR C2 Advanced in English",
        "Average GPA 3.52",
        "Git Tutorial on W3School",
    ],
};
const education = [
    {
        degree: "Bachelor's Degree in Medical Informatics",
        institution: "FuJen Catholic University",
        location: "New Taipei City",
        duration: "2023 - Present",
        details: [
            "Relevant Coursework in Java OOP, Algorithms, Web Design, and Machine Learning.",
            "Senior Project: 'FHIR Data Exchange Service in Prescription Scenario.'",
        ],
    },
    {
        degree: "Dropping out from Bachelor's Degree in Electrical Engineering",
        institution: "National Taipei University of Technology",
        location: "Taipei",
        duration: "2016 - 2019",
        details: [
            "Common Coursework in ODE, Laplace & Fourier Transform, Vector Differential Calculus, Linear Algebra System, etc.",
            "Relevant Coursework in Electric Circuit Analysis & Design, Microelectronic Design in Analogue Circuit, and Electric Machinery.",
        ],
    },
];
const experiences = [
    {
        position: "Sales Representative for Large Displacement Motorcycle",
        location: "Taipei",
        duration: "2019 - 2023",
        achievements: [
            "Achieved a 40% increase in performance during the pandemic in 2022 compared to previous years, earning the Best Improvement Award.",
            "Proactively expanded customer base by leveraging social media platforms (FB) to develop potential clients, achieving the monthly sales target of 12 vehicles.",
            "Maintained strong long-term customer relationships and collaborated across departments to ensure stable performance.",
            "Marketing planning and performance tracking:",
        ],
        subAchievements: [
            "Managed a personal Facebook fan page, generating 20-30 meaningful interactions per month, resulting in a 20% increase in sales.",
            "Monitored market trends and social media discussions, collected public opinions, and optimized sales strategies accordingly.",
        ],
    },
];
function getElementByIdOrThrow(id) {
    const element = document.getElementById(id);
    if (!element) {
        throw new Error(`Element with ID "${id}" not found.`);
    }
    return element;
}
function populateList(elementId, items) {
    const listElement = getElementByIdOrThrow(elementId);
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listElement.appendChild(li);
    });
}
function populatePersonalInfo(info) {
    getElementByIdOrThrow("name").textContent = info.name;
    getElementByIdOrThrow("title").textContent = info.title;
    getElementByIdOrThrow("about").textContent = info.about;
    populateList("contact-list", info.contact);
    populateList("skills-list", info.skills);
    populateList("certifications-list", info.certifications);
}
function populateExperiences(experiences) {
    const experienceList = getElementByIdOrThrow("experience-list");
    experiences.forEach(exp => {
        const div = document.createElement("div");
        div.classList.add("experience-entry");
        const h3 = document.createElement("h3");
        h3.innerHTML = `<i class="fas fa-motorcycle"></i> ${exp.position}`;
        div.appendChild(h3);
        const p = document.createElement("p");
        p.innerHTML = `<strong>${exp.location}</strong>, ${exp.duration}`;
        div.appendChild(p);
        const ul = document.createElement("ul");
        exp.achievements.forEach(achievement => {
            const li = document.createElement("li");
            li.textContent = achievement;
            ul.appendChild(li);
        });
        if (exp.subAchievements) {
            exp.subAchievements.forEach(subAchievement => {
                const subLi = document.createElement("li");
                subLi.textContent = subAchievement;
                ul.appendChild(subLi);
            });
        }
        div.appendChild(ul);
        experienceList.appendChild(div);
    });
}
function populateEducation(education) {
    const educationList = getElementByIdOrThrow("education-list");
    education.forEach(edu => {
        const div = document.createElement("div");
        div.classList.add("education-entry");
        const h3 = document.createElement("h3");
        h3.textContent = edu.degree;
        div.appendChild(h3);
        const p = document.createElement("p");
        p.innerHTML = `<strong>${edu.institution}</strong>, ${edu.location}, ${edu.duration}`;
        div.appendChild(p);
        const ul = document.createElement("ul");
        edu.details.forEach(detail => {
            const li = document.createElement("li");
            li.textContent = detail;
            ul.appendChild(li);
        });
        div.appendChild(ul);
        educationList.appendChild(div);
    });
}
try {
    populatePersonalInfo(personalInfo);
    populateExperiences(experiences);
    populateEducation(education);
}
catch (error) {
    console.error(error);
}
//# sourceMappingURL=index.js.map