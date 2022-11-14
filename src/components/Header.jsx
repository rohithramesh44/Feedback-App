import PropType from "prop-types";

function Header({ text, bgColor, textColor }) {
  const headerStyles = { backgroundColor: bgColor, color: textColor };
  return (
    <header style={headerStyles}>
      <div className="Container">
        <h1>{text}</h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "This is Feedback App",
};
Header.propTypes = {
  text: PropType.string,
};

export default Header;
