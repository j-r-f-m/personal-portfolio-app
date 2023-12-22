import uniqid from "uniqid";

const projectData = [
  {
    title: "Verankerungslänge",
    tools: "Javascript, React.js, MUI, Vite",
    imgPath: "images/img_bemessungshilfen.png",
    description:
      "Mit der Verankerungslänge-App lässt sich die Ersatzverankerungslänge nach EC2 berechnen. Die verwendenten Formeln, so wie die benötigten Beiwerte sind übersichtlich dargestellt. Das Berechnungsprotokoll dient als Dokumentation. Die einzelnen Rechenschritte können dadruch nachvollzogen werden. Es handelt sich bei der App um eine Front-End-Applikaiton.",
    id: uniqid(),
    link: "#",
  },
  {
    title: "Mittige Längsdruckkraft",
    tools: "Javascript, React.js, MUI, Vite",
    imgPath: "images/img_bemessungshilfen.png",
    description:
      " Das Ziel war es eine App zu entwickeln, mit der man die Ersatzverankerungslänge nach EC2 berechnen kann. Mittige Längsdruckkraft A front end calculation tool for concrete construction. You can calculate the needed anchorage length of a rebar and the amount of rebars that can fit in a concrete beam.",
    id: uniqid(),
    link: "https://phenomenal-cheesecake-339368.netlify.app/",
  },

  {
    title: "Anzahl Bewehrungsstäbe",
    tools: "Javascript, React.js, MUI, Vite",
    imgPath: "images/img_bemessungshilfen.png",
    description:
      "Mit der App lässt sich die maximale Anzahl von Bewehrungsstäben in einer Lage eines Stahlbetonträgers ermitteln. Es wurde der Ansatz aus Bewehren von Stahlbetonbauwerken nach DIN EN 1992-1-1 mit naitonalem Anhang verwendet herausgegeben vom Institut für Stahlbetonbewehrung (ISB) e. V. ",
    id: uniqid(),
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
