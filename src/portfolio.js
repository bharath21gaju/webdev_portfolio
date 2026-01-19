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
    message: "Software Engineer at Cigna | MS in Computer Science from Northeastern University (Dec 2025). 2+ years experience designing scalable, cloud-native microservices and distributed systems across AI, fintech, and full-stack environments.",
    basedLocation: "Boston, MA",
    resumeLink: "https://acrobat.adobe.com/id/urn:aaid:sc:va6c2:a90ae4fd-6fb5-4fb2-9a8b-a86c6d733bda",
    logo: {
        link: "images/Initials.jpg", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/Potrait.jpeg'
}

const socialMediaLinks = {
    github: "https://github.com/sai21gajula",
    linkedin: "https://www.linkedin.com/in/bharathgajula",
    stackoverflow: ""
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Bharath Gajula and I'm a Software Engineer at Cigna with a Master's degree in Computer Science from Northeastern University (Dec 2025). I have 2+ years of hands-on experience designing scalable, cloud-native microservices and distributed systems across AI, fintech, and full-stack environments.",
        "Skilled in Java, Python, Go, AWS, Kubernetes, and event-driven architectures using Kafka/RabbitMQ. Proven ability to build high-availability backend services, optimize system performance, and deliver end-to-end features. Passionate about solving ambiguous problems and writing clean, maintainable code."
    ], // Separated items are paragraphs
    techStack: [
        "Java",
        "Python",
        "Go",
        "React",
        "AWS",
        "Kubernetes",
    ],
    photo1Link: "images/portfolio2.jpeg",
    photo2Link: "images/portfolio4.jpeg",
    photo3Link: "images/Portofolio3.jpeg"
}


