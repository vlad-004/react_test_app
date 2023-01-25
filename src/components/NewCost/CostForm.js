import './CostForm.css';
import React, {useState} from "react";

const CostForm = () => {

    //несколько состояний в 1 компоненте
    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
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
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate),
        };

        console.log(costData);
        setInputName('');
        setInputDate('');
        setInputAmount('');
    };

    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className='new-cost__control'>
                <label> название </label>
                <input type="text" value={inputName} onChange={nameChangeHandler}/>
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