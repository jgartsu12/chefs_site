import React from "react";

import BreakfastContainer from "../menus/breakfast-container";
import LunchContainer from "../menus/lunch-container";
import DinnerContainer from "../menus/dinner-container";


export default function() {
  return (
    <div>
      <div>
        <BreakfastContainer />
      </div>
      <div>
        <LunchContainer />
      </div>
      <div>
        <DinnerContainer />
      </div>
    </div>
  );
}