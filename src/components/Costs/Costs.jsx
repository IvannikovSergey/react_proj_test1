import './Costs.css'
import CostItem from "./CostItem";

function Costs(props) {
    return <div className='costs'>
        {props.costs.map(cost => <ul key={cost.id}><CostItem
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
        />
        </ul>)}
    </div>
}

export default Costs