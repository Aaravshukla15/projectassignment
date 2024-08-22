import { useState } from "react";
import PropTypes from "prop-types";
import "./Dashboard.css";
import Widget from "./Widget";

const Dashboard = ({ data, addWidget, removeWidget }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [newWidgetName, setNewWidgetName] = useState("");
  const [newWidgetText, setNewWidgetText] = useState("");

  const handleAddWidget = () => {
    if (selectedCategoryId && newWidgetName && newWidgetText) {
      addWidget(selectedCategoryId, newWidgetName, newWidgetText);
      setNewWidgetName("");
      setNewWidgetText("");
    }
  };

  return (
    <div className="dashboard-container">
      {data.categories.map((category) => (
        <div key={category.id} className="dashboard-category">
          <h2>{category.name}</h2>
          <div>
            {category.widgets.map((widget) => (
              <Widget
                key={widget.id}
                widget={widget}
                removeWidget={() => removeWidget(category.id, widget.id)}
              />
            ))}
          </div>
        </div>
      ))}

      <div className="add-widget-container">
        <h3>Add Widget</h3>
        <select
          onChange={(e) => setSelectedCategoryId(parseInt(e.target.value))}
          defaultValue=""
        >
          <option value="" disabled>
            Select Category
          </option>
          {data.categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Widget Name"
          value={newWidgetName}
          onChange={(e) => setNewWidgetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={newWidgetText}
          onChange={(e) => setNewWidgetText(e.target.value)}
        />
        <button onClick={handleAddWidget}>+ Add Widget</button>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  data: PropTypes.shape({
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        widgets: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  }).isRequired,
  addWidget: PropTypes.func.isRequired,
  removeWidget: PropTypes.func.isRequired,
};

export default Dashboard;
