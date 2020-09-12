import React from 'react';

// CONSTANTS
import {
  IS_SUCCESSFUL_LANDING,
  IS_SUCCESSFUL_LAUNCH,
  SUCCESSFUL_LANDING
} from '../../constants';

// CSS
import "./BooleanFilter.css";

// COMPONENTS
import Button from "../Button";

export default function BooleanFilter({ type }) {
  return (
    <div className="launch-year-filter">
      <h3>{type}</h3>

      <hr />

      <div className="boolean-container">
        <Button
          data={"true"}
          filterType={
            type === SUCCESSFUL_LANDING ? IS_SUCCESSFUL_LANDING : IS_SUCCESSFUL_LAUNCH
          }
        />
        <Button
          data={"false"}
          filterType={
            type === SUCCESSFUL_LANDING ? IS_SUCCESSFUL_LANDING : IS_SUCCESSFUL_LAUNCH
          }
        />
      </div>
    </div>
  )
}
