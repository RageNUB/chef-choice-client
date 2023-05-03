import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const ChefRecipes = () => {
  const chefInfo = useLoaderData();

  const {
    name,
    image_url,
    bio,
    num_recipes,
    years_experience,
    likes_count,
    recipes,
  } = chefInfo;

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-secondary items-center">
        <div className="px-5">
          <h3 className="text-5xl font-bold text-center text-primary mb-6">{name}</h3>
          <h5 className="text-center text-neutral text-xl font-semibold">{bio}</h5>
          <div className="flex justify-between mt-8 px-7">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary">{num_recipes}</h3>
              <p className="text-xl font-bold text-orange-400">Number of Recipes</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary">{years_experience}</h3>
              <p className="text-xl font-bold text-orange-400">Years of Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary">{likes_count}</h3>
              <p className="text-xl font-bold text-orange-400">Total Likes</p>
            </div>
          </div>
        </div>
        <div>
          <img className="rounded-full px-5" src={image_url} alt="" />
        </div>
      </div>

      <div className="px-8 mb-5 mt-12">
        <h2 className="text-2xl font-bold text-center mb-8">Here are some Recipes of <span className="text-primary uppercase">{name}</span></h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {
            recipes.map((recipe, index) => <RecipeCard
            key={index}
            recipe={recipe}
            ></RecipeCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
