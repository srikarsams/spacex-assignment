import React, { useState, useEffect, lazy, Suspense } from "react";

//CSS
import './Filter.css';


// COMPONENTS
const LaunchYearFilter = lazy(() => import('./LaunchYearFilter'));
const BooleanFilter = lazy(() => import('./BooleanFilter'));

const Filter = ({ triggerApi, reqObj = {} }) => {
  let obj = { ...reqObj }

  if (!reqObj.isServer) {
    obj = { ...reqObj, ...window.__PRELOADED_STATE__ }
  }

  const [isSuccessfulLaunch, setSuccessfulLaunch] = useState(
    (typeof obj.isSuccessfulLaunch !== "undefined" && `${obj.isSuccessfulLaunch}`) || null
  );

  const [isSuccessfulLanding, setSuccessfulLanding] = useState(
    (typeof obj.isSuccessfulLanding !== "undefined" && `${obj.isSuccessfulLanding}`) || null
  );

  const [year, setYear] = useState(
    (typeof obj.year !== "undefined" && Number(obj.year)) || null
  );

  useEffect(() => {
    triggerApi({
      isSuccessfulLaunch,
      isSuccessfulLanding,
      year
    })
  }, [isSuccessfulLaunch, isSuccessfulLanding, year, triggerApi])

  return (
    <Suspense fallback={() => <p>Loading</p>}>
      <section className="filter-container">
        <h2>Filters</h2>
        <LaunchYearFilter setYear={setYear} activeYear={year} />
        <BooleanFilter
          type={"Successful Launch"}
          callback={setSuccessfulLaunch}
          activeValue={isSuccessfulLaunch}
        />
        <BooleanFilter
          type={"Successful Landing"}
          callback={setSuccessfulLanding}
          activeValue={isSuccessfulLanding}
        />
      </section>
    </Suspense>
  )
}

export default Filter;