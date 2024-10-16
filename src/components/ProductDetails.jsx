import { useParams } from "react-router-dom";
import products from "../data"; // Make sure this points to your products data file
import { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NotFound from "./NotFound";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [isZoomed, setIsZoomed] = useState(false); // Start with no zoom
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 }); // Mouse position tracking
  const [productNotFound, setProductNotFound] = useState(false);

  const zoomRef = useRef(null); // Ref for the zoom container

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id);
    if (foundProduct) setMainImage(foundProduct.Images[0]); // Set initial main image
    if (foundProduct) {
      setProduct(foundProduct);
      setProductNotFound(false); // Reset the not found state if product is found
    } else {
      setProductNotFound(true); // Set not found state to true if product is not found
    }
  }, [id]);

  if (productNotFound) return <NotFound />;
  if (!product)
    return (
      <p className="flex justify-center items-center h-screen">Loading ...</p>
    );

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev); // Toggle zoom state
  };

  const handleMouseMove = (e) => {
    if (!isZoomed) return; // Only track when zoom is active

    const { left, top, width, height } =
      zoomRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100; // Get mouse position as a percentage
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition({ x, y }); // Store the position as percentages
  };

  const handleImageClick = (img) => setMainImage(img); // Update main image

  return (
    <>
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {/* Left Side: Image Gallery */}
        <div className="space-y-4">
          <div
            ref={zoomRef}
            className={`relative border rounded-lg overflow-hidden w-[48vh] h-[50vh]  mx-auto md:w-[90vh]  md:h-[80vh]  ${
              isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
            }`}
            onClick={toggleZoom}
            onMouseMove={handleMouseMove}
          >
            {/* Main Image with Zoom Functionality */}
            <img
              src={mainImage}
              alt={product.Title}
              className={`w-full h-full  object-contain transition-transform duration-300 ease-in-out ${
                isZoomed ? "scale-150" : "scale-100" // Conditional scaling
              }`}
              style={
                isZoomed
                  ? { transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` }
                  : {}
              }
            />

            {/* Zoom Icon (Only shown when not zoomed) */}
            {!isZoomed && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-4xl bg-black/50 p-4 rounded-full">
                  🔍
                </span>
              </div>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex  gap-1 w-[43vh] sm:w-auto overflow-x-auto scrollbar-hide">
            {product.Images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.Title} - ${index + 1}`}
                className={`w-20 h-20 object-cover cursor-pointer rounded-md border ${
                  mainImage === img ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => handleImageClick(img)}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold">{product.Title}</h1>
          {/* 1 */}
          <div className="flex gap-2 *: items-center">
            <span className="text-black font-semibold"> Color:</span>
            <span className=" font-medium text-gray-600">{product.Color}</span>
          </div>

          {/* 2 */}
          <div className="flex gap-2 *: items-center">
            <span className="text-black font-semibold">Brand:</span>
            <span className=" font-medium text-gray-600">{product.Brand}</span>
          </div>
          {/* 3 */}
          <div className="flex gap-2 *: items-center">
            <span className="text-black font-semibold"> PowerSource:</span>
            <span className=" font-medium text-gray-600">
              {product.PowerSource}
            </span>
          </div>
          {/* 4*/}
          <div className="flex gap-2 *: items-center">
            <span className="text-black font-semibold">
              {" "}
              ProductDimensions:
            </span>
            <span className=" font-medium text-gray-600">
              {product.ProductDimensions}
            </span>
          </div>
          {/* 5*/}
          <div className="flex gap-2 *: items-center">
            <span className="text-black font-semibold"> Material:</span>
            <span className=" font-medium text-gray-600">
              {product.Material}
            </span>
          </div>
          {/* 6*/}
          <div className="flex gap-2 *: items-center">
            <span className="text-black font-semibold"> FinishType:</span>
            <span className=" font-medium text-gray-600">
              {product.FinishType}
            </span>
          </div>
          {/* 7*/}
          <div className="flex gap-2 *: items-center">
            <span className="text-black font-semibold"> InstallationType:</span>
            <span className=" font-medium text-gray-600">
              {product.InstallationType}
            </span>
          </div>
          {/* 8*/}
          <div className="flex gap-2 *: items-center">
            <span className="text-black font-semibold"> Heat_Output:</span>
            <span className=" font-medium text-gray-600">
              {product.Heat_Output}
            </span>
          </div>
          {/* 9*/}
          <div className="flex gap-2 *: items-center">
            <span className="text-black font-semibold"> Special_Feature:</span>
            <span className=" font-medium text-gray-600">
              {product.Special_Feature}
            </span>
          </div>
          {/* 10*/}
          <div className="flex gap-2 *: items-center">
            <span className="text-black font-semibold"> Style:</span>
            <span className=" font-medium text-gray-600">{product.Style}</span>
          </div>
          {/* 11*/}
          <div className="flex gap-2 *: items-center">
            <span className="text-black font-semibold"> Room_Type:</span>
            <span className=" font-medium text-gray-600">
              {product.Room_Type}
            </span>
          </div>
          {/* 9*/}
          <div className="flex gap-2 *: items-center">
            <span className="text-black font-semibold"> Ventilation_Type:</span>
            <span className=" font-medium text-gray-600">
              {product.Ventilation_Type}
            </span>
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="p-8 md:pl-20 space-y-4 max-w-6xl ">
        <h2 className="text-2xl font-bold">Product Details</h2>
        {product.detail.map((paragraph, index) => (
          <p key={index} className="text-gray-700 text-sm md:text-lg">
            .{paragraph}
          </p>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
