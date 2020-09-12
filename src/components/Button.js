import React from 'react';
import { useHistory } from "react-router-dom";

// HELPERS
import { useSearchParams } from "../helpers";

// CONSTANTS
import {
  IS_SUCCESSFUL_LANDING,
  IS_SUCCESSFUL_LAUNCH,
  YEAR
} from "../constants";

// CSS
import "./Button.css";

export default function Button({ data, filterType }) {
  const history = useHistory();
  const location = useSearchParams();

  const navigate = () => {
    const urlObj = new URL(window.location.href)
    if (
      filterType === IS_SUCCESSFUL_LANDING &&
      data !== location.get(IS_SUCCESSFUL_LANDING)
    ) {
      urlObj.searchParams.set(IS_SUCCESSFUL_LANDING, data)
    } else if (
      filterType === IS_SUCCESSFUL_LAUNCH &&
      data !== location.get(IS_SUCCESSFUL_LAUNCH)
    ) {
      urlObj.searchParams.set(IS_SUCCESSFUL_LAUNCH, data)
    } else if (
      filterType === YEAR &&
      data !== location.get(YEAR)
    ) {
      urlObj.searchParams.set(YEAR, data)
    }
    history.push(`/${urlObj.search}`)
  }
  return (
    <div
      className={`filter-button ${location.get(filterType) === data ? "active" : ""}`}
      onClick={navigate}
    >
      {data}
    </div>
  )
}
