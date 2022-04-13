import './CostItem.css'
import CostDate from "./CostDate";
import {useState} from "react";

function CostItem(props) {
    const [description, setDescription] = useState(props.description)

    const changeDescriptionHandler = () => {
        setDescription('New description')
    }

    return <div className='cost-item card-panel teal lighten-4'>
        <CostDate date={props.date}/>
        <div>
            <h2 className='cost-item__description'>{description}</h2>
            <div className='cost-item__price light-blue darken-3'>${props.amount}</div>
            <div>
                <button className="waves-effect waves-light btn" onClick={changeDescriptionHandler}>Изменить текст
                </button>
            </div>
        </div>
    </div>
}

export default CostItem