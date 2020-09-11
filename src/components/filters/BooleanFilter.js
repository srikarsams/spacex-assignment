import React, { lazy, Suspense } from 'react';

// CSS
import "./BooleanFilter.css";

// COMPONENTS
const Button = lazy(() => import('../Button'));

export default function BooleanFilter({ type, activeValue, callback }) {
  return (
    <Suspense fallback={() => <p>Loading</p>}>
      <div className="launch-year-filter">
        <h3>{type}</h3>

        <hr />

        <div className="boolean-container">
          <Button
            data={"true"}
            activeData={activeValue}
            callback={callback}
          />
          <Button
            data={"false"}
            activeData={activeValue}
            callback={callback}
          />
        </div>
      </div>
    </Suspense>
  )
}
