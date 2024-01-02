import uniqid from "uniqid";

/**
 * Array of project data.
 * @typedef {Object} ProjectData
 * @property {string} title - The title of the project.
 * @property {string} tools - The tools used for the project.
 * @property {string} imgPath - The image path for the project.
 * @property {string} description - The description of the project.
 * @property {string} id - The unique identifier of the project.
 * @property {string} link - The link to the project.
 * @property {string} linkGithub - The link to the project's GitHub repository.
 */

const projectData = [
  {
    title: "Ersatzverankerungslänge",
    tools: "Javascript, React.js, React-Bootstrap, Vite",
    imgPath: "images/img_bemessungshilfen.png",
    description:
      "Mit der Verankerungslänge-App lässt sich die Ersatzverankerungslänge nach EC2 berechnen. Das Berechnungsprotokoll dient als Dokumentation. Die einzelnen Rechenschritte können dadruch nachvollzogen werden. Es handelt sich bei der App um eine Front-End-Applikaiton.",
    id: uniqid(),
    link: "https://monumental-tiramisu-f22f40.netlify.app/",
    linkGithub: "https://github.com/j-r-f-m/lbd-bs-app",
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
      "Mit der App lässt sich die maximale Anzahl von Bewehrungsstäben in einer Lage eines Stahlbetonträgers ermitteln. Es wurde der Ansatz aus 'Bewehren von Stahlbetonbauwerken nach DIN EN 1992-1-1 mit naitonalem Anhang' verwendet herausgegeben vom Institut für Stahlbetonbewehrung (ISB) e. V. ",
    id: uniqid(),
    link: "https://voluble-ganache-b17597.netlify.app/",
    linkGithub: "https://github.com/j-r-f-m/bewehrung-anzahl-bs-app",
  },
];

export { projectData };

/**
 * "Mit der App lässt sich die maximale Anzahl von Bewehrungsstäben
 * in einer Lage eines Stahlbetonträgers ermitteln. Ziel war es ein Interface
 * zu entwickeln, welches übersichtlich und wiederverwendbar ist. Es sollte in
 * weiteren Projekten als Vorlage verwendet werden. Dabei gab es zwei
 * grundlegende Herausforderungen. Es musste ein Interface-Layout gefunden
 * werden welches übersichtlich ist, aber auch die Darstellung von
 * unterschiedlichsten Infromationen erlaubt. Durch das verwenden von
 * einklappbaren Layout-Elementen konnte dies erreicht werden.
 * Die zweite Herausforderung war die Darstellung von Zahlen uns mathematischen
 * Symbolen.",
 */

/**
 *  Mit der Verankerungslänge-App lässt sich die Ersatzverankerungslänge nach
 *  EC2 berechnen. Das Berechnungsprotokoll dient als Dokumentation. Die 
 *  einzelnen Rechenschritte können dadruch nachvollzogen werden. Es handelt sich
 *  bei der App um eine Front-End-Applikaiton.",

 */
