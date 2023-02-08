import { useReducer, useRef } from "react";
import {
  formReducer,
  InitialState,
  ACTION_TYPE,
} from "../../reducers/formReducer/formReducer";

const postRecipe = async (url, recipe) => {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
    method: "POST",
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  window.location = `/recipes/${data.id}`;
};

function CreateRecipe() {
  const [state, dispatch] = useReducer(formReducer, InitialState);
  const ingredientRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    postRecipe("http://localhost:5000/recipes", state);
  };

  const handleChange = (e) => {
    dispatch({
      type: ACTION_TYPE.HANDLE_ONCHANGE,
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (ingredientRef.current.value.length > 2) {
        dispatch({
          type: ACTION_TYPE.ADD_INGREDIENT,
          payload: ingredientRef.current.value,
        });
      }
      ingredientRef.current.value = "";
    }
  };

  const handleClick = (key) => {
    const payload = state.ingredients?.filter((_, index) => index !== key);
    dispatch({ type: ACTION_TYPE.REMOVE_INGREDIENT, payload });
  };
  return (
    <div className="container mx-auto flex-1">
      <h1 className="mb-8 text-center text-3xl md:text-5xl">Create Recipe</h1>
      <form
        autoComplete="off"
        className="mx-auto max-w-xl space-y-4 px-4 lg:max-w-4xl"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="title" className="mb-2 block text-sm">
            Recipe name
          </label>
          <input
            name="title"
            type="text"
            className="block w-full rounded border border-slate-500 p-2"
            placeholder="Recipe name"
            value={state.title}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <label htmlFor="ingredients" className="mb-2 block text-sm">
              Ingredients
            </label>
            <input
              name="ingredients"
              type="text"
              className="block w-full rounded border border-slate-500 p-2"
              placeholder="Insert ingredient"
              ref={ingredientRef}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div>
            <label htmlFor="cookingTime" className="mb-2 block text-sm">
              Cooking time
            </label>
            <input
              name="cookingTime"
              type="number"
              min={0}
              className="block w-full rounded border border-slate-500 p-2"
              placeholder="In minutes"
              value={state.cooKingTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <small>Ingredient List:</small>
          <ul className="list-inside list-disc pl-4">
            {state.ingredients?.length === 0 && <small>No ingredients</small>}
            {state.ingredients?.map((item, index) => (
              <li
                className="hover:cursor-point w-fit after:content-[','] last:after:content-['']"
                key={index}
                onClick={() => handleClick(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <label htmlFor="method" className="mb-2 block text-sm">
            Method
          </label>
          <textarea
            name="method"
            className="w-full rounded border border-slate-500 p-2"
            rows="10"
            value={state.method}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="rounded bg-blue-700 py-2 px-4 text-white duration-150 hover:bg-blue-800">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateRecipe;
