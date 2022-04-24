import './CostForm.css'
import {useState} from "react";

const CostForm = (props) => {

    const [inputName, setInputName] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDate, setInputDate] = useState('2019-12-12')
    // const [userInput, setUserInput] = useState({
    //     name:'',
    //     amount:'',
    //     date:''
    // })
    const nameChangeHandler = (e) => {
        setInputName(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     name: e.target.value
        // })
    }
    const amountChangeHandler = (e) => {
        setInputAmount(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     amount: e.target.value
        // })

    }
    const dateChangeHandler = (e) => {
        setInputDate(e.target.value)
        //   setUserInput({
        //       ...userInput,
        //       date: e.target.value
        //   })
    }

    const submitInputHandler = (e) => {
        e.preventDefault()
        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }
        props.onNewCostHandler(costData)
        setInputName('')
        setInputAmount('')
        setInputDate('')
    }

    return <form onSubmit={submitInputHandler}>
        <div className='new-cost__control'>
            <div className='new-cost__control'>
                <label>Название</label>
                <input
                    onChange={nameChangeHandler}
                    type="text"
                    value={inputName}/>
            </div>
            <div className='new-cost__control'>
                <label>Сумма</label>
                <input
                    onChange={amountChangeHandler}
                    type="number"
                    min='0.01'
                    step='0.01'
                    value={inputAmount}/>
            </div>
            <div className='new-cost__control'>
                <label>Дата</label>
                <input
                    onChange={dateChangeHandler}
                    type="date"
                    step='2019-01-01'
                    value={inputDate}/>
            </div>
        </div>
        <div>
            <button type='submit' className="waves-effect waves-light btn">Добавить расход</button>
        </div>
    </form>
}

export default CostForm