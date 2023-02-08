import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";
import RecipeList from "../RecipeList";
import SearchBar from "../SearchBar";

function Home() {
  const { term } = useContext(RecipeContext);
  return (
    <div className="container mx-auto flex-1 px-4">
      <SearchBar />
      <RecipeList />
    </div>
  );
}

export default Home;
