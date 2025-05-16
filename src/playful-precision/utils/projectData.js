export const projectData = [
    {
        title: "Unified Content System",
        imgName: "project1.jpg",
        description: "Finding themselves at the end of the production chain, developers tend to turn into slow and frustrated beasts.",
        type: "Case Study"
    },
    {
        title: "Search & Explore",
        imgName: "project2.jpg",
        description: "UXE + S&E have been collaborating to develop a real data, high fidelity prototype to help the team rapidly design, iterate, learn, and test interaction on the base map.",
        type: "Visual Showcase"
    },
    {
        title: "Pull-to-Return – A new interaction pattern?",
        imgName: "project3.jpg",
        description: "Recently I stumbled upon Feedly's design rework and I've found a pretty neat interaction I'd love to share with you as a prototype.",
        type: "Engineering Focus"
    },
    {
        title: "Unveiled-Sticky-Navigation – Released as a jQuery Plugin",
        imgName: "project5.jpg",
        description: "The navigation of medium.com examined, enhanced, and published as a jQuery plugin.",
        type: "Engineering Focus"
    },
    {
        title: "UI content system tool",
        imgName: "project5.jpg",
        description: "Made UI updates based on designer feedback, fixed some bugs and added new component",
        type: "Visual Showcase"
    }
];

export const carouselSlides = [
    {
        title: "Search & Explore",
        subtitle: "Project 1",
        description: "UXE + S&E have been collaborating to develop a real data, high fidelity prototype to help the team rapidly design, iterate, learn, and test interaction on the base map.",
        image: "../assets/img/project2.jpg"
    },
    {
        title: "Unified Content System",
        subtitle: "Project 2",
        description: "Finding themselves at the end of the production chain, developers tend to turn into slow and frustrated beasts.",
        image: "../assets/img/project1.jpg"
    },
    {
        title: "Pull-to-Return Pattern",
        subtitle: "Project 3",
        description: "Recently I stumbled upon Feedly's design rework and I've found a pretty neat interaction I'd love to share with you as a prototype.",
        image: "../assets/img/project3.jpg"
    },
    {
        title: "Unveiled Sticky Navigation",
        subtitle: "Project 4",
        description: "The navigation of medium.com examined, enhanced, and published as a jQuery plugin.",
        image: "../assets/img/project4.jpg"
    },
    {
        title: "UI Content System Tool",
        subtitle: "Project 5",
        description: "Made UI updates based on designer feedback, fixed some bugs and added new components.",
        image: "../assets/img/project5.jpg"
    }
];

export const projectSlides = {
    "Unified Content System": [
        {
            heading: "Overview",
            content: "Redesigned a legacy dashboard for Pearson using React, focusing on accessibility and user feedback loops."
        },
        {
            heading: "Problem & Goals",
            content: "Old UI was inconsistent and hard to navigate. Goal: modern, intuitive, accessible interface."
        },
        {
            heading: "Process",
            content: "Worked closely with UX to translate Figma into React components. Integrated ARIA roles, keyboard nav, and custom themes."
        },
        {
            heading: "Tech Stack & Challenges",
            content: "Used React + Styled Components + TypeScript. Handled design tokens, performance tuning, and WCAG 2.1 compliance."
        },
        {
            heading: "Outcome",
            content: "+40% task completion rate, -25% drop in support tickets."
        }
    ],
    "Mobile Nav Animation": [
        {
            heading: "Before",
            content: "GIF or screenshot showing the old dropdown interaction."
        },
        {
            heading: "After",
            content: "Improved animation using Framer Motion and reduced CLS shift."
        }
    ],
    "GraphQL Order Dashboard": [
        {
            heading: "Overview",
            content: "Built an order dashboard using React + Apollo Client + Material UI."
        },
        {
            heading: "Tech Stack",
            content: "GraphQL, React, CSS-in-JS, Node.js backend"
        },
        {
            heading: "Performance",
            content: "Reduced load time from 2.5s to 850ms with memoization + lazy queries."
        }
    ]
};
