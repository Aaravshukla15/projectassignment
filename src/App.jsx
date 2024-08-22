import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

const initialData = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Widget 1", text: "Random text for Widget 1" },
        { id: 2, name: "Widget 2", text: "Random text for Widget 2" },
      ],
    },
    {
      id: 2,
      name: "Another Category",
      widgets: [{ id: 3, name: "Widget 3", text: "Random text for Widget 3" }],
    },
  ],
};

function App() {
  const [data, setData] = useState(initialData);

  const addWidget = (categoryId, widgetName, widgetText) => {
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      text: widgetText,
    };

    const updatedCategories = data.categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: [...category.widgets, newWidget],
        };
      }
      return category;
    });

    setData({ categories: updatedCategories });
  };

  const removeWidget = (categoryId, widgetId) => {
    const updatedCategories = data.categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.filter((widget) => widget.id !== widgetId),
        };
      }
      return category;
    });

    setData({ categories: updatedCategories });
  };

  return (
    <div className="App">
      <Dashboard
        data={data}
        addWidget={addWidget}
        removeWidget={removeWidget}
      />
    </div>
  );
}

export default App;
