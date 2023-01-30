import "./CostsFilter.css";

const CostsFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };
  // console.log('costfilter: ' + props.filterYear)

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Выбор По Году</label>
        <select value={props.filterYear} onChange={yearChangeHandler}>
          <option value="">Все записи</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
