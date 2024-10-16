import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductListing from "./../components/ProductGrid";

const Home = () => {
  return (
    <div className="bg-[#F2F3FA]">
      <Header />
      <Banner />
      <ProductListing />
    </div>
  );
};

export default Home;