// --- 💼 Skills Section ---
const Skills = [
    {
        title: "Programming Languages",
        items: [
            { name: "Java", icon: "devicon-java-plain" },
            { name: "Python", icon: "devicon-python-plain" },
            { name: "JavaScript", icon: "devicon-javascript-plain" },
            { name: "TypeScript", icon: "devicon-typescript-plain" },
            { name: "SQL", icon: "devicon-mysql-plain" },
            { name: "Go", icon: "devicon-go-original-wordmark" }
        ]
    },
    {
        title: "Frontend",
        items: [
            { name: "React.js", icon: "devicon-react-original" },
            { name: "Angular", icon: "devicon-angularjs-plain" },
            { name: "Next.js", icon: "devicon-nextjs-plain" },
            { name: "Oracle JET", icon: "devicon-oracle-original" },
            { name: "HTML5", icon: "devicon-html5-plain" },
            { name: "CSS3", icon: "devicon-css3-plain" },
            { name: "D3.js", icon: "devicon-d3js-plain" }
        ]
    },
    {
        title: "Backend & APIs",
        items: [
            { name: "FastAPI", icon: "devicon-fastapi-plain" },
            { name: "Node.js", icon: "devicon-nodejs-plain" },
            { name: "Express.js", icon: "devicon-express-original" },
            { name: "Spring Boot", icon: "devicon-spring-plain" },
            { name: "Django", icon: "devicon-django-plain" },
            { name: "RESTful APIs", icon: "devicon-nodejs-plain" },
            { name: "GraphQL", icon: "devicon-graphql-plain" },
            { name: "gRPC", icon: "devicon-go-original-wordmark" },
            { name: "Kafka", icon: "devicon-apachekafka-original" },
            { name: "RabbitMQ", icon: "devicon-rabbitmq-original" }
        ]
    },
    {
        title: "Databases & Storage",
        items: [
            { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
            { name: "MySQL", icon: "devicon-mysql-plain" },
            { name: "MongoDB", icon: "devicon-mongodb-plain" },
            { name: "Redis", icon: "devicon-redis-plain" },
            { name: "Amazon RDS", icon: "devicon-amazonwebservices-plain-wordmark" },
            { name: "BigQuery", icon: "devicon-googlecloud-plain" },
            { name: "Neo4j", icon: "devicon-neo4j-plain" },
            { name: "Pinecone", icon: "devicon-python-plain" }
        ]
    },
    {
        title: "Cloud Platforms",
        items: [
            { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
            { name: "Azure", icon: "devicon-azure-plain" },
            { name: "GCP", icon: "devicon-googlecloud-plain" },
            { name: "Firebase", icon: "devicon-firebase-plain" }
        ]
    },
    {
        title: "DevOps & Monitoring",
        items: [
            { name: "Docker", icon: "devicon-docker-plain" },
            { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
            { name: "Jenkins", icon: "devicon-jenkins-plain" },
            { name: "Terraform", icon: "devicon-terraform-plain" },
            { name: "GitHub Actions", icon: "devicon-github-original" },
            { name: "Prometheus", icon: "devicon-prometheus-original" },
            { name: "Grafana", icon: "devicon-grafana-original" },
            { name: "JIRA", icon: "devicon-jira-plain" },
            { name: "JUnit", icon: "devicon-java-plain" },
            { name: "pytest", icon: "devicon-pytest-plain" }
        ]
    },
    {
        title: "ML & GenAI",
        items: [
            { name: "PyTorch", icon: "devicon-pytorch-original" },
            { name: "TensorFlow", icon: "devicon-tensorflow-original" },
            { name: "Transformers", icon: "devicon-python-plain" },
            { name: "LLM Fine-tuning", icon: "devicon-python-plain" },
            { name: "RAG", icon: "devicon-python-plain" },
            { name: "LangGraph", icon: "devicon-python-plain" },
            { name: "Knowledge Graph", icon: "devicon-neo4j-plain" }
        ]
    }
]

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Software Engineer",
        company: {
            name: "Cigna Healthcare",
            link: "https://www.cigna.com/",
        },
        duration: "Jan 2026 - Present",
        bulletPoints: [
            "Developing and maintaining enterprise-scale healthcare applications using Java, Spring Boot, and microservices architecture.",
            "Building scalable APIs and backend services to support healthcare data processing and patient management systems.",
            "Collaborating with cross-functional teams to deliver high-quality software solutions in an Agile environment."
        ],
        hashtags: [
            "Java",
            "Spring Boot",
            "Microservices",
            "AWS",
            "Healthcare",
            "REST APIs"
        ]
    },
    {
        position: "Software Engineer Intern",
        company: {
            name: "Sprouts AI",
            link: "https://www.sprouts.ai/",
        },
        duration: "Jun 2025 - Aug 2025",
        bulletPoints: [
            "Engineered end-to-end full-stack applications using React, FastAPI, and MongoDB, integrating responsive frontends with robust backend APIs to streamline user interactions and reduce latency by 30%.",
            "Constructed dynamic knowledge graphs leveraging Neo4j, enabling precise semantic relationships and enhancing context-driven query generation by 25% for complex data retrieval tasks and MCP.",
            "Deployed scalable microservices on Kubernetes (EKS), orchestrating Docker-based CI/CD pipelines with GitHub Actions to ensure consistent deployments and achieve 99.9% service uptime."
        ],
        hashtags: [
            "React",
            "FastAPI",
            "MongoDB",
            "Neo4j",
            "Kubernetes",
            "Docker",
            "GitHub Actions",
            "AWS EKS"
        ]
    },
    {
        position: "AI Software Engineer Co-op",
        company: {
            name: "Bridge Informatics",
            link: "https://www.bridgeinformatics.com/",
        },
        duration: "Jul 2024 - Dec 2024",
        bulletPoints: [
            "Developed scalable genomic visualization tools using React, D3.js, Web Workers, and Django, enabling interactive rendering for datasets exceeding 1 million data points and reducing client-side rendering latency by 40%.",
            "Built asynchronous backend pipelines using AWS Lambda, Node.js, and DynamoDB Streams to securely process genomic data, achieving sub-100ms latency under high data throughput.",
            "Implemented CI/CD pipelines on AWS, with container orchestration using Docker and Terraform, reducing release cycles by 35%."
        ],
        hashtags: [
            "React",
            "D3.js",
            "Django",
            "AWS Lambda",
            "Node.js",
            "DynamoDB",
            "Docker",
            "Terraform"
        ]
    },
    {
        position: "Research Assistant",
        company: {
            name: "Northeastern University",
            link: "https://www.northeastern.edu/",
        },
        duration: "May 2024 - Sep 2024",
        bulletPoints: [
            "Designed scalable data ingestion workflows to collect and process model evaluation data across multi-GPU training pipelines.",
            "Developed scalable multi-GPU training for LLM fine-tuning, achieving 36% faster convergence and 20% lower inference latency.",
            "Designed multi-agent evaluation frameworks using LangGraph & LangFuse for tool use, latency measurement, and retrieval benchmarking, increasing task accuracy by 31%.",
            "Built monitoring utilities analyzing token overhead, model throughput, and cost optimizations that reduced token usage by 25%."
        ],
        hashtags: [
            "PyTorch",
            "LangGraph",
            "LangFuse",
            "Multi-GPU",
            "LLM Fine-tuning",
            "Python",
            "RAG"
        ]
    },
    {
        position: "Software Engineer",
        company: {
            name: "Oracle",
            link: "https://www.oracle.com/",
        },
        duration: "Aug 2022 - Aug 2023",
        bulletPoints: [
            "Architected and maintained over 20 RESTful APIs using Java, Spring Boot, and Kafka to support critical loan management and corporate payment workflows, ensuring 99.99% uptime across 1M+ transactions per day.",
            "Designed scalable microservices with Spring MVC, JPA ORM, and custom SQL adapters, enabling batch ingestion and real-time processing of financial datasets, boosting system scalability by 30%.",
            "Built dynamic, form-driven frontend components using Oracle JET, Knockout.js, and XML, supporting bulk upload dashboards and consistent UX across mobile and web platforms.",
            "Automated deployment workflows with Jenkins, Gradle, and Subversion, container builds on OCI reduced deployment time by 40%."
        ],
        hashtags: [
            "Java",
            "Spring Boot",
            "Kafka",
            "Oracle JET",
            "Knockout.js",
            "Jenkins",
            "Kubernetes",
            "REST APIs"
        ]
    },
    {
        position: "AI Intern",
        positionLink: "https://github.com/sai21gajula/Hyperspectral_Imaging_Classification",
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
            "TensorFlow",
            "Python",
            "OpenCV",
            "YOLO",
            "LSTM",
            "Pandas"
        ]
    },
    {
        position: "Machine Learning Intern",
        positionLink: "https://github.com/sai21gajula/Nokia_Networks_ChurnPrediction",
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
            "TensorFlow",
            "Python",
            "XGBoost",
            "Scikit-learn",
            "Azure ML Studio",
            "Jupyter Notebook"
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
        projectName: "Cache-Augmented LLM E-Commerce AI Platform",
        yearCompleted: "2024",
        description: "Developed high-performance backend APIs using FastAPI, Express.js, and PostgreSQL, integrating FAISS to enable semantic search and efficient retrieval from 100,000+ products, reducing latency by 40%. Built full-stack e-commerce interface with React.js, handling dynamic product listings, cart functionality, and user order processing.",
        techStack: "RAG, FastAPI, Express.js, AWS, React.js, PostgreSQL, FAISS",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/sai21gajula"
            }
        ],
        imageLink: "images/ecommerce_ai.png",
        alignLeft: true
    },
    {
        projectName: "High-Performance LLM Serving with gRPC",
        yearCompleted: "2024",
        description: "Engineered a production-grade, hybrid Large Language Model (LLM) serving architecture, featuring a Go-based gRPC server designed to handle over 5,000 RPS and a FastAPI backend for highly efficient inference. Achieved sub-200ms P99 inference response times for 1,000+ concurrent users by implementing efficient model serving pipelines and real-time gRPC streaming.",
        techStack: "LLM Serving, gRPC, Go, FastAPI, Hugging Face, Docker",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/sai21gajula"
            }
        ],
        imageLink: "images/llm_grpc.png",
        alignLeft: false
    },
    {
        projectName: "Taxi Database Management System",
        yearCompleted: "2023",
        description: "Designed and implemented a SQL-Database Management system to enhance cab booking and ride management. Implemented triggers and stored procedures, reducing update times by 15% and optimizing overall performance. Developed a Python system for ride booking, achieving a 30% improvement in booking efficiency.",
        techStack: "Oracle SQL, Python, HTML, CSS, JS, Flask",
        links: [
            {
                label: "",
                type: "external",
                url: "https://github.com/sai21gajula/Taxi_Booking_DatabaseManagement"
            }
        ],
        imageLink: "images/taxi_booking.jpeg",
        alignLeft: true
    },
    {
        projectName: "Real Time ASL Translation",
        yearCompleted: "2022",
        description: "Conducted thorough analysis on preprocessing and feature extraction for diverse image backgrounds. Trained datasets on VGG 16, ResNet, YOLO, and CNN for real-time gesture recognition. Reduced model parameters and training time by 20%, optimizing operational real time classification by 10%.",
        techStack: "Python, TensorFlow, OpenCV",
        links: [
            {
                label: "",
                type: "git",
                url: "https://drive.google.com/file/d/1WGbgwTovJq0tDvlBIb9VqdFbmKmHsXBd/view?usp=sharing"
            }
        ],
        imageLink: "images/asl_image.jpg",
        alignLeft: false
    },
    {
        projectName: "COVID and Lung Diseases Detection",
        yearCompleted: "2021",
        description: "Engineered an end-to-end CNN model for COVID-19 detection, achieving classification accuracy of 92.5%. Designed a six-layer CNN architecture with additional layers, achieving a 15% increase in accuracy. Leveraged data augmentation techniques, resulting in a 20% improvement in model efficiency.",
        techStack: "Python, Pandas, OpenCV, TensorFlow",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/sai21gajula/COVID-and-Lung-Diseases-Detection_DeepLearning"
            }
        ],
        imageLink: "images/COVID.jpg",
        alignLeft: true
    },
    {
        projectName: "Kambaz Learning Management System",
        yearCompleted: "2025",
        description: "Full-stack Learning Management System built with Next.js and Node.js. Features course management, quiz functionality, user authentication, and interactive learning modules. Deployed on Vercel with a Node.js backend server.",
        techStack: "Next.js, TypeScript, Node.js, Express, MongoDB",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/sai21gajula/kambaz-next-js"
            },
            {
                label: "",
                type: "external",
                url: "https://kambaz-next-js-3dh4.vercel.app"
            }
        ],
        imageLink: "images/kambaz_lms.png",
        alignLeft: false
    },
    {
        projectName: "RAG Chatbot",
        yearCompleted: "2025",
        description: "Retrieval-Augmented Generation chatbot using LangChain and vector databases for context-aware conversations. Implements semantic search and document retrieval for enhanced AI responses.",
        techStack: "Python, LangChain, FastAPI, Vector DB, OpenAI",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/sai21gajula/RAGChatbot"
            }
        ],
        imageLink: "images/rag_chatbot.png",
        alignLeft: true
    },
    {
        projectName: "AI Travel Agent Planner",
        yearCompleted: "2025",
        description: "Intelligent travel planning application using CrewAI for multi-agent collaboration. Agents work together to research destinations, plan itineraries, and provide personalized travel recommendations.",
        techStack: "Python, CrewAI, LangChain, OpenAI, FastAPI",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/sai21gajula/Travel_agent_planner"
            }
        ],
        imageLink: "images/travel_planner.png",
        alignLeft: false
    },
    {
        projectName: "Flutter Gemma Summarizer",
        yearCompleted: "2025",
        description: "A Flutter mobile app powered by Gemma 3 AI for intelligent text summarization. Features on-device AI inference for privacy-preserving text processing.",
        techStack: "Flutter, Dart, Gemma AI, On-device ML",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/sai21gajula/flutter-gemma-summarize"
            }
        ],
        imageLink: "images/flutter_gemma.png",
        alignLeft: true
    }
]

const archiveLink = "https://github.com/sai21gajula/"

// --- 📭 Contact Section ---
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "I'm always open to discussing new opportunities, collaborations, or just connecting with fellow professionals.",
            "Recruiters and hiring managers: Feel free to reach out directly via email below!"
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "sai21gajula@gmail.com" // email takes precedance         
        },
        responseTimeMessage: "...and I'll respond within 24 hours"
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
    Skills,
    archiveLink,
    contact
}