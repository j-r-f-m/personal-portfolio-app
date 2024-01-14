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
      "Die Taschenrechner-App ist eine Front-End-Anwendung. Es handelt sich um einen einfach On-Screen Taschenrechner. Es sind die Grundrechenarten Addition, Subtraktion, Multiplikation und Division implementiert. Die App wurde mit Vanilla Javascript, HTML und CSS erstellt. ",
    id: uniqid(),
    link: "https://unique-palmier-41463c.netlify.app/",
    linkGithub: "https://github.com/j-r-f-m/odin-calculator",
  },
  {
    title: "Mittige Längsdruckkraft",
    tools: "Javascript, React.js, MUI, Vite",
    imgPath: "images/img_mittig_kraft.png",
    description:
      "Es lässt sich die benötigte Spaltzugbewehrung bei einer mittig angreifenden Längsdruckkraft berechnen. Dabei wird das Vorgehen aus dem DAfStb-Heft 631 'Hilfsmittel zur Schnittgrößenermittlung und zu besonderen Detailnachweisen bei Stahlbetontragwerken' berücksichtigt.",
    id: uniqid(),
    link: "https://phenomenal-cheesecake-339368.netlify.app/",
    linkGithub: "https://github.com/j-r-f-m/mittige-laengsdruckkraft",
  },

  {
    title: "Anzahl Bewehrungsstäbe",
    tools: "Javascript, React.js, MUI, Vite",
    imgPath: "images/img_n_stäbe.png",
    description:
      "Mit der App lässt sich die maximale Anzahl von Bewehrungsstäben in einer Lage eines Stahlbetonträgers ermitteln. Es wurde der Ansatz aus 'Bewehren von Stahlbetonbauwerken nach DIN EN 1992-1-1 mit naitonalem Anhang' verwendet. Herausgegeben vom Institut für Stahlbetonbewehrung (ISB) e. V. ",
    id: uniqid(),
    link: "https://voluble-ganache-b17597.netlify.app/",
    linkGithub: "https://github.com/j-r-f-m/bewehrung-anzahl-bs-app",
  },
];

export { moreProjectsData };
