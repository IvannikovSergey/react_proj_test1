import './CostItem.css'
import CostDate from "./CostDate";

function CostItem(props) {
    return <li>
    <div className='cost-item card-panel teal lighten-4'>
        <CostDate date={props.date}/>
        <div>
            <h2 className='cost-item__description'>{props.description}</h2>
            <div className='cost-item__price light-blue darken-3'>${props.amount}</div>
        </div>
    </div>
    </li>
}

export default CostItem