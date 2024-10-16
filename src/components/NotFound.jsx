const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <h2 className="text-3xl text-gray-600">Page Not Found</h2>
        <p className="mt-4 text-lg text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="mt-8 inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
