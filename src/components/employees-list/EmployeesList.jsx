import EmployeesListItem from '../employees-list-item/EmployeesListItem.jsx';
import './EmployeesList.css';

const EmployeesList = ({ data }) => {
    const elements = data.map((value) => {
        // id нужен чтобы не перерисовывались все элементы компонента а только те которые изменились
        const { id, ...valueProps } = value; // вытащил id из value с помощью деструктуризации
        return (
            <EmployeesListItem key={id} {...valueProps} />
        // <EmployeesListItem name = {value.name} salary={value.salary} increase={value.increase} key={}/>
        // <EmployeesListItem {...value}/>
        );


        // возможна запись с индексом если порядок не меняется
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
