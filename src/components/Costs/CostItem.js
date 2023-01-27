import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React, { useState } from "react";

/**
 * Использования этого компонента - пример композиции приложения,
 * для общей композиции используем вместе компоненты + базовый html
 *
 *
 * @param {*} props
 * @returns
 */
function CostItem(props) {

    const [description, setDescription] = useState(props.description); // деструктуризация - todo: попросить Артема обьяснить и есть ли аналог этой записи

    function changeDescriptionHandler() {
        // description = 'new text ..' & CostItem(props)
        setDescription('new description text');
        // console.log('costItemDescription : '+description);
    }

  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">$ {props.amount}</div>
          <button onClick={changeDescriptionHandler}>
              CHange desription
          </button>
      </div>
    </Card>
  );
}

export default CostItem;
