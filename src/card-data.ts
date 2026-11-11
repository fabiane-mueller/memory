const singleCards = [
    {
        card: "angular",
        title: "Angular",
        image: "public/assets/icons/cards-logos/angular.svg",
        alt: "Angular Logo"
    },
     {
        card: "bootstrap",
        title: "Bootstrap",
        image: "public/assets/icons/cards-logos/bootstrap.svg",
        alt: "Bootstrap Logo"
    },
     
    {
        card: "css",
        title: "CSS",
        image: "public/assets/icons/cards-logos/css.svg",
        alt: "CSS Logo"
    },
    {
        card: "django",
        title: "Django",
        image: "public/assets/icons/cards-logos/django.svg",
        alt: "Django Logo"
    },
    {
        card: "firebase",
        title: "Firebase",
        image: "public/assets/icons/cards-logos/firebase.svg",
        alt: "Firebase Logo"
    },
    {
        card: "git",
        title: "Git",
        image: "public/assets/icons/cards-logos/git.svg",
        alt: "Git Logo"
    },
    {
        card: "github",
        title: "GitHub",
        image: "public/assets/icons/cards-logos/github.svg",
        alt: "GitHub Logo"
    },
    {
        card: "group",
        title: "Group",
        image: "public/assets/icons/cards-logos/group.svg",
        alt: "Group Icon"
    },
    {
        card: "group-b",
        title: "Group B",
        image: "public/assets/icons/cards-logos/group-b.svg",
        alt: "Group B Icon"
    },
    {
        card: "js",
        title: "JavaScript",
        image: "public/assets/icons/cards-logos/js.svg",
        alt: "JavaScript Logo"
    },
    {
        card: "node-js",
        title: "Node.js",
        image: "public/assets/icons/cards-logos/node_js.svg",
        alt: "Node.js Logo"
    },
    {
        card: "python",
        title: "Python",
        image: "public/assets/icons/cards-logos/python.svg",
        alt: "Python Logo"
    },
    {
        card: "sass",
        title: "Sass",
        image: "public/assets/icons/cards-logos/sass.svg",
        alt: "Sass Logo"
    },
    {
        card: "sql",
        title: "SQL",
        image: "public/assets/icons/cards-logos/sql.svg",
        alt: "SQL Logo"
    },
    {
        card: "terminal",
        title: "Terminal",
        image: "public/assets/icons/cards-logos/terminal.svg",
        alt: "Terminal Icon"
    },
    {
        card: "html5",
        title: "HTML5",
        image: "public/assets/icons/cards-logos/html5.svg",
        alt: "HTML5 Logo"
    },
    {
        card: "typescript",
        title: "TypeScript",
        image: "public/assets/icons/cards-logos/typescript.svg",
        alt: "TypeScript Logo"
    },
    {
        card: "vs-code",
        title: "Visual Studio Code",
        image: "public/assets/icons/cards-logos/vs-code.svg",
        alt: "Visual Studio Code Logo"
    }
];



function duplicateCards() {
  let allCards = singleCards.flatMap(i => [i, i]);
  for (let i = allCards.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [allCards[i], allCards[randomIndex]] = [allCards[randomIndex], allCards[i]];
  }
  return allCards;
}

export const cardsData = duplicateCards();



