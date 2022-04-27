import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "@components/SearchBar";
import "../assets/navbar.css";

function NavBar() {
  const [searchValue, setSearchValue] = useState("");
  const [cocktails] = useState(["Margarita", "Mojito"]);
  return (
    <div className="full-navigation">
      <nav className="navigation">
        <ul className="navigation-bar">
          <li className="navigation-name">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation-name">
            <Link to="/random">Random Cocktail</Link>
          </li>
          <li className="navigation-name">
            <Link to="/popular-cocktail">Popular Cocktail</Link>
          </li>
        </ul>
        <SearchBar
          searchValue={searchValue}
          handleSearchValue={setSearchValue}
        />
        {cocktails
          .filter((cocktail) => cocktail.includes(searchValue))
          .map((cocktail) => (
            <p>{cocktail}</p>
          ))}
      </nav>
    </div>
  );
}

export default NavBar;
