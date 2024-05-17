import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

type prop = {
  children: React.ReactNode;
  showHero?: Boolean;
};

const Layout = ({ children, showHero = false }: prop) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}

      <div className="container mx-auto flex-1 py-10">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
