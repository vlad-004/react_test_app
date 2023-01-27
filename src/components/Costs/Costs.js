import "./Costs.css";
import CostItem from "./CostItem.js";
import Card from "../UI/Card";
import CostFilter from '../CostFilter/CostsFilter'
import React, {useState} from "react";

const Costs = (props) => {
    const costs = props.costs;

    const [filterYear, setFilterYear] = useState('2021');
    const filterYearChangeHandler = (changedYear) => {
        setFilterYear(changedYear);
    };

    return (
        <div>
            <Card className="costs">
                <CostFilter filterYear={filterYear} onChangeYear={filterYearChangeHandler}/>
                <h2>Композиция расходов</h2>
                <CostItem
                    date={costs[0].date}
                    description={costs[0].description}
                    amount={costs[0].amount}
                />
                <CostItem
                    date={costs[1].date}
                    description={costs[1].description}
                    amount={costs[1].amount}
                />
                <CostItem
                    date={costs[2].date}
                    description={costs[2].description}
                    amount={costs[2].amount}
                />
            </Card>
        </div>
    );
}

export default Costs;
