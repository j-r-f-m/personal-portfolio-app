import { Hero } from "./hero/Hero";

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
      <Hero />
    </>
  );
}
