import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Navigation from "../component/Navigation";
import Meals from "../component/Meals";

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Meals />
    </div>
  );
};

export default Home;
