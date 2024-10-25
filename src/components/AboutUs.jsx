// src/components/AboutUs.js

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Welcome to our website! We are committed to providing the best
          experience for our users by delivering high-quality products and
          services.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Our mission is to create value and inspire our community through
          innovation, passion, and dedication.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          With a team of experts from different fields, we are constantly
          striving to exceed expectations and provide solutions that matter.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Thank you for visiting! We hope you enjoy exploring our website.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
