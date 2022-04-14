import './CostForm.css'
const CostForm = () => {

    const changeInputHandler = (e) => {
        console.log(e.target.value)
    }

    return <form>
        <div className='new-cost__control'>
            <div className='new-cost__control'>
                <label>Название</label>
                <input onChange={changeInputHandler} type="text"/>
            </div>
            <div className='new-cost__control'>
                <label>Сумма</label>
                <input type="number" min='0.01' step='0.01'/>
            </div>
            <div className='new-cost__control'>
                <label>Дата</label>
                <input type="date" step='2019-01-01'/>
            </div>
        </div>
        <div >
            <button type='submit' className="waves-effect waves-light btn" >Добавить расход</button>
        </div>
    </form>
}

export default CostForm