import uniqid from "uniqid";

/**
 * Array contianing objects with the information belonging to the projects that
 * are presented.
 * @typedef {Object} ProjectData
 * @property {string} title - The title of the project.
 * @property {string} tools - The tools used for the project.
 * @property {string} imgPath - The image path for the project.
 * @property {string} description - The description of the project.
 * @property {string} id - The unique identifier of the project.
 * @property {string} link - The link to the project.
 * @property {string} linkGithub - The link to the project's GitHub repository.
 */

const moreProjectsData = [
  {
    title: "Taschenrechner",
    tools: "Javascript, html, css",
    imgPath: "images/img_bemessungshilfen.png",
    description:
      "Die Taschenrechner-App ist eine Front-End-Anwendung. Es handelt sich um einen einfach On-Screen Taschenrechner. Es sind die Grundrechenarten Addition, Subtraktion, Multiplikation und Division implementiert. Die App wurde mit Vanilla Javascript, HTML und CSS erstellt.",
    id: uniqid(),
    link: "https://unique-palmier-41463c.netlify.app/",
    linkGithub: "https://github.com/j-r-f-m/odin-calculator",
  },
  {
    title: "To-Do-App",
    tools: "Javascript, Html, CSS, Webpack",
    imgPath: "images/img_mittig_kraft.png",
    description:
      "Die To-Do-App ist eine einfache Aufgabenverwaltungsanwendung. Die grundlegenden CRUD-Operationen wurden implementiert. Es können Aufgaben erstellt, gelesen, aktualisiert und gelöscht werden. Des Weiteren wird der Lokale-Speicher des Browsers verwendet, um die Aufgaben zu speichern.",
    id: uniqid(),
    link: "https://main--reliable-mousse-ffef69.netlify.app/",
    linkGithub: "https://github.com/j-r-f-m/odin-to-do-app",
  },

  {
    title: "Schiffe-Versenken-App",
    tools: "Javascript, html, Css, Webpack",
    imgPath: "images/img_n_stäbe.png",
    description:
      "Mit der Schiffe-Versenken-App kann man eine Runde Schiffe versenken gegen eine einfach KI spielen.",
    id: uniqid(),
    link: "https://frabjous-nougat-32666f.netlify.app/",
    linkGithub: "https://github.com/j-r-f-m/odin-battleship",
  },
];

export { moreProjectsData };
