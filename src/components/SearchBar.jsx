import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";

function SearchBar() {
  const { setTerm, term } = useContext(RecipeContext);
  const navigate = useNavigate();
  const termRef = useRef();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setTerm(termRef.current.value);
      navigate(`/search?q=${termRef.current.value}`);
    }
  };

  const handleClick = () => {
    setTerm(termRef.current.value);
    navigate(`/search?q=${termRef.current.value}`);
  };

  return (
    <>
      {/* Search bar */}
      <div className="relative mb-4 max-w-md">
        <input
          type="text"
          placeholder="Search recipe"
          className="w-full rounded border border-slate-500 p-4 py-1 px-2 pr-[4.5rem] focus:outline-none "
          ref={termRef}
          onKeyDown={handleEnter}
        />
        <button
          onClick={handleClick}
          className="absolute inset-y-0 right-0 rounded rounded-l-none border border-slate-500 bg-slate-900 px-2 text-white"
        >
          Search
        </button>
      </div>
    </>
  );
}

export default SearchBar;
