import useMessageContext from "~/hooks/useMessageContext";

const Notification = () => {
  const { message } = useMessageContext()

  return (<>
    {message().value !== "" ?
      (<div style={message()?.isError ? errorStyle : normalStyle}>
        {message().value}
      </div>) : <div>{message().value}</div>}
  </>)
};

const normalStyle = {
  color: "green",
  background: "lightgrey",
  fontSize: "20px",
  borderStyle: "solid",
  borderRadius: "5px",
  padding: "10px",
  marginBottom: "10px",
};

const errorStyle = {
  ...normalStyle,
  color: "red",
};

export default Notification;
