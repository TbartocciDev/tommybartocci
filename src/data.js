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
            {
                title: "Contact",
                url: "/Contact"
            },
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
        }
    },
    AboutPage: {
        introSection: {
            header: "Who is Tommy?",
            summary: `Developing applications is something that truly fascinates me on a daily basis, each task is like 
            solving a piece to a puzzle. I love learning about new technologies and concepts along the way as well.`,
            background: `I believe my background helped shape me for this type of industry. I grew up in two different worlds: 
            One with creative freedom that my family provided me,
            and one with discipline and work ethic the world of sports provided me.`,
            finalWords: "Thank you for visiting my website! If you have any projects, comments or suggestions, please reach out!"
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