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
      className="product-card border rounded-lg p-4 shadow-md w-64 md:w-80"
      onClick={handleClick}
    >
      <div className="w-48 h-48 md:w-72 md:h-72 overflow-hidden">
        <img
          src={imageSrc}
          alt={product.Title}
          className="w-full h-full object-contain"
        />
      </div>

      <h2 className="text-lg  md:text-xl font-semibold mt-2">{title}</h2>
      <p className="text-gray-600">Brand: {product.Brand}</p>
      <p className="text-gray-600">Price: ${product.Price}</p>
    </div>
  );
};

export default ProductCard;
