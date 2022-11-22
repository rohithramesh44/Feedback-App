import spinner from "../assets/30.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="loading...."
      style={{ width: "100px", margin: "auto", display: "block" }}
    ></img>
  );
}

export default Spinner;
