import React from "react";

const Card = ({ datameal }) => {
  return (
    <div>
      <li className="card">
        <h2> {datameal.strMeal} </h2>

        <span>Origin: {datameal.strArea} </span>
        <img
          src={datameal.strMealThumb}
          alt={"photo de" + datameal.strMealThumb}
        ></img>
        <p>{datameal.strInstructions}</p>
      </li>
    </div>
  );
};

export default Card;
