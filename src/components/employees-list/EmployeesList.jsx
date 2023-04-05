import EmployeesListItem from '../employees-list-item/EmployeesListItem.jsx';
import './EmployeesList.css';

const EmployeesList = ({ data }) => {
    const elements = data.map((value) => {
        const { id, ...valueProps } = value;
        return (
            <EmployeesListItem key={id} {...valueProps} />
            // <EmployeesListItem name = {value.name} salary={value.salary} increase={value.increase} key={}/>
            // <EmployeesListItem {...value}/>
        );


        // возможна запись с индексом
        // const elements = data.map((value, i) => {
        //     const { id, ...valueProps } = value;
        //     return (
        //         <EmployeesListItem key={i} {...valueProps} />
        //     );
    });
    return (
        <ul className = "app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeesList;
