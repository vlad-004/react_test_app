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
                {filteredCosts.map((cost) => (
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
