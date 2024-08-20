/* eslint-disable react/prop-types */

import { useState } from "react";
import CountryData from "./CountryData";

const SingleCountry = ({ name, country }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <p>
        {name}{" "}
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "Hide" : "Show"}
        </button>
      </p>
      {showInfo && <CountryData country={country} />}
    </div>
  );
};

export default SingleCountry;
