import './App.css';
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {

    const costs = [
        {
            id: 1,
            date: new Date(2022, 2, 12),
            description: 'Холодильник',
            amount: 999.99
        },
        {
            id: 2,
            date: new Date(2021, 5, 22),
            description: 'Стиральная машина',
            amount: 200
        },
    ]
    return (
        <div className="App">
            <NewCost/>
            <Costs costs={costs}/>
        </div>
    );
}

export default App;
