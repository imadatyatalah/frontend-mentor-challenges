import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

const Custom404 = () => {
  return (
    <>
      <Header isBgBlack />
      <section className="font-Alata min-h-screen flex justify-center items-center">
        <h1>404 - Page Not Found</h1>
      </section>
      <Footer />
    </>
  );
};

export default Custom404;
