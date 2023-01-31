import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

// в старых версиях приложений реакт надо было в каждом jsx файле исмпортить реакт - сейчас не нужно
// нужно лишь в том случае если мы хотим использовать состояния
import React, {useState}from "react";

const INITIAL_COSTS = [
    {
        id:'c1',
        date: new Date(2021, 3, 1),
        description: "Джинсы",
        amount: 49.99,
    },
    {
        id:'c2',
        date: new Date(2022, 3, 1),
        description: "Ноутбук",
        amount: 1549.7,
    },
    {
        id:'c3',
        date: new Date(2023, 2, 1),
        description: "Джинсы",
        amount: 49,
    },
    {
        id:'c4',
        date: new Date(2021, 11, 1),
        description: "MacBook",
        amount: 1254.72,
    },
];

function App() {
  // В старых версиях реакт приложений можно увидеть такую конструкцию,
  //  которая аналог того что находится ниже

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Начнем изучение Реакт!"),
  //   React.createElement(Costs, { costs: costs })
  // );

    const [costs, setCosts] = useState(INITIAL_COSTS);
    const addCostHandler = (cost) => {
       //TODO: как этот react понимает откуда взять переменную prevCosts ? спросить Артема
       setCosts(prevCosts => {
           return [cost, ...prevCosts]
       });
    }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
