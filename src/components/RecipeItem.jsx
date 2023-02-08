import { Link } from "react-router-dom";
function RecipeItem({ item, isRotate = false }) {
  return (
    <div
      className={`space-y-2 rounded border border-black p-4 transition-all duration-150 ${
        isRotate ? "hover:rotate-1" : ""
      }`}
    >
      <h2 className="text-xl font-bold">{item?.title}</h2>
      <p>{item?.method.substring(0, 100)}...</p>
      <Link
        to={`/recipes/${item?.id}`}
        className="mx-auto block w-fit rounded bg-green-500 py-1 px-2 text-white"
      >
        Cook this
      </Link>
    </div>
  );
}

export default RecipeItem;
