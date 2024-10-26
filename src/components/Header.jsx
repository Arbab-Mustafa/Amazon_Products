import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" border border-b-[#6369D2]">
      <div className="mx-auto max-w-screen-xl px-4 py-4  flex  justify-between gap-2 items-center">
        <h1 className="text-xl font-bold  font-mono    text-[#1D1F45] md:text-3xl  ">
          <Link to="/">Xbeauty</Link>
        </h1>
        <div>
          <nav className="flex gap-4 mt-4 items-center justify-center ">
            <Link
              to="/"
              className="text-sm font-semibold text-[#1D1F45] hover:text-[#6369D2]"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-semibold text-[#1D1F45] hover:text-[#6369D2]"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
