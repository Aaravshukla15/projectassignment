import PropTypes from "prop-types";
import "./Dashboard.css";
import "./Widgets.css";

const Widget = ({ widget, removeWidget }) => {
  return (
    <div className="widget">
      <h4>{widget.name}</h4>
      <p>{widget.text}</p>
      <button onClick={removeWidget}>Remove Widget</button>
    </div>
  );
};

// Add prop-types validation
Widget.propTypes = {
  widget: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  removeWidget: PropTypes.func.isRequired,
};

export default Widget;
