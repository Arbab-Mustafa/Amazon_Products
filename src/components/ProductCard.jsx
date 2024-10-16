import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const imageSrc = product.Images?.[0];

  const title = product.Title.slice(0, 48) + "...";
  const handleClick = () => {
    navigate(`/product/${product.id}`); // Navigate to product details page
  };

  return (
    <div
      className="product-card border rounded-lg p-4 shadow-md hover:shadow-lg w-64 md:w-80 border-[#6369D2] overflow-hidden cursor-pointer transition delay-100  duration-300"
      onClick={handleClick}
    >
      <div className="w-48 h-48 md:w-[20rem] md:h-72 overflow-hidden hover:scale-110 transition delay-100  duration-200">
        <img
          src={imageSrc}
          alt={product.Title}
          className="w-full h-full object-contain mix-blend-multiply "
        />
      </div>
      <div>
        <h2 className="text-lg  md:text-xl font-semibold mt-2">{title}</h2>
        <div className="flex gap-1 justify-between py-2">
          <div className="flex gap-1">
            <p className="text-black font-medium"> Color :</p>
            <p className="text-gray-600"> {product.Color}</p>
          </div>
          <div className="flex gap-1">
            <p className="text-black font-medium"> Price:</p>
            <p className="text-gray-600"> {product.Price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
