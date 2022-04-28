import CostForm from "./CostForm";
import './NewCost.css'
import {useState} from "react";

function NewCost(props) {

     const [isFormVisible, setIsFormVisible] = useState(false)
    const newCostHandler = (newCosts) => {
        const costData = {
            ...newCosts,
            id: Math.random().toString()
        }
        props.onAddNewCost(costData)
        setIsFormVisible(false)
    }

    function buttonAddNewCostHandler () {
         setIsFormVisible(true)
    }

    function onCancelCostHandler() {
        setIsFormVisible(false)
    }

    return <div className='new-cost'>
        {!isFormVisible && <button onClick={buttonAddNewCostHandler} className='btn'>Добавить новый расход</button>}
        {isFormVisible&&<CostForm onNewCostHandler={newCostHandler} onCancel={onCancelCostHandler}/>}

    </div>
}

export default NewCost