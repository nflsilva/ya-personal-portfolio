import { faMobileScreenButton, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faReact, faGithub, faAppStore, faGooglePay } from '@fortawesome/free-brands-svg-icons';

export function iconFromDetailType(type) {
    return [
        { name: "Apple's App Store", icon: faAppStore, },
        { name: "Google Play Store", icon: faGooglePay, },
        { name: "GitHub", icon: faGithub, },
    ][type];
};

export function imageFromLogoName(logoName) {
    var path = process.env.PUBLIC_URL + "/logos/"; 
    switch(logoName) {
        case 'C':
            path += "c-logo.png";
            break;
        case 'C++':
            path += "cpp-logo.png";
            break;
        case 'Kotlin':
            path += "kotlin-logo.png";
            break;
        case 'Swift':
            path += "swift-logo.png";
            break;
        case 'REST':
            path += "rest-logo.png";
            break;
        case 'Firebase':
            path += "firebase-logo.png"
            break;
        case 'OpenGL':
            path += "opengl-logo.png"
            break;
        case 'Python':
            path += "python-logo.png"
            break;
        case 'Docker':
            path += "docker-logo.png"
            break;
        case 'Database':
        case 'CoreData':
        case 'MySQL':
            path += "database-logo.png";
            break; 
        default:
            path += "component-logo.png";
            break;
      } 
      return path;
};

export const mobileApps = [
    {
        title: 'REN Energy',
        description: "Played a critical role in the development of REN - Energy for iOS. Implemented backend server integration, UI charts and transition animations.",
        image: process.env.PUBLIC_URL + '/images/ren-energy.png',
        tags: ['Swift', 'UIKit', 'REST', 'CoreData', 'Firebase'],
        details: 'https://apps.apple.com/pt/app/ren-energy/id1225154751',
        detailType: 0,
        professional: true
    },
    {
        title: 'REN Investors',
        description: "Solo-developed the iOS version of REN - Investors, an app aiming to communicate financial information to investors of all levels.",
        image: process.env.PUBLIC_URL + '/images/ren-investors.png',
        tags: ['Swift', 'UIKit', 'REST', 'CoreData', 'Firebase'],
        details: 'https://apps.apple.com/pt/app/ren-investidores/id1068433116',
        detailType: 0,
        professional: true
    },
];

export const tools = [
    {
        title: 'k2ddt (Kotlin 2D Development Tools)',
        description: "The forth iteration of a toy game engine. Started as a simple 3D engine in C++ and evolved into a collection of tools for 2D, written in Kotlin. I used this project to learn the language as well as modern OpenGL.",
        image: process.env.PUBLIC_URL + '/images/2dgt.png',
        tags: ['Kotlin', 'OpenGL'],
        details: 'https://github.com/nflsilva/k2ddt',
        detailType: 2,
        professional: false
    },
    {
        title: 'yane (Yet Another NES Emulator)',
        description: "The first emulator I tried to write. This project allowed me to learn about virtual machines and alternative computer architecture. This emulator implementation is not complete.",
        image: process.env.PUBLIC_URL + '/images/yane.png',
        tags: ['C++'],
        details: 'https://github.com/nflsilva/yane',
        detailType: 2,
        professional: false
    },
    {
        title: 'nds-gbabf (Nintendo DS Game Boy Advance Bootleg Flasher)',
        description: "A Nintendo DS program that flashes Game Boy Advance roms into Game Boy Advance chinese bootleg cartridges. This project started as a simple experiment to try to write homebrew software into bootleg cartridges.",
        image: process.env.PUBLIC_URL + '/images/nds-gbabf.png',
        tags: ['C'],
        details: 'https://github.com/nflsilva/nds-gbabf',
        detailType: 2,
        professional: false
    },
    {
        title: 's3v  (Simple 3D Viewer)',
        description: "A very simple 3D mesh renderer. This is an on going learning project and thus it is implemented with very minimal external dependencies. It uses OpenGL and implements very limited features (yet).",
        image: process.env.PUBLIC_URL + '/images/s3v.png',
        tags: ['C', 'OpenGL'],
        details: 'https://github.com/nflsilva/simple-3d-viewer',
        detailType: 2,
        professional: false
    }
];

export const games = [
];

export const technologies = {
    description: "I've worked with a vast range of technologies over the years. Professionally I'm currently working as a Mobile Software Engineer.",
    techs: [
        {
            title: "Mobile",
            description: "Experienced in both iOS and Android development. Worked with Kotlin and Swift professionally for a couple of years.",
            icon: faMobileScreenButton
        },
        {
            title: "Web",
            description: "Experience with .NET, Python, React.js and Docker. Created a couple of tool webservers to help automate repetitive tasks.",
            icon: faReact
        },
        {
            title: "Games",
            description: "Experience with OpenGL, C/C++. Worked on a couple of toy projects on free time.",
            icon: faGamepad
        }
    ]
};

export const aboutMe =  {
    description: "Programmer at heart, software engineer by trade. Working on exciting projects helps me feel productive and engaged. To see my projects thrive brings me joy and a sense of accomplishment.",
    cv: process.env.PUBLIC_URL + "/files/cv_nflsilva_2023.pdf",
    interests: [
        "Game engine Development", 
        "Virtual Machines", 
        "Mobile Development", 
        "Computer Graphics", 
        "Parallel Programming",
        "Micro-controller Programming"
    ],
    timeline:  [
        { year: "Sept 2015", event: "Joined REN as Trainee. Started developing web applications." },
        { year: "Apr 2016", event: "Started learning iOS app development." },
        { year: "May 2017", event: "Released and published app 'REN Energy' on Apple's App Store." },
        { year: "Apr 2021", event: "Released and published app 'REN Investors' on Apple's App Store." },
        { year: "May 2021", event: "Joined OutSystems. Started working with Android and Cordova plugins." },
    ]
};

export const footer = {
    linkedIn: "https://www.linkedin.com/in/nflsilva/",
    github: "https://github.com/nflsilva",
};