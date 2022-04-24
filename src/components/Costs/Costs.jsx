import './Costs.css'
import CostFilter from "./CostFilter";
import {useState} from "react";
import CostList from "./CostList";

function Costs(props) {

    const [selectedYear, setSelectedYear] = useState('2021')

    const onFilterYear = (filteredYear) => {
        setSelectedYear(filteredYear)
    };
    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear
    }) //функция для фильтрации по выбранному году

    return <div className='costs'>
        <CostFilter year={selectedYear} filteredYear={onFilterYear}/>
        <div >
            <CostList cost={filteredCosts}/>
        </div>
    </div>
}

export default Costs