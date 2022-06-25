import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onShowForm, formShown }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={formShown ? 'red' : 'green'}
        text={formShown ? 'Close' : 'Add'}
        onClick={onShowForm}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "DEFAULT",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
