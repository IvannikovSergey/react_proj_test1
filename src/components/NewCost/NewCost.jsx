import CostForm from "./CostForm";
import './NewCost.css'

function NewCost(props) {
    const onNewCostHandler = (newCosts) => {
        const costData = {
            ...newCosts
        }
        props.addNewCost(costData)
    }
    return <div className='new-cost'>
        <CostForm newCostHandler={onNewCostHandler}/>
    </div>
}

export default NewCost