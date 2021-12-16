import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import { Home, About } from "../pages";

/* 
Put all of your routes here and they will be imported to App.js
Import all of your components from the index.js file in the root of components folder
*/

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" component={<About />} />
      </Routes>
      {/* <Route path='/<pathname here>' element={<component-name />}/> */}
    </>
  );
};

export default MyRoutes;
