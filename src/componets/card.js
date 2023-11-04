"use client";

import React from "react";
import { Share } from "../../public/icons";

const card = ({ category, year, overallMotivation, laureates }) => {
  return (
    <div className="card">
      <div className="card-head">
        <p>{category}</p>
        <p>{year}</p>
      </div>
      {laureates === typeof undefined ||
        (laureates &&
          laureates.map((data) => (
            <div key={data.id} className="single-card">
              <p className="name">
                {data.firstname} {data.surname}
              </p>

              <p className="motivation">{data.motivation}</p>

              <div className="share-container">
                <div className="share-wrap">
                  <Share />
                  <div className="share">{data.share}</div>
                </div>
              </div>
            </div>
          )))}
      {overallMotivation && (
        <div className="card-head">
          <p>{overallMotivation}</p>
        </div>
      )}
    </div>
  );
};

export default card;
