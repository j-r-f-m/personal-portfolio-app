import { Contact } from "./contact/Contact";
import { Hero } from "./hero/Hero";
import { MainProjects } from "./mainProjects/MainProjects";
import { Element } from "react-scroll";

// use border to make layout visible
// let borderStyle = "border border-danger";

/**
 * Landing page that conatins the three main content sections.
 * @returns Landing page
 */
export function MainPage() {
  /**
   * Basic layout of MainContent(): Each component wraps its content inside a
   * container.
   */
  return (
    <>
      <Element name="about">
        <Hero />
      </Element>

      <Element name="projects">
        <MainProjects />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
}
