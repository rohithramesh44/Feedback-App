import PropType from "prop-types";
import { Link } from "react-router-dom";

function Header({ text, bgColor, textColor }) {
  const headerStyles = { backgroundColor: bgColor, color: textColor };
  return (
    <header style={headerStyles}>
      <div className="Container">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "#fff", textAlign: "center" }}
        >
          <h1>{text}</h1>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
};
Header.propTypes = {
  text: PropType.string,
};

export default Header;
