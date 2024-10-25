const Banner = () => {
  return (
    <section className="   ">
      <div className="mx-auto  max-w-7xl  px-4 py-32 lg:flex  h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Welcome to Our Store!
            <strong className="font-extrabold  text-[#66D7D1] sm:block">
              {" "}
              Find the best products here
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            We have a wide range of Heater products for you to choose from.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
