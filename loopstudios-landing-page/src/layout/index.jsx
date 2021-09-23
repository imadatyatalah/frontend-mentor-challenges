import Footer from "../components/footer";
import Attribution from "../components/attribution";

const Layout = ({ children }) => (
  <>
    <main>{children}</main>
    <Footer />
    <Attribution />
  </>
);

export default Layout;
