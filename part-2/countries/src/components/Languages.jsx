/* eslint-disable react/prop-types */

const Languages = ({ languages }) => {
  return (
    <div>
      <strong>Languages: </strong>
      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
