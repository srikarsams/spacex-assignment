import React, { useState, useEffect } from 'react';

// HELPERS
import { fetchData, useSearchParams } from './helpers';

// CONSTANTS
import { IS_SUCCESSFUL_LANDING, IS_SUCCESSFUL_LAUNCH, YEAR } from './constants';

// CSS
import './App.css';

// COMPONENTS
import Filter from './components/filters/Filter';
import Card from './components/Card';

export const getQueryData = location => {
  return ({
    [IS_SUCCESSFUL_LANDING]: location.get(IS_SUCCESSFUL_LANDING),
    [IS_SUCCESSFUL_LAUNCH]: location.get(IS_SUCCESSFUL_LAUNCH),
    [YEAR]: location.get(YEAR)
  })
}

function App({ data, reqObj = {} }) {
  let currentURL;
  let location = useSearchParams();

  let obj = {};
  if (!reqObj.isServer) {
    obj = { ...reqObj, ...window.__PRELOADED_STATE__ }
    currentURL = window.location.href;
  }

  const [items, setItems] = useState(obj.data || data || [])
  const [error, setError] = useState(null)
  const [queryParams, setQueryParams] = useState(getQueryData(location))

  useEffect(() => {
    console.log("change in url")
    setQueryParams(getQueryData(location))
  }, [currentURL])

  useEffect(() => {
    console.log("change in values")
    fetchData({ setItems, setError, ...queryParams })
  }, [queryParams])

  if (error) {
    return <div>Something went wrong</div>
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>SpaceX Launch Programs</h3>
      </header>
      <main>
        <Filter />
        <section className="card-container">
          {items.length ? items.map(item => {
            return <Card data={item} key={item.flight_number} />
          }) : <p className="no-data">No Missions</p>}
        </section>
      </main>
    </div>
  );
}

export default App;
