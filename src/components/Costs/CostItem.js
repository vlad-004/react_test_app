import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";

/**
 * Использования этого компонента - пример композиции приложения,
 * для общей композиции используем вместе компоненты + базовый html
 *
 *
 * @param {*} props
 * @returns
 */
function CostItem(props) {
    function changeDescriptionHandler() {
        alert('click to change desription');
    }
  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{props.description}</h2>
        <div className="cost-item__price">$ {props.amount}</div>
          <button onClick={changeDescriptionHandler}>
              CHange desription
          </button>
      </div>
    </Card>
  );
}

export default CostItem;
