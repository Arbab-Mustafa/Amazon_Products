import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" border border-b-[#6369D2]">
      <div className="mx-auto max-w-screen-xl px-4 py-4   ">
        <h1 className="text-xl font-bold  font-mono   text-[#1D1F45] md:text-3xl">
          <Link to="/">Xbeauty</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
