import './CostForm.css';
import React, {useState} from "react";

const CostForm = (props) => {

    //несколько состояний в 1 компоненте
    const [inputDescription, setInputDescription] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const descriptionChangeHandler = (event) => {
        setInputDescription(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const costData = {
            description: inputDescription,
            amount: inputAmount,
            date: new Date(inputDate),
        };

        props.onSaveCostData(costData);
        setInputDescription('');
        setInputDate('');
        setInputAmount('');
    };

    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className='new-cost__control'>
                <label> Описание  </label>
                <input type="text" value={inputDescription} onChange={descriptionChangeHandler}/>
            </div>
            <div className='new-cost__control'>
                <label> сумма </label>
                <input type="number" value={inputAmount} onChange={amountChangeHandler} min='0.01' step='0.01'/>
            </div>
            <div className='new-cost__control'>
                <label> Дата </label>
                <input type="date" value={inputDate} onChange={dateChangeHandler} min='2019-01-01' step='2023-12-31'/>
            </div>

            <div className='new-cost__actions'>
                <button type='submit'>Добавить расход</button>
            </div>
        </div>
    </form>
}

export default CostForm;