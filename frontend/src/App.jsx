import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundSpace from "./components/BackgroundSpace";

import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import AchievementsSection from "./sections/AchievementsSection";
import TimelineSection from "./sections/TimelineSection";
import ContactSection from "./sections/ContactSection";

function App() {

  return (
    <>
      <BackgroundSpace />

      <Navbar />

      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <TimelineSection />
      <ContactSection />

      <Footer />
    </>
  );
}

export default App;