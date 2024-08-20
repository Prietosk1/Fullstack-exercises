/* eslint-disable react/prop-types */
const Notification = ({ isError, message }) => {
  const containerStyle = {
    color: isError ? "red" : "green",
    backgroundColor: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  return <div style={containerStyle}>{message}</div>;
};

export default Notification;
