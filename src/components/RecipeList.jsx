import { useFetch } from "../hooks/useFetch";
import RecipeItem from "./RecipeItem";

function RecipeList() {
  const { data, error, loading } = useFetch("http://localhost:5000/recipes");

  if (loading) {
    return <h3 className="text-center text-xl font-bold">Loading...</h3>;
  }

  if (error) {
    return (
      <h3 className="text-center text-xl font-bold text-red-500">
        {error.message}
      </h3>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((item) => (
        <RecipeItem key={item.id} item={item} isRotate={true} />
      ))}
    </div>
  );
}

export default RecipeList;
