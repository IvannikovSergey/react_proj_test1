import DiagramBar from "./DiagramBar";
import './Diagram.css'
const Diagram = (props) => {

    const dataSetValues = props.dataSet.map(value => value.value)

    const maxMonthValue = Math.max(...dataSetValues)

    return <div className='diagram'>
        {props.dataSet.map(dataSet =>
            <DiagramBar
                key={dataSet.label}
                value={dataSet.value}
                maxValue={maxMonthValue}
                label={dataSet.label}
            />
        )}
    </div>

}

export default Diagram