import "./Card.css";

/**
 * 
 * карточки элементов к которым примененяется стиль
 * и используется этот стиль в разных местах страницы
 * Таким образом уходит дублирование css , html кода .
 *
 * @param {*} props
 * @returns
 */
function Card(props) {
  let classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
