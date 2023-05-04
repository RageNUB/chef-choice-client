import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import LazyLoad from "react-lazy-load";

const RecipeCard = (props) => {
  const [disable, setDisable] = useState(false);
  const { name, photo, ingredients, cooking_method, rating } = props.recipe;

  const handleToast = () => {
    toast.success("Added to Favorite", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setDisable(true);
  };
  return (
    <div>
      <div className="card w-fit bg-base-100 shadow-xl">
        <figure>
          <LazyLoad>
            <img className="rounded-lg" src={photo} alt="Shoes" />
          </LazyLoad>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div>
            <p className="text-lg font-semibold">Ingredients: </p>
            <ul>
              {ingredients.map((i, ix) => (
                <li className="list-disc ml-5" key={ix}>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-2">
            <p className="text-lg font-semibold">Cooking Method: </p>
            <p>{cooking_method}</p>
          </div>
          <div className="flex gap-3 items-center mt-2">
            <Rating
              value={rating}
              style={{ maxWidth: "120px" }}
              readOnly
            ></Rating>
            <p className="font-semibold text-right">{rating}</p>
          </div>
          <div className="card-actions mt-3">
            <button
              onClick={handleToast}
              disabled={disable}
              className="btn btn-primary w-full text-white"
            >
              Add to Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
