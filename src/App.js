import Costs from "./components/Costs/Costs";

// в старых версиях приложений реакт надо было в каждом jsx файле исмпортить реакт - сейчас не нужно
import React from "react";

function App() {
  const costs = [
    {
      date: new Date(2021, 4, 1),
      description: "Холодильник",
      amount: 949.99,
    },
    {
      date: new Date(2021, 3, 1),
      description: "Ноутбук",
      amount: 1549.7,
    },
    {
      date: new Date(2021, 2, 1),
      description: "Джинсы",
      amount: 49.99,
    },
  ];

  // В старых версиях реакт приложений можно увидеть такую конструкцию,
  //  которая аналог того что находится ниже
  
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Начнем изучение Реакт!"),
  //   React.createElement(Costs, { costs: costs })
  // );

  return (
    <div>
      <h1>test project react</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
