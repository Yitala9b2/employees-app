import AppInfo from '../app-info/AppInfo.jsx';
import SearchPanel from '../search-panel/SearchPanel.jsx';
import AppFilter from '../app-filter/AppFilter.jsx';
import EmployeesList from '../employees-list/EmployeesList.jsx';
import EmployeesAddForm from '../employees-add-form/EmployeesAddForm.jsx';
import './App.css';

const App = () => {
    // импровизированая бд
    const data = [
        { name: 'Пиньчук Виталий', salary: 100000, increase: true, id: 1 },
        { name: 'Шульга Алена', salary: 150000, increase: false, id: 2 },
        { name: 'Иванов Иван', salary: 50000, increase: false, id: 3 },
    ];
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>);
};
export default App;