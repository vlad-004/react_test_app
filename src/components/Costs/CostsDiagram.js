import Diagram from "../Diagram/Diagram";

const CostsDiagram = (props) => {

    // расход по умолчанию равен 0
    const diagramDataSets = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'March', value: 0},
        {label: 'April', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'July', value: 0},
        {label: 'August', value: 0},
        {label: 'September', value: 0},
        {label: 'October', value: 0},
        {label: 'November', value: 0},
        {label: 'December', value: 0},
    ];

    for (let cost of props.costs) {
        let costMonth = cost.date.getMonth();
        diagramDataSets[costMonth].value += Number(cost.amount);
    }

    return <Diagram dataSets={diagramDataSets}/>
}

export default CostsDiagram;