import './CostForm.css'
import {useState} from "react";
const CostForm = () => {

    // const [name, setName] = useState('')
    // const [amount, setAmount] = useState('')
    // const [date, setDate] = useState('2019-12-12')

    const [userInput, setUserInput] = useState({
        name:'',
        amount:'',
        date:''
    })

    const nameChangeHandler = (e) => {
        // setName(e.target.value)
        setUserInput({
            ...userInput,
            name: e.target.value

        })
    }
    const amountChangeHandler = (e) => {
        // setAmount(e.target.value)
        setUserInput({
            ...userInput,
            amount: e.target.value

        })

    }
    const dateChangeHandler = (e) => {
      // setDate(e.target.value)
        setUserInput({
            ...userInput,
            date: e.target.value

        })
    }

    return <form>
        <div className='new-cost__control'>
            <div className='new-cost__control'>
                <label>Название</label>
                <input onChange={nameChangeHandler} type="text"/>
            </div>
            <div className='new-cost__control'>
                <label>Сумма</label>
                <input onChange={amountChangeHandler} type="number" min='0.01' step='0.01'/>
            </div>
            <div className='new-cost__control'>
                <label>Дата</label>
                <input onChange={dateChangeHandler} type="date" step='2019-01-01'/>
            </div>
        </div>
        <div >
            <button type='submit' className="waves-effect waves-light btn" >Добавить расход</button>
        </div>
    </form>
}

export default CostForm