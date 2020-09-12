import React from "react";

// CONSTANTS
import { SUCCESSFUL_LANDING, SUCCESSFUL_LAUNCH } from "../../constants";

//CSS
import './Filter.css';

// COMPONENTS
import LaunchYearFilter from "./LaunchYearFilter";
import BooleanFilter from "./BooleanFilter";

const Filter = () => {
  return (
    <section className="filter-container">
      <h2>Filters</h2>
      <LaunchYearFilter />
      <BooleanFilter
        type={SUCCESSFUL_LAUNCH}
      />
      <BooleanFilter
        type={SUCCESSFUL_LANDING}
      />
    </section>
  )
}

export default Filter;