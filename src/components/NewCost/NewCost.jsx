import CostForm from "./CostForm";
import './NewCost.css'

function NewCost(props) {
    const newCostHandler = (newCosts) => {
        const costData = {
            ...newCosts,
            id: Math.random().toString()
        }
        props.onAddNewCost(costData)
    }
    return <div className='new-cost'>
        <CostForm onNewCostHandler={newCostHandler}/>
    </div>
}

export default NewCost