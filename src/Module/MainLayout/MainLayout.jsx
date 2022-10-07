import Footer from "../Footer/Footer";
import HeroArea from "../Hero_Area/HeroArea";

const MainLayout = ({ children }) => {
  return (
    <>
      <HeroArea />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout