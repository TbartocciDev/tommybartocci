const { default: ResumeSection } = require("./main/Pages/HomePage/Components/ResumeSection/ResumeSection")

const Data = {
    NavBar: {
        pageLinks: [
            {
                title: "Home",
                url: "/"
            },
            {
                title: "About",
                url: "/About"
            },
            // {
            //     title: "Contact",
            //     url: "/Contact"
            // },
        ]
    },
    HomePage: {
        heroSection: {
            header: "Greetings, I'm Tommy!",
            subheader: "Software Engineer from New Jersey.",
            summary: "I specialize in iOS and web development.",
            status: {
                status: "open",
                info: "Looking for a new opportunity"
            }
        },
        appsSection: {
            header: "Applications",
            subheader: "A selection of projects I've built",
            applications: [
                {   
                    index: 0,
                    hookScreen: "/mockups/encryptor/hook",
                    name: "The Encryptor",
                    logo: "/logos/encryptor.png",
                    brief: "An app that allows users to read and write secret messages.",
                    role: "Sole Developer & Designer",
                    summary: `An iOS App made to encrypt and decrypt text using a series of cypher shifts, and
                    alphabets randomly constructed. The app itself is not a messenger, but a tool that will transform
                    the standard English alphabet into something unreadable, then back to readable.`,
                    technologies: [
                        "Swift",
                        "Xcode",
                        "Model View Controller(MVC)",
                        "Core Data",
                        "UiKit",
                        "Light/Dark Support"
    
                    ],
                    homeScreen: "/mockups/encryptor/home",
                    instructions: [
                        {img: "/mockups/encryptor/home", title: "Navigate", summary: "Users can naviagate the app from the home screen"},
                        {img: "/mockups/encryptor/encryptor", title: "Encrypt Decrypt", summary: "Users can read and write messages"},
                        {img: "/mockups/encryptor/howto", title: "Follow Walkthrough", summary: "Users can user a step by step walkthrough"},
                        {img: "/mockups/encryptor/about", title: "Learn About", summary: "Users view the about page"},
                    ],
                    links: [
                        {
                            title: "App Store",
                            url: "https://apps.apple.com/us/app/the-encryptor/id1610639210"
                        },
                        {
                            title: "View Code",
                            url: "https://github.com/TbartocciDev/EncryptionApp"
                        },
                    ],
                },
                {   
                    index: 1,
                    hookScreen: "/mockups/geographi/hook",
                    name: "Geographi",
                    logo: "/logos/geographi.png",
                    brief: "A game based on all countries geography and information.",
                    role: "Sole Developer & Designer",
                    summary: `A level based iOS game for users to gradually learn about the countries of the world
                    through memorizaiton type games. Users can use search the database to get more detailed info, play games 
                    to build muscle memory, and check their progress on a world map. This app has not yet been published.`,
                    technologies: [
                        "Swift",
                        "Xcode",
                        "Model View Controller(MVC)",
                        "API Integration",
                        "Core Data",
                        "Animations",
                        "UiKit",
                        "Light/Dark Support"
                    ],
                    homeScreen: "/mockups/geographi/loading",
                    instructions: [
                        {img: "/mockups/geographi/loading", title: "Loading Animation", summary: "A progress bar while API data is parsed"},
                        {img: "/mockups/geographi/search", title: "Search", summary: "users can search the database"},
                        {img: "/mockups/geographi/filtered", title: "Filter", summary: "Users can filter the database"},
                        {img: "/mockups/geographi/detail", title: "Detailed View", summary: "Users read info about each country"},
                        {img: "/mockups/geographi/games", title: "Level Selection", summary: "Users can select unlocked levels"},
                        {img: "/mockups/geographi/map", title: "View Progress", summary: "Users core data will fill out map completion"},
                    ],
                    previews: [
                        "/mockups/encryptor/encryptor",
                        "/mockups/encryptor/howto",
                        "/mockups/encryptor/about",
                    ],
                    links: [
                        {
                            title: "View Code",
                            url: "https://github.com/TbartocciDev/EncryptionApp"
                        },
                    ],
                },
            ]
        },
        resumeSection: {
            header: "Resume",
            work: {
                header: "Work Experience",
                img: "https://icongr.am/entypo/briefcase.svg?size=128&color=000000",
                experiences: [
                    {title: "Apprentice", company:"General Assembly", date: "Mar 2023 - Jun 2023", description: "Software Engineering Bootcamp"},
                    {title: "Independent Developer", company:"Self Employed", date: "2020 - Present", description: "Self taught iOS development. Designing, developing, deploying apps."},
                    {title: "Florist", company:"Angelones Florist", date: "Feb 2021 - Present", description: "General Florist"},
                ]
            },
            education: {
                header: "Education",
                img: "https://icongr.am/entypo/book.svg?size=128&color=000000",
                experiences: [
                    {title: "Bootcamp", company:"General Assembly", date: "Mar 2023 - Jun 2023", description: "Bootcamp and apprenticeship. JavaScript, React, HTML, CSS."},    
                    {title: "Async Course", company:"Udemy", date: "Completed Jan 2022", description: "iOS 14 & Swift - The Complete iOS Developer Bootcamp"},    
                    {title: "Associates Degree", company:"Raritan Valley Community College", date: "Sep 2017 - May 2020", description: "General Studies: Arts & Sciences"},
                ]
            }
        }
    },
    AboutPage: {
        introSection: {
            header: "Who is Tommy?",
            summary: `I'm a self motivated developer who loves learning new technologies and concepts along the way. 
            I see development similar to solving a puzzle, many pieces come together to make a great product.`,
            background: `I believe I possess the creativity and discipline/work ethic to thrive in this industry.`,
            finalWords: "Thank you for visiting my website! If you have any projects ideas, comments or suggestions, please reach out!"
        },
        interestsSection: {
            title: "Outside of Work",
            subjects: ["Hobbies","Interests"],
            all: [{
                category:"hobbies",title: "Soccer/Sports", summary: `In reality I have played just about every sport, 
                and time to time still play others but most of the time I play soccer.`},
                {category:"hobbies",title: "Billiards", summary: `Fell in love with this game in college, a great way
                for me to blow off smoke and exercise my mind and body at the same time.`},
                {category:"hobbies",title: "Language Learning", summary: `I grew up immersed in a diverse friend group.
                I love learning of other cultures and traditions and what better way than learning
                the basics of their language?`},
                {category:"hobbies",title: "Cooking", summary: `This is a fairly new hobby for me, but I found that
                trying to cook different foods is fun, and beneficial to keep clean things in my body.`},
                {category:"interests",title: "Music", summary: `There is such a wide and diverse range of music available
                to everyone at the touch of a botttom. I love finding rabbit holes of new genres/artists I
                enjoy.`},
                {category:"interests",title: "Photography/Videography", summary: `With plans to make these a hobby one 
                day. However, for now I am happy to observe quality landscape shots.`},
                {category:"interests",title: "History", summary: `I always found it interesting how things came to be. There 
                are so many interesting people and places to learn of as well.`},
                {category:"interests",title: "Nature", summary: `Getting out and feeling/watching the natural world 
                is a core interest of mine. I have kept various animals over the years like ducks and even an iguana.`},
            ]
        }
    },
}

module.exports = { Data }