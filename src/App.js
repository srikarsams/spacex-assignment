import React, { useState, useCallback, lazy, Suspense } from 'react';

// HELPERS
import { fetchData } from './helpers';

// CSS
import './App.css';

// COMPONENTS
const Filter = lazy(() => import('./components/filters/Filter'));
const Card = lazy(() => import('./components/Card'));

function App({ data, reqObj = {} }) {
  let obj = {};
  if (!reqObj.isServer) {
    obj = { ...reqObj, ...window.__PRELOADED_STATE__ }
  }

  const [items, setItems] = useState(obj.data || data || [])
  const [error, setError] = useState(false)

  const triggerApi = useCallback(
    (data) => {
      fetchData({ ...data, setItems, setError })
    },
    [],
  )

  if (error) {
    return <div>Something went wrong!</div>
  }

  return (
    <Suspense fallback={() => <p>Loading</p>}>
      <div className="App">
        <header className="App-header">
          <h3>SpaceX Launch Programs</h3>
        </header>
        <main>
          <Filter triggerApi={triggerApi} reqObj={reqObj} />
          <section className="card-container">
            {items.length ? items.map(item => {
              return <Card data={item} key={item.flight_number} />
            }) : <p className="no-data">Loading...</p>}
          </section>
        </main>
      </div>
    </Suspense>
  );
}

export default App;
