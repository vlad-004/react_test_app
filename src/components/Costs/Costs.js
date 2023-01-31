import "./Costs.css";
import CostItem from "./CostItem.js";
import Card from "../UI/Card";
import CostFilter from '../CostFilter/CostsFilter'
import React, {useState} from "react";

const Costs = (props) => {
    const [filterYear, setFilterYear] = useState('');
    const filterYearChangeHandler = (year) => {
        setFilterYear(year);
    };

    /**
     * Если в фильтре не указана дата(год) - тогда выводим все расходы за все время.
     */
    const filteredCosts = props.costs.filter(
        (cost) => {
            return filterYear
                ? cost.date.getFullYear().toString() === filterYear
                : true;
        }
    );

    let costsContent = <p>В этом году расходов нет</p>;
    if (filteredCosts.length > 0) {
        costsContent = filteredCosts.map((cost) => (
            <CostItem
                key={cost.id}
                date={cost.date}
                description={cost.description}
                amount={cost.amount}
            />
        ));
    }

    return (
        <div>
            <Card className="costs">
                <CostFilter filterYear={filterYear} onChangeYear={filterYearChangeHandler}/>
                <h2>Композиция расходов</h2>
                {costsContent}
            </Card>
        </div>
    );
}

export default Costs;
