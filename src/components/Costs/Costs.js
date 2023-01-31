import "./Costs.css";
import Card from "../UI/Card";
import CostFilter from '../CostFilter/CostsFilter'
import React, {useState} from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

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

    return (
        <div>
            <Card className="costs">
                <CostFilter filterYear={filterYear} onChangeYear={filterYearChangeHandler}/>
                <h2>Композиция расходов</h2>
                <CostsDiagram costs={filteredCosts} />
                <CostList costs={filteredCosts} />
            </Card>
        </div>
    );
}

export default Costs;
