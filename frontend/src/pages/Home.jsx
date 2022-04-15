import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ShowCocktail from "../components/ShowCocktail";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [cocktails] = useState([
    "Margarita",
    "Blue Margarita",
    "Mojito",
    "Old Fashioned",
    "Whiskey Sour",
  ]);

  const drinks = {
    strDrink: "Margarita",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    strIngredient1: "Tequila",
    strIngredient2: "Triple sec",
    strIngredient3: "Lime juice",
    strIngredient4: "Salt",
    strIngredient5: null,
    strIngredient6: null,
    strMeasure1: "1 1/2 oz ",
    strMeasure2: "1/2 oz ",
    strMeasure3: "1 oz ",
    strMeasure4: null,
    strMeasure5: null,
    strInstructions:
      "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
  };

  return (
    <div>
      <header className="App-header" />
      <main>
        <SearchBar
          searchValue={searchValue}
          handleSearchValue={setSearchValue}
        />
        {cocktails
          .filter((cocktail) => cocktail.includes(searchValue))
          .map((cocktail) => (
            <p>{cocktail}</p>
          ))}
        <ShowCocktail drinks={drinks} />
        <Card />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
