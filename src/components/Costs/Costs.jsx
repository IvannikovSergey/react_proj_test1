import './Costs.css'
import CostFilter from "./CostFilter";
import {useState} from "react";
import CostList from "./CostList";
import CostDiagram from "./CostDiagram";

function Costs(props) {

    const [selectedYear, setSelectedYear] = useState('2022')

    const onFilterYear = (filteredYear) => {
        setSelectedYear(filteredYear)
    };
    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear
    }) //функция для фильтрации по выбранному году

    return <div className='costs'>
        <CostFilter year={selectedYear} filteredYear={onFilterYear}/>
        <CostDiagram costs={filteredCosts}/>
        <CostList cost={filteredCosts}/>
    </div>
}

export default Costs