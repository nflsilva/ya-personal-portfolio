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
    var path = "/logos/"; 
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
        image: '/images/ren-energy.png',
        tags: ['Swift', 'UIKit', 'REST', 'CoreData', 'Firebase'],
        details: 'https://apps.apple.com/us/app/ren-energy/id1225154751',
        detailType: 0,
        professional: true
    },
    {
        title: 'REN Investors',
        description: "Solo-developed the iOS version of REN - Investors, an app aiming to communicate financial information to investors of all levels.",
        image: '/images/ren-investors.png',
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
        image: '/images/2dgt.png',
        tags: ['Kotlin', 'OpenGL'],
        details: 'https://github.com/nflsilva/k2ddt',
        detailType: 2,
        professional: false
    },
    {
        title: 'yane (Yet Another NES Emulator)',
        description: "The first emulator I tried to write. This project allowed me to learn about virtual machines and alternative computer architecture. This emulator implementation is not complete.",
        image: '/images/yane.png',
        tags: ['C++'],
        details: 'https://github.com/nflsilva/yane',
        detailType: 2,
        professional: false
    },
    {
        title: 'nds-gbabf (Nintendo DS Game Boy Advance Bootleg Flasher)',
        description: "A Nintendo DS program that flashes some Game Boy Advance chinese bootleg cartridges. This project started as a simple experiment to try to write homebrew software into bootleg cartridges.",
        image: '/images/nds-gbabf.png',
        tags: ['C'],
        details: 'https://github.com/nflsilva/nds-gbabf',
        detailType: 2,
        professional: false
    },
    {
        title: 'MilkDiscordBot',
        description: "A basic discord bot which responds to basic commands and plays music. I self-host this project on a Docker container on a Raspberry Pi device.",
        image: '/images/discord.png',
        tags: ['Python', 'Database', 'REST', 'Docker'],
        details: 'https://github.com/nflsilva/nds-gbabf',
        detailType: 2,
        professional: false
    },
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
    cv: "/files/cv_nflsilva_2023.pdf",
    interests: [
        "Game engine Development", 
        "Virtual Machines", 
        "Mobile Development", 
        "Computer Graphics", 
        "Parallel Programming",
        "Micro-controller Programming"
    ],
    timeline:  [
        { year: "Sept 2015", event: "Joined REN as Trainee." },
        { year: "May 2017", event: "Released and published app 'REN Energy' on Apple's App Store." },
        { year: "Apr 2021", event: "Released and published app 'REN Investors' on Apple's App Store." },
        { year: "May 2021", event: "Joined OutSystems." },
    ]
};