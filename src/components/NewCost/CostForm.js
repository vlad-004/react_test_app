import './CostForm.css';

const CostForm = () => {

    const nameChangeHandler = (event) => {
        console.log(event.target.value);
    }

    return <form>
        <div className="new-cost__controls">
            <div className='new-cost__control'>
                <label> название </label>
                <input type="text" onChange={nameChangeHandler}/>
            </div>
            <div className='new-cost__control'>
                <label> сумма </label>
                <input type="number" min='0.01' step='0.01'/>
            </div>
            <div className='new-cost__control'>
                <label> Дата </label>
                <input type="date" min='2019-01-01' step='2023-12-31'/>
            </div>

            <div className='new-cost__actions'>
                <button type='submit'>Добавить расход</button>
            </div>
        </div>
    </form>
}

export default CostForm;