import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import RecipeItem from "../RecipeItem";
import SearchBar from "../SearchBar";

function SearchRecipe() {
  const [searchParams] = useSearchParams();
  const term = searchParams.get("q");

  const { data, error, loading } = useFetch(
    `http://localhost:5000/recipes?q=${term}`
  );
  console.log(data);
  if (loading) {
    return <h2 className="text-center text-xl font-bold">Loading...</h2>;
  }

  if (error) {
    return (
      <h2 className="text-center text-xl font-bold text-red-500">
        {error.message}
      </h2>
    );
  }
  return (
    <div className="container mx-auto flex-1 px-4">
      <SearchBar />
      <p className="mb-4 text-lg">
        Search Result for: <span className="font-bold">{term}</span>
      </p>
      {data?.length === 0 && (
        <h2 className="text-center text-2xl font-bold">No Result Found</h2>
      )}
      <div className="mx-auto grid max-w-lg grid-cols-1 gap-4">
        {data?.map((item) => (
          <RecipeItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SearchRecipe;
