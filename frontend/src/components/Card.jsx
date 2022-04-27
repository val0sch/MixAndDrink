import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@assets/Card.css";

function Card() {
  // usestate drink de test avant l api
  const drinks = [
    {
      idDrink: "11007",
      strDrink: "Margarita",
      strDrinkAlternate: null,
      strTags: "IBA,ContemporaryClassic",
      strVideo: null,
      strCategory: "Ordinary Drink",
      strIBA: "Contemporary Classics",
      strAlcoholic: "Alcoholic",
      strGlass: "Cocktail glass",
      strInstructions:
        "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
      strInstructionsES: null,
      strInstructionsDE:
        "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
      strInstructionsFR: null,
      strInstructionsIT:
        "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      strIngredient1: "Tequila",
      strIngredient2: "Triple sec",
      strIngredient3: "Lime juice",
      strIngredient4: "Salt",
      strIngredient5: null,
      strIngredient6: null,
      strIngredient7: null,
      strIngredient8: null,
      strIngredient9: null,
      strIngredient10: null,
      strIngredient11: null,
      strIngredient12: null,
      strIngredient13: null,
      strIngredient14: null,
      strIngredient15: null,
      strMeasure1: "1 1/2 oz ",
      strMeasure2: "1/2 oz ",
      strMeasure3: "1 oz ",
      strMeasure4: null,
      strMeasure5: null,
      strMeasure6: null,
      strMeasure7: null,
      strMeasure8: null,
      strMeasure9: null,
      strMeasure10: null,
      strMeasure11: null,
      strMeasure12: null,
      strMeasure13: null,
      strMeasure14: null,
      strMeasure15: null,
      strImageSource:
        "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
      strImageAttribution: "Cocktailmarler",
      strCreativeCommonsConfirmed: "Yes",
      dateModified: "2015-08-18 14:42:59",
    },
    {
      idDrink: "11118",
      strDrink: "Blue Margarita",
      strDrinkAlternate: null,
      strTags: null,
      strVideo: null,
      strCategory: "Ordinary Drink",
      strIBA: null,
      strAlcoholic: "Alcoholic",
      strGlass: "Cocktail glass",
      strInstructions:
        "Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.",
      strInstructionsES: null,
      strInstructionsDE:
        "Den Rand des Cocktailglases mit Limettensaft einreiben. Den Rand in grobes Salz tauchen. Tequila, blauen Curacao und Limettensaft mit Eis schütteln, in das mit Salz umhüllte Glas abseihen und servieren.",
      strInstructionsFR: null,
      strInstructionsIT:
        "Strofinare il bordo del bicchiere da cocktail con succo di lime. Immergere il bordo nel sale grosso. Shakerare tequila, blue curacao e succo di lime con ghiaccio, filtrare nel bicchiere bordato di sale e servire.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
      strIngredient1: "Tequila",
      strIngredient2: "Blue Curacao",
      strIngredient3: "Lime juice",
      strIngredient4: "Salt",
      strIngredient5: null,
      strIngredient6: null,
      strIngredient7: null,
      strIngredient8: null,
      strIngredient9: null,
      strIngredient10: null,
      strIngredient11: null,
      strIngredient12: null,
      strIngredient13: null,
      strIngredient14: null,
      strIngredient15: null,
      strMeasure1: "1 1/2 oz ",
      strMeasure2: "1 oz ",
      strMeasure3: "1 oz ",
      strMeasure4: "Coarse ",
      strMeasure5: null,
      strMeasure6: null,
      strMeasure7: null,
      strMeasure8: null,
      strMeasure9: null,
      strMeasure10: null,
      strMeasure11: null,
      strMeasure12: null,
      strMeasure13: null,
      strMeasure14: null,
      strMeasure15: null,
      strImageSource: null,
      strImageAttribution: null,
      strCreativeCommonsConfirmed: "Yes",
      dateModified: "2015-08-18 14:51:53",
    },
    {
      idDrink: "17216",
      strDrink: "Tommy's Margarita",
      strDrinkAlternate: null,
      strTags: "IBA,NewEra",
      strVideo: null,
      strCategory: "Ordinary Drink",
      strIBA: "New Era Drinks",
      strAlcoholic: "Alcoholic",
      strGlass: "Old-Fashioned glass",
      strInstructions: "Shake and strain into a chilled cocktail glass.",
      strInstructionsES: null,
      strInstructionsDE:
        "Schütteln und in ein gekühltes Cocktailglas abseihen.",
      strInstructionsFR: null,
      strInstructionsIT:
        "Shakerare e filtrare in una coppetta da cocktail ghiacciata.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg",
      strIngredient1: "Tequila",
      strIngredient2: "Lime Juice",
      strIngredient3: "Agave syrup",
      strIngredient4: null,
      strIngredient5: null,
      strIngredient6: null,
      strIngredient7: null,
      strIngredient8: null,
      strIngredient9: null,
      strIngredient10: null,
      strIngredient11: null,
      strIngredient12: null,
      strIngredient13: null,
      strIngredient14: null,
      strIngredient15: null,
      strMeasure1: "4.5 cl",
      strMeasure2: "1.5 cl",
      strMeasure3: "2 spoons",
      strMeasure4: null,
      strMeasure5: null,
      strMeasure6: null,
      strMeasure7: null,
      strMeasure8: null,
      strMeasure9: null,
      strMeasure10: null,
      strMeasure11: null,
      strMeasure12: null,
      strMeasure13: null,
      strMeasure14: null,
      strMeasure15: null,
      strImageSource: null,
      strImageAttribution: null,
      strCreativeCommonsConfirmed: "No",
      dateModified: "2017-09-02 18:37:54",
    },
  ];

  const [button, setButton] = useState(false);
  function clickButton() {
    setButton(!button);
  }
  return (
    <div>
      <div className="vignette">
        {drinks.map((nameDrink) => (
          <article className="articleVignette" key={nameDrink.idDrink}>
            <Link to="/show-cocktail">
              <img
                className="imgCocktail"
                src={nameDrink.strDrinkThumb}
                alt="cocktail"
              />
            </Link>
            <div className="blocText">
              <button onClick={clickButton} type="button">
                {button ? (
                  <i id={nameDrink.idDrink} className="fa-regular fa-heart" />
                ) : (
                  <i id={nameDrink.idDrink} className="fa-solid fa-heart" />
                )}
              </button>
              <h2>{nameDrink.strDrink}</h2>
              <p>cocktail recipe</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Card;
