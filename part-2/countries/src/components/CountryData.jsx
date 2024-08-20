/* eslint-disable react/prop-types */

import BasicInfo from "./BasicInfo";
import Flag from "./Flag";
import Languages from "./Languages";

const CountryData = ({ country }) => {
  const { capital, area, languages } = country;
  const name = country.name.common;
  const flag = country.flags.png;
  const languageArray = Object.values(languages);
  return (
    <div>
      <BasicInfo name={name} capital={capital} area={area} />
      <Languages languages={languageArray} />
      <Flag flag={flag} />
    </div>
  );
};

export default CountryData;
