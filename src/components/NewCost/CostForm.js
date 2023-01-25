import './CostForm.css';
import React, {useState} from "react";

const CostForm = () => {

    //несколько состояний в 1 компоненте
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    return <form>
        <div className="new-cost__controls">
            <div className='new-cost__control'>
                <label> название </label>
                <input type="text" onChange={nameChangeHandler}/>
            </div>
            <div className='new-cost__control'>
                <label> сумма </label>
                <input type="number" onChange={amountChangeHandler} min='0.01' step='0.01'/>
            </div>
            <div className='new-cost__control'>
                <label> Дата </label>
                <input type="date" onChange={dateChangeHandler} min='2019-01-01' step='2023-12-31'/>
            </div>

            <div className='new-cost__actions'>
                <button type='submit'>Добавить расход</button>
            </div>
        </div>
    </form>
}

export default CostForm;