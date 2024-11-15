const Notification = ({ message }) => {
  const styleError = {
    color: "red",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };
  if (!message) {
    return null;
  }

  return <div style={styleError} className="error">{message}</div>;
};
export default Notification;