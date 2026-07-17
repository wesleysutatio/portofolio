export type ProjectStatus = "completed" | "in-progress" | "planned";

export interface Project {
    title: string;
    subtitle: string;
    images: string[];
    description: string;
    project: string;
    team: string;
    techStack: string[];
    role: string;
    timeline: string;
    status: ProjectStatus;
    link?: string;
    github?: string;
}

export const projects: Project[] = [

    {
        images: ["/projects/volicci/volicci-landingpage.png"],
        status: "in-progress",
        timeline: "May 2026 - Current",
        title: "Volicci",
        subtitle: "Authentic luxury brands for an affordable price",
        description:
            "Soon to be the official website for Vollici. Designed to showcase the beauty of authentic luxury items, such as bags, watches, wallets, and accessories. Maintains a clean website look with a simple yet clean User Interfance and User Experience.",
        role: "UI/UX Designer",
        project: "Volicci Company",
        team: "Individual",
        techStack: ["Figma"],
        link: "https://www.figma.com/design/BPwKYjAPHfizIwGs9fimXd/Volicci-Website?node-id=2-3&t=zmMVRf4L2wMj0BeI-1",
    },

    {
        images: ["/projects/gudangin/gudangin-landingpage.png", "/projects/gudangin/gudangin-loginpage.png", "/projects/gudangin/gudangin-dashboard-light.png", "/projects/gudangin/gudangin-dashboard-dark3.png", "/projects/gudangin/gudangin-inventory2.png", "/projects/gudangin/gudangin-settings.png", "/projects/gudangin/gudangin-subscription.png",],
        status: "completed",
        timeline: "Feb 2026 - Jul 2026",
        title: "Gudangin",
        subtitle: "Inventory and stock management for small to medium businesses (SMEs)",
        description:
            "Simple yet functional website that is designed to keep track of all inventories and stock levels of a company. User can view the company's stock overview (Available, Low Stock, and No Stock items) from the Dashboard page. User can add, edit, and delete products with strong vaildations from the Inventory page. User also can see log of updated inventory while also having the ability to restore version from the History page.",
        role: "Full-stack Developer",
        project: "Major Project - BINUS University @ Alam Sutera",
        team: "Team member of 3",
        techStack: ["React.js", "Tailwind CSS", "Vite", "Supabase Backend", "Supabase PostgreSQL"],
    },

    {
        images: ["/projects/labnloan/labnloan-dashboard.png", "/projects/labnloan/labnloan-borrow.png", "/projects/labnloan/labnloan-equipment.png", "/projects/labnloan/labnloan-additem.png"],
        status: "completed",
        timeline: "Sep 2025 - Dec 2025",
        title: "LabNLoan",
        subtitle: "Borrow and return equipments management for campuses",
        description:
            "Prototype of an Android application that lets students to borrow and return equipments from the campus' laboratory. Students can also view equipments that are available, unavailable, and even damaged. Students has their own unique data on the Dashboard page that displays Loan Status and Equipment By Type. On the other hand, Admin can view and manage equipments that are being borrowed and available.",
        role: "Dashboard Front-end and Back-end Developer",
        project: "Mobile Programming Project (Semester 5) - BINUS University @ Alam Sutera",
        team: "Team member of 5",
        techStack: ["Kotlin"],
    },

    {
        images: ["/projects/binotes/binotes-loginpage.png", "/projects/binotes/binotes-searchnotes.png", "/projects/binotes/binotes-notepreview.png", "/projects/binotes/binotes-sellnote.png", "/projects/binotes/binotes-payment.png", "/projects/binotes/binotes-purchasednote.png", "/projects/binotes/binotes-chat.png", "/projects/binotes/binotes-wishlist.png", "/projects/binotes/binotes-review.png", ],
        status: "completed",
        timeline: "Feb 2025 - Jun 2025",
        title: "BiNotes",
        subtitle: "Buy and sell notes around BINUS @ Alam Sutera",
        description:
            "Prototype of a website that lets students buy and also sell their notes to other students. Designed to be minimalist so it is easy to navigate between many pages. Buyers can search for notes, preview notes, leave a rating, and buy a note with payment method of their choice. Sellers can upload notes, select which page to preview, and arrange notes. There's also a review feature, which allows buyers and sellers rate each other on the website.",
        role: "Front-end Developer",
        project: "Software Engineering Project (Semester 4) - BINUS University @ Alam Sutera",
        team: "Team member of 5",
        techStack: ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
    },

    {
        images: ["/projects/eyecare/eyecare-dashboard.JPG", "/projects/eyecare/eyecare-upload.png", "/projects/eyecare/eyecare-dataset.png", ],
        status: "completed",
        timeline: "Sep 2024 - Dec 2024",
        title: "EYE Care",
        subtitle: "Automated eye disease and symptoms detection",
        description:
            "Prototype of an application that lets patients upload their retinal image and check whether they have eye disease or not. Built by Artificial Intelligence, this application is able to return 3 numbers in percentages to detect 3 diseases, which are cataract, diabetic retinopathy, and glaucoma.",
        role: "AI Model Training",
        project: "Artificial Intelligence Project (Semester 3) - BINUS University @ Alam Sutera",
        team: "Team member of 3",
        techStack: ["HTML", "CSS", "JavaScript", "Kaggle", "Python", "CNN"],
    },

    {
        images: ["/projects/cateringz/cateringz-loginpage.png", "/projects/cateringz/cateringz-dashboard.png", "/projects/cateringz/cateringz-promos.png", "/projects/cateringz/cateringz-product.png", "/projects/cateringz/cateringz-testimonial.png", ],
        status: "completed",
        timeline: "Feb 2024 - Jun 2024",
        title: "Cateringz",
        subtitle: "Browse healthy meals and diets",
        description:
            "Prototype of a website that lets user to browse and purchase healthy meals and diets. Users can Log In, then start by searching the meal they want and need from the Products page. Users can then leave a rating towards the app about the food and service. History about the company also present on the AboutUs page.",
        role: "Front-end Developer",
        project: "Human and Computer Interaction Project (Semester 2) - BINUS University @ Alam Sutera",
        team: "Individual",
        techStack: ["HTML", "CSS", "JavaScript"],
    },
];