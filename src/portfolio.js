// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: " Bharath Gajula",
    message: "I'm a computer science student and an aspiring software engineer. Currently working as a Data analyst at my university analyzing data to aid students, educators, and staff.",
    basedLocation: "Boston, MA",
    resumeLink: "https://drive.google.com/file/d/18hw1v9kJbLa9jWNHmboOdybuH4TEyqhp/view?usp=sharing", 
    logo: {
        link: "images/Initials.jpg", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/Potrait.jpeg'
}

const socialMediaLinks = {
    github: "https://github.com/bharath21gaju",
    linkedin: "https://www.linkedin.com/in/bharathgajula",
    stackoverflow: ""} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Bharath Gajula and I'm a Data science student at Northeasterb University. I have a passion for coding in languages such as Python, Java. Work in Full Stack development and have experience with Pytorch and Tensorflow frameworks.",
        "Responsible, organized, problem solver, and independent thinker. Work well in a team and a quick learner. Programming for 2+ years and have 4 years of experience in advanced mathematics such as calculus, statistics, and discrete mathematics. "
    ], // Separated items are paragraphs
    techStack: [
        "Java",
        "JS",
        "Machine Learning",
        "MySQL",
        "Tensorflow",
        "Python",
    ],
    photo1Link: "images/portfolio2.jpeg",
    photo2Link: "images/portfolio4.jpeg",
    photo3Link: "images/Portofolio3.jpeg"
}


// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Full Stack Developer",
        company: {
            name: "Oracle",
            link: "https://www.oracle.com/",
        },
        duration: "Aug 2022 - Aug 2023",

        bulletPoints: [
            "Collaborated with bank clients to enhance digital front-end experiences using OJET, resulting in a 15% increase in user engagement and a 10% improvement in overall customer satisfaction.",
            " Implemented back-end java and oracle sql enhancements for banking systems, optimizing transaction processing speed by 20%, thereby improving the efficiency of internal operations.",
            "Provided on-site support to bank clients, offering immediate assistance and resolving errors efficiently. Maintained Jira ticket system to track and prioritize issue resolution, resulting in a 20% reduction in error resolution time.",
            "Developed Java classes from scratch, including ORMs, DTOs, adapters, and assemblers. Utilized Oracle SQL to design and execute queries, achieving a 25% improvement in CRUD operations efficiency and data storage."
           
        ],
        hashtags: [
            "Java",
            "Oracle Weblogic",
            "Oracle Database 11g",
            "MySQL",
            "SVN",
            "Knockoutjs",
            "JIRA",
            "Jenkins",
            "HTML"
        ]
    },
    {
        position: "AI Intern",
        company: {
            name: "Upskillz- IIT Kharagpur",
            link: ""
        },
        duration: "May 2022 - Aug 2022",
        bulletPoints: [
            "Specialized in YOLO and LSTM models, boosting pixel classification accuracy by 10% through advanced Python OpenCV techniques, while reducing false positives by 15%.",
            "Led a successful social media campaign, increasing data collection participants by 30% and improving dataset quality for enhanced model training."
        ],
        hashtags: [
            "TensorFlow,",
            "Python",
            "Vs Code",
            "Git Version",
            "OpenCV",
            "Pandas"
        ]
    },
    {
        position: "Research Assistant,",
        company: {
            name: "Deep Learning Research lab-BMSCE",
            link: "https://bmsce.ac.in/home/Machine-Learning-AI-and-ML-About"
        },
        duration: "Jan 2022 - May 2022",
        bulletPoints: [
            "Enhanced dataset accuracy by 10% through advanced data processing techniques and feature extraction algorithms, specifically designed for dark background and low-quality field images such as l-means clustering and sobel-edge.",
            "Assisted in data collection and cleaning, ensuring high-quality datasets for data-driven research and analysis.",
            "Implemented CNN and Transfer Learning models, leading to a 15% increase in model performance and effective resolution of data-related challenges.",
            "Trained machine learning models, actively engaging in the experimentation process to optimize training times by 20%.",
            "Created pipelines for CNN and focused on parameter optimization to fine-tune model performance"
        ],
        hashtags: [
            "TensorFlow,",
            "Python",
            "Vs Code",
            "Git Version",
            "OpenCV",
            "Pandas"
        ]
    },
    {
        position: "Machine Learning Intern",
        company: {
            name: "Nokia Networks",
            link: "https://www.nokia.com/about-us/careers/student-and-graduate-opportunities/"
        },
        duration: "Jan 2021 - Aug 2021",
        bulletPoints: [
            "Established scalable pipeline automated processes to develop, validate, and implement machine learning models such as Xgboost, logistic regression, and Decision trees, resulting in improved efficiency and classification accuracy.",
             "Applied preprocessing techniques to increase tenure prediction accuracy to 96% which lead to substantial cost savings and differentiation in customer offerings by providing incentives to increase brand loyalty."
        ],
        hashtags: [
            "TensorFlow,",
            "Python",
            "Panda",
            "Supervised Machine Learning",
            "Data Visualization",
            "Git Version",
            "Azure machine learning studio",
            "Jupyter Notebook,",
            "Keras,"
        ]
    }  
]

