import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="mb-8 bg-violet-500 p-4 text-white shadow-xl">
      <div className="container mx-auto flex justify-between">
        {/* Navbrad */}
        <Link to={"/"} className="text-2xl font-bold uppercase">
          Recipe App
        </Link>
        {/* Nav button */}
        <div className="space-x-4">
          <Link
            to={"/create"}
            className="rounded border border-white py-2 px-4 duration-150 hover:bg-slate-700"
          >
            Create
          </Link>
          <Link
            to={"/about"}
            className="rounded border border-white py-2 px-4 duration-150 hover:bg-slate-700"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
