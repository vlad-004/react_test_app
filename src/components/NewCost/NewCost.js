import CostForm from "./CostForm";
import './NewCost.css';
import {useState} from "react";

const NewCost = (props) => {

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        }
        props.onAddCost(costData);
        setIsFormVisible(false);
    }

    const [isFormVisible, setIsFormVisible] = useState(false);
    const cancelCostHandler = () => {
        setIsFormVisible(false);
    };
    const inputCostDataHandler = () => {
        setIsFormVisible(true)
    };

    let newCostContent = isFormVisible
        ? <CostForm onCancel={cancelCostHandler} onSaveCostData={saveCostDataHandler}/>
        : <button onClick={inputCostDataHandler} type='button'>Добавить новый расход</button>
    ;

    return <div className='new-cost'>
        {newCostContent}
    </div>
}

export default NewCost;