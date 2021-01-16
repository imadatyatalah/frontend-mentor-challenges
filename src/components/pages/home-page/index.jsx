import SEO from "../../seo";
import HeroSection from "./heroSection";
import Interactive from "./interactive";
import Footer from "../../layout/footer";
import OurCreations from "./ourCreations";
import Attribution from "./attribution";

const HomePage = () => {
  return (
    <>
      <SEO title="Frontend Mentor" />
      <HeroSection />
      <Interactive />
      <OurCreations />
      <Attribution />
      <Footer />
    </>
  );
};

export default HomePage;
