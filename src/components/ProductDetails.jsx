import { useParams } from "react-router-dom";
import products from "../data";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{product.Title}</h1>
      <img
        src={product.Images[0]}
        alt={product.Title}
        className="w-full h-96 object-cover mb-4"
      />
      <p className="text-lg text-gray-600 mb-2">Brand: {product.Brand}</p>
      <p className="text-lg text-gray-600 mb-2">Color: {product.Color}</p>
      <p className="text-lg text-gray-600 mb-2">Price: {product.Price}</p>
      <p className="text-lg text-gray-600 mb-2">
        Power Source: {product.PowerSource}
      </p>
      <button className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-600">
        Buy Now
      </button>
    </div>
  );
};

export default ProductDetails;
