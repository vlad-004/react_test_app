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
    }

    const hideForm = () => {
        const content = <button onClick={showForm} type='button'>Добавить новый расход</button>
        setNewCostContent(content);
    };
    const showForm = () => {
        let content = <CostForm onHiddenForm={hideForm} onSaveCostData={saveCostDataHandler}/>;
        setNewCostContent(content)
    };

    let [newCostContent, setNewCostContent] = useState(<button onClick={showForm} type='button'>Добавить новый
        расход</button>);

    return <div className='new-cost'>
        {newCostContent}
    </div>
}

export default NewCost;