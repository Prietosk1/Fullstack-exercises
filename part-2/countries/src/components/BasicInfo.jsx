/* eslint-disable react/prop-types */

const BasicInfo = ({ name, capital, area }) => {
  return (
    <>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Area: {area}</p>
    </>
  );
};

export default BasicInfo;
