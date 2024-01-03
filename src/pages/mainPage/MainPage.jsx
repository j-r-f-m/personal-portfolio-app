import { Contact } from "./contact/Contact";
import { Hero } from "./hero/Hero";
import { MainProjects } from "./mainProjects/MainProjects";
import { Element } from "react-scroll";
/**
 * Landing page that conatins the three main content sections.
 * 1. Hero section with description about me and tech stack
 * 2. Prjects section with three main projects
 * 3. Contact information
 * @returns Landing page
 */
export function MainPage() {
  /**
   * Basic layout of MainContent(): Each component wraps its content inside a
   * container.
   */
  return (
    <>
      {/* The element component serves as a container for a section of your
      webpage that you want to scroll to */}
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
