/* eslint-disable react/prop-types */

const Flag = ({ flag }) => {
  const flagShadow = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };
  return <img src={flag} style={flagShadow} />;
};

export default Flag;