// --- 💻 Work Section ---
const works = [
    //{
    //     projectName: "TrackYourSubs IOS App",
    //     yearCompleted: "2022",
    //     description: "An IOS app to track you subscriptions and expenses, all the while presenting in a clean and professional look with a load of features. Some of the more evident features are: Budgeting (monthly / yearly option available), Current monthly & yearly total expense at a glance, Custom suggestions to meet budget, Organize (Categorization & Importance) and filter through subscriptions, Reminders via scheduled notifications, Stats page: pie chart visual, bar chart visual, and streak indicator.",
    //     techStack: "Swift, SwiftUI",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://github.com/bharath21gaju/"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: ""
    //         }
    //     ],
    //     imageLink: "images/tracksubs_pic.png",
    //     alignLeft: false
    // },
    {
        projectName: "Taxi Database Management System",
        yearCompleted: "2023",
        description: "Designed and implemented a SQL-Database Management system to enhance cab booking and ride management. Implemented triggers and stored procedures, reducing update times by 15% and optimizing overall performance. Developed a Python system for ride booking, achieving a 30% improvement in booking efficiency through optimized database CRUD operations.",
        techStack: "Oracle SQL, Python, HTML, CSS, JS, Flask",
        links: [
            {
                label: "",
                type: "external",
                url: "https://github.com/bharath21gaju/"
            }
        ],
        imageLink: "images/taxi_booking.jpeg",
        alignLeft: true
    },
    {
        projectName: "Real Time ASL Translation",
        yearCompleted: "2022",
        description: "Conducted thorough analysis on preprocessing and feature extraction for diverse image backgrounds. Trained datasets on VGG 16, ResNet, YOLO, and CNN for real-time gesture recognition. Reduced model parameters and training time by 20%, optimizing operational real time classification by 10%.",
        techStack: " Python, GIT",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/bharath21gaju/"
            }
            
        ],
        imageLink: "images/asl_image.jpg",
        alignLeft: false
    },
    {
        projectName: "COVID and Lung Diseases Detection",
        yearCompleted: "2021",
        description: "Engineered an end-to-end CNN model for COVID-19 detection, achieving an classification accuracy of 92.5%. Designed a six-layer CNN architecture with additional CNN layers, which had performance boost with a 15% increase in accuracy for COVID-19 cases. Leveraged data augmentation techniques, resulting in a 20% improvement in CNN model efficiency, generating additional data for more accurate image classification.",
        techStack: "Python, Pandas, OpenCV, Jupyter Notebook",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/bharath21gaju/"
            }
        ],
        imageLink: "images/COVID.jpg",
        alignLeft: true
    }
]

const archiveLink = "https://github.com/bharath21gaju/"

// --- 📭 Contact Section ---
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently seeking full stack,Data Scientist,Artifical Intelligence software development positions/internships in the RTP area for summer 2024.",
            "Also looking to build a team for projects & startup ideas or just make professional connections."
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "sai21gajula@gmail.com", // email takes precedance
            other: "https://forms.gle/AnwMaMKsKT8bKzRv8"
        },
        responseTimeMessage: "...and I'll resopnd within the next 24hrs"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}