import React from 'react';

import "./Card.css";

export default function Card({ data }) {
  if (!data || typeof data !== "object") {
    return null
  }
  return (
    <div className="card">
      {data.links &&
        data.links.mission_patch_small &&
        <img loading="lazy" src={data.links.mission_patch_small} alt={data.mission_name} />}

      {data.mission_name && data.flight_number && <h4>{`${data.mission_name} #${data.flight_number}`}</h4>}

      {data.mission_id && data.mission_id.length ? (
        <div className="misson-id-container">
          <p className="key">Mission Ids:</p>
          <ul>
            {data.mission_id.map(id => {
              return <li key={id}>{id}</li>
            })}
          </ul>
        </div>
      ) : null}

      {data.launch_year ? (
        <div className="row">
          <p className="key">Launch Year:</p>
          <p className="value">{data.launch_year}</p>
        </div>
      ) : null}

      <div className="row">
        <p className="key">Successful Launch:</p>
        <p className="value">{JSON.stringify(!!data.launch_success)}</p>
      </div>

      <div className="row">
        <p className="key">Successful Landing:</p>
        <p className="value">{JSON.stringify(!!data.launch_landing)}</p>
      </div>
    </div>
  )
}
