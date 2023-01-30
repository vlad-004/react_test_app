import "./Costs.css";
import CostItem from "./CostItem.js";
import Card from "../UI/Card";
import CostFilter from '../CostFilter/CostsFilter'
import React, {useState} from "react";

const Costs = (props) => {
    const costs = props.costs;

    const [filterYear, setFilterYear] = useState('');
    const filterYearChangeHandler = (year) => {
        setFilterYear(year);
    };

    // function testMap () {
    //    let test=  costs.map((cost) => (
    //         <CostItem
    //             date={cost.date}
    //             description={cost.description}
    //             amount={cost.amount}
    //         />
    //     ));
    //     console.log(test);
    // }
    //
    // testMap();

    //TODO: не могу понять почему при этой конструкции получаю в консоли ошибку но при этом все работает.
    //react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.

    return (
        <div>
            <Card className="costs">
                <CostFilter filterYear={filterYear} onChangeYear={filterYearChangeHandler}/>
                <h2>Композиция расходов</h2>
                {costs
                    .filter(
                        (cost) => filterYear
                            ? new Date(cost.date).getFullYear() == filterYear
                            : cost
                    )
                    .map((cost) => (
                        <CostItem
                            key={cost.id}
                            date={cost.date}
                            description={cost.description}
                            amount={cost.amount}
                        />
                    ))}
            </Card>
        </div>
    );
}

export default Costs;
