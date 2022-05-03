import React, { useState, useEffect } from "react";
import "../assets/showCocktail.css";
import "../assets/style.css";
import { getCocktailRandom } from "@services/getCocktail";

function Random() {
  const [cocktail, setCocktail] = useState({});

  // Appel API

  useEffect(() => {
    getCocktailRandom().then((data) => setCocktail(data));
  }, []);

  const [button, setButton] = useState(false);
  function clickButton() {
    setButton(!button);
  }

  return (
    <div className="cocktailContainer">
      <button type="button" className="moreRandom">
        Click for more random recipes!
      </button>
      <div className="drinkName">
        <h1>{cocktail.title}</h1>
        <p className="fav">
          Ajouter dans mes favoris{" "}
          <button onClick={clickButton} type="button" className="heart">
            {button ? (
              <i id={cocktail.id} className="fa-solid fa-heart" />
            ) : (
              <i id={cocktail.id} className="fa-regular fa-heart" />
            )}
          </button>
        </p>
      </div>

      <img src={cocktail.image} alt={cocktail.image} />

      <div className="ingredients">
        <h2>Ingredients</h2>
        <div className="list-ingredients-quantity">
          <ul>
            {cocktail.ingredients &&
              cocktail.ingredients.map((ingredient) => (
                <li key={cocktail.id}>{ingredient}</li>
              ))}
          </ul>
          <ul>
            {cocktail.quantity &&
              cocktail.quantity.map((measure) => (
                <li key={cocktail.id}>{measure}</li>
              ))}
          </ul>
        </div>
      </div>
      <div className="row" />
      <div className="recipe">
        <h2>
          <i className="em em-tropical_drink" aria-label="TROPICAL DRINK" />
          Recipe
        </h2>
        <p>{cocktail.instructions}</p>
      </div>
    </div>
  );
}

export default Random;
