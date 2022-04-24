import './App.css';
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import {useState} from "react";

const INITIAL_STATE = [
    {
        id: '1',
        date: new Date(2022, 2, 12),
        description: 'Холодильник',
        amount: 999.99
    },
    {
        id: '2',
        date: new Date(2021, 5, 22),
        description: 'Стиральная машина',
        amount: 200
    },
]

function App() {

    const [costs, setCosts ] = useState(INITIAL_STATE)

    const addNewCost = (cost) => {
        setCosts((prevState) => {
            return [cost, ...costs]
        })
    }
    return (
        <div className="App">
            <NewCost onAddNewCost = {addNewCost}/>
            <Costs costs={costs}/>
        </div>
    );
}

export default App;
