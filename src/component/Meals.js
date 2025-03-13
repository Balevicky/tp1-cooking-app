import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Meals = () => {
  const [dataMeal, setDataMeal] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const checkMeal = (meal) => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + meal)
      .then((res) => setDataMeal(res.data.meals));
  };

  useEffect(() => {
    checkMeal(inputValue);
  }, []);
  const handleinput = (e) => {
    e.preventDefault();
    setInputValue("");
    setInputValue(e.target.value);
    // console.log(e.target.value);

    // console.log(inputValue);
    // if (inputValue == null) {
    //   alert("aucune repat trouvé");
    // } else {
    checkMeal(inputValue);
    // }
  };
  return (
    <div>
      <form>
        <label htmlFor="search">Entrez le nom d'un aliment (en anglais)</label>{" "}
        <br />
        <input
          type="text"
          id="search"
          placeholder="ex: beef"
          onChange={handleinput}
        ></input>
      </form>

      <ul id="result">
        {dataMeal === null ? (
          <h2>Aucun plat trouvé</h2>
        ) : (
          dataMeal.map((datameal, index) => (
            //   <li key={index}>{datmeal.strMeal} </li>
            <Card key={index} datameal={datameal} />
          ))
        )}
      </ul>
    </div>
  );
};

export default Meals;
