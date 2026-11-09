/**
 * PORTFOLIO DATA FILE - AYISHA P
 * -------------------------------------------------------------
 * Edit your personal information, links, projects, skills, and
 * achievements right here without touching the UI components!
 * Any items you want to update later have been marked with [TODO].
 * -------------------------------------------------------------
 */

export const portfolioData = {
  // Personal Details
  personal: {
    name: "Ayisha P",
    preferredName: "Ayisha",
    title: "B.Tech Computer Science (Artificial Intelligence) Student",
    college: "Thejus Engineering College",
    location: "Thrissur, Kerala, India",
    email: "ayisha.cs.ai@gmail.com", // [TODO]: Replace with your preferred contact email
    phone: "+91 98765 43210", // [TODO]: Replace or remove if preferred
    avatarUrl: "/ayisha.jpg", // Ayisha's campus photo
    resumeUrl: "#", // [TODO]: Place your resume PDF in public/resume.pdf and link it here
    tagline: "I build intelligent, purposeful digital experiences.",
    shortBio: "First-year engineering student passionate about Artificial Intelligence, Machine Learning, and modern web technologies. I love transforming complex ideas into clean, functional code.",
    fullBio: [
      "Hello! I'm Ayisha P, currently pursuing my first-year B.Tech in Computer Science Engineering with a specialization in Artificial Intelligence at Thejus Engineering College in Thrissur, Kerala.",
      "My fascination with technology began with curiosity about how intelligent systems learn patterns. Today, I divide my time between mastering core programming languages like Python and C, diving into machine learning foundations, and crafting modern, responsive web interfaces.",
      "I'm eager to connect with mentors, collaborate on innovative projects, and pursue internship opportunities where I can contribute fresh perspective and continuously grow."
    ],
  },

  // Social & Community Links
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/ayishap-378",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/", // [TODO]: Add your LinkedIn profile URL
      icon: "Linkedin",
    },
    {
      name: "Email",
      url: "mailto:ayisha.cs.ai@gmail.com", // [TODO]: Update with your email
      icon: "Mail",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/", // [TODO]: Add your LeetCode or HackerRank URL
      icon: "Code2",
    }
  ],

  // Quick Highlight Numbers
  stats: [
    { label: "Year of Study", value: "1st", sublabel: "B.Tech CSE (AI)" },
    { label: "Projects Built", value: "4+", sublabel: "Web & ML prototypes" },
    { label: "Technologies", value: "10+", sublabel: "Languages & Frameworks" },
    { label: "Problem Solving", value: "50+", sublabel: "Coding Challenges" }
  ],

  // Categorized Skills
  skills: [
    {
      category: "Languages",
      description: "Core programming and scripting foundations",
      items: [
        { name: "Python", level: 85, highlight: "Preferred language for AI & algorithms" },
        { name: "C Programming", level: 80, highlight: "Foundational college coursework & memory concepts" },
        { name: "JavaScript (ES6+)", level: 75, highlight: "Modern asynchronous frontend development" },
        { name: "HTML5 & CSS3", level: 90, highlight: "Semantic layout, accessibility & styling" },
        { name: "SQL Basics", level: 70, highlight: "Relational database querying & schema design" }
      ]
    },
    {
      category: "AI & Machine Learning",
      description: "Data processing, algorithms, and AI exploration",
      items: [
        { name: "NumPy & Pandas", level: 75, highlight: "Data cleaning, arrays & exploratory data analysis" },
        { name: "Scikit-Learn", level: 65, highlight: "Supervised classification & regression models" },
        { name: "Neural Network Basics", level: 60, highlight: "Perceptrons, forward/backward propagation theory" },
        { name: "Matplotlib & Seaborn", level: 70, highlight: "Statistical data visualization & plotting" },
        { name: "Prompt Engineering", level: 85, highlight: "LLM agent integration and fine-tuned prompting" }
      ]
    },
    {
      category: "Web Development",
      description: "Responsive interfaces and user experience design",
      items: [
        { name: "React.js", level: 80, highlight: "Component lifecycle, state management & hooks" },
        { name: "Tailwind CSS", level: 85, highlight: "Modern utility-first styling & dark mode" },
        { name: "Responsive UI/UX", level: 90, highlight: "Mobile-first layouts & micro-interactions" },
        { name: "REST APIs", level: 70, highlight: "Fetching, consuming and displaying asynchronous data" },
        { name: "Framer Motion", level: 75, highlight: "Smooth page reveals and interactive physics" }
      ]
    },
    {
      category: "Tools & Platforms",
      description: "Development workflow and productive utilities",
      items: [
        { name: "Git & GitHub", level: 80, highlight: "Version control, branching & open source collaboration" },
        { name: "VS Code", level: 90, highlight: "Primary IDE with custom debugging extensions" },
        { name: "Jupyter Notebook", level: 85, highlight: "Interactive ML experiments and visualization" },
        { name: "Figma Basics", level: 70, highlight: "UI wireframing and design token alignment" },
        { name: "Linux / Terminal", level: 65, highlight: "CLI navigation and script automation" }
      ]
    }
  ],

  // Featured Projects
  projects: [
    {
      id: "ai-campus-companion",
      title: "AI Campus Companion",
      subtitle: "Intelligent Student Query & Knowledge Bot",
      description: "An AI-powered web assistant designed to help engineering students swiftly look up syllabus guides, exam schedules, and department notices using natural language queries.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Flask", "React", "Tailwind CSS", "OpenAI API"],
      demoUrl: "https://example.com/demo/campus-companion", // [TODO]: Add your live demo link
      githubUrl: "https://github.com/ayisha-p/ai-campus-companion", // [TODO]: Add your repo link
      featured: true,
      year: "2026",
      keyFeatures: [
        "Natural language search across academic FAQs and college notices",
        "Instant answers to timetable and laboratory questions",
        "Clean, responsive chat UI with quick question suggestion pills",
        "Backend Flask service caching common queries for rapid response"
      ]
    },
    {
      id: "medpulse-predictor",
      title: "MedPulse - Health Risk Predictor",
      subtitle: "Machine Learning Diagnostic Prototype",
      description: "A machine learning classification application that analyzes patient health parameters (glucose, blood pressure, BMI) to estimate early diabetes risk with high accuracy.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Scikit-Learn", "Pandas", "Streamlit", "NumPy"],
      demoUrl: "https://example.com/demo/medpulse", // [TODO]: Add your live demo link
      githubUrl: "https://github.com/ayisha-p/medpulse-predictor", // [TODO]: Add your repo link
      featured: true,
      year: "2026",
      keyFeatures: [
        "Trained on standardized clinical datasets using Logistic Regression & Random Forest",
        "Data normalization and feature importance visualization",
        "Interactive slider inputs for doctors or individuals to test patient values",
        "Generates clean summary reports and risk factor breakdown"
      ]
    },
    {
      id: "algo-visualizer",
      title: "AlgoVisual - Interactive Sorting Lab",
      subtitle: "Educational Computer Science Web App",
      description: "An interactive web visualization tool designed to help first-year students understand core sorting algorithms (Merge Sort, Quick Sort, Bubble Sort) through dynamic bar animations and step control.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "JavaScript", "Tailwind CSS", "Canvas API"],
      demoUrl: "https://example.com/demo/algovisual", // [TODO]: Add your live demo link
      githubUrl: "https://github.com/ayisha-p/algo-visualizer", // [TODO]: Add your repo link
      featured: true,
      year: "2026",
      keyFeatures: [
        "Step-by-step playback with speed and array size adjustments",
        "Real-time comparison and array access counters",
        "Color-coded state indicators (comparing, swapping, sorted)",
        "Time and space complexity reference cheat-sheet"
      ]
    },
    {
      id: "ecotrack-campus",
      title: "EcoTrack - Student Carbon Footprint",
      subtitle: "Green Campus Sustainability Dashboard",
      description: "A lightweight web app calculating estimated daily carbon emissions based on daily commute, lab computer usage, and dietary choices, encouraging eco-conscious habits on campus.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Tailwind CSS", "Chart.js", "LocalStorage"],
      demoUrl: "https://example.com/demo/ecotrack", // [TODO]: Add your live demo link
      githubUrl: "https://github.com/ayisha-p/ecotrack", // [TODO]: Add your repo link
      featured: false,
      year: "2026",
      keyFeatures: [
        "Quick 2-minute daily questionnaire with instant score",
        "Weekly progress graph visualizer using Chart.js",
        "Personalized actionable tips to reduce individual emissions",
        "Private local storage to preserve history without logins"
      ]
    }
  ],

  // Academic & Learning Milestones Timeline
  timeline: [
    {
      period: "2026 - Present",
      title: "First-Year B.Tech in CSE (Artificial Intelligence)",
      organization: "Thejus Engineering College, Thrissur, Kerala",
      description: "Commenced undergraduate studies diving into Engineering Mathematics, C Programming, digital logic, and foundational AI concepts. Active member of technical clubs.",
      badge: "Academic"
    },
    {
      period: "Early 2026",
      title: "Data Science & Python Foundations",
      organization: "Self-Paced Learning & Workshops",
      description: "Completed intensive practical courses covering Python object-oriented programming, NumPy, Pandas, and basic machine learning model building.",
      badge: "Skill Milestone"
    },
    {
      period: "2026",
      title: "College Tech Fest & Hackathon Participation",
      organization: "Inter-College Innovation Challenge",
      description: "Collaborated in a team of four to ideate and prototype a smart solution for campus paper reduction. Pitched to senior faculty and judges.",
      badge: "Hackathon"
    },
    {
      period: "Ongoing",
      title: "Building Modern Web & AI Projects",
      organization: "Personal Lab & Open Source",
      description: "Focusing on pairing React frontend capabilities with Python/AI backends. Building public repositories to document problem-solving progress.",
      badge: "Exploration"
    }
  ],

  // Curated Articles / Learning Highlights
  articles: [
    {
      id: 1,
      title: "Demystifying Perceptrons: How Neural Networks Think",
      excerpt: "A beginner-friendly look into how mathematical weights and activation functions combine to mimic biological neurons.",
      date: "Nov 2026",
      readTime: "4 min read",
      tags: ["AI/ML", "Python", "Deep Learning"],
      link: "#" // [TODO]: Add your Medium, Dev.to or personal blog link
    },
    {
      id: 2,
      title: "From C to Python: What First-Year Engineering Taught Me",
      excerpt: "Reflecting on why understanding pointers and memory management in C makes you a far better Python and software developer.",
      date: "Oct 2026",
      readTime: "3 min read",
      tags: ["Computer Science", "Programming", "C"],
      link: "#" // [TODO]: Add your blog link
    },
    {
      id: 3,
      title: "Why I Chose Artificial Intelligence for My Engineering Degree",
      excerpt: "The inspiration, practical opportunities, and future vision driving my study of AI at Thejus Engineering College.",
      date: "Sep 2026",
      readTime: "5 min read",
      tags: ["Career", "Artificial Intelligence", "Student Life"],
      link: "#" // [TODO]: Add your blog link
    }
  ],

  // Contact Info
  contact: {
    heading: "Let's build something remarkable together.",
    subheading: "Whether you have an internship opportunity, a project idea, or just want to discuss Artificial Intelligence and engineering, my inbox is always open!",
    status: "Actively seeking summer 2027 internships & open source collaborations.",
    location: "Thrissur, Kerala, India"
  }
};

