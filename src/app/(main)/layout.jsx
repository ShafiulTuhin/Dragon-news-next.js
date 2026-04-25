import Header from "@/components/shared/Header";
import Marque from "@/components/shared/Marque";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="container mx-auto lg:px-0 px-4 ">
      <Header />
      <Marque />
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
