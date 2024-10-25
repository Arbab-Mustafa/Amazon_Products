import products from "../data"; // Assuming product data is stored separately.
import ProductCard from "./ProductCard";

const ProductListing = () => {
  return (
    <div>
      <h2 className="text-3xl  md:text-5xl font-semibold text-center md:text-start mt-8 mb-4 md:mb-16 md:ml-28 ">
        Our Products
      </h2>
      <div className="w-full  max-w-7xl   mx-auto flex justify-center">
        <div className=" flex justify-center flex-wrap gap-4    ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
