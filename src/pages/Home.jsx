import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductListing from "../components/ProductGrid";

const Home = () => {
  return (
    <div className="bg-[#F2F3FA]">
      <Header />
      <Banner />
      <ProductListing />

      <Footer />
    </div>
  );
};

export default Home;
