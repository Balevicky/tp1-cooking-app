import React, { useEffect, useState } from "react";
import Navigation from "../component/Navigation";

import Meals from "../component/Meals";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Meals />
    </div>
  );
};

export default Home;
