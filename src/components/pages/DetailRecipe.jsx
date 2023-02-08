import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

function DetailRecipe() {
  const { recipeId } = useParams();
  const { data, loading, error } = useFetch(
    `http://localhost:5000/recipes/${recipeId}`
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
    <div className="container mx-auto space-y-4 rounded p-4 md:border md:border-black lg:max-w-6xl">
      <h2 className="text-center text-xl font-bold md:text-4xl">
        {data?.title}
      </h2>
      <p>Take {data?.cookingTime} to cook.</p>
      <h3 className="text-lg font-bold">Ingredients</h3>
      <ul className="pl-4">
        {data?.ingredients?.map((item) => (
          <li key={item} className="after:content-[','] last:after:content-[]">
            {item}
          </li>
        ))}
      </ul>
      <h3
        className="text-lg font-bold
      "
      >
        Methods
      </h3>
      <p>{data?.method}</p>
      <Link
        to={"/"}
        className="mx-auto block w-fit rounded bg-green-500 py-1 px-2 text-white"
      >
        Back to home
      </Link>
    </div>
  );
}

export default DetailRecipe;
