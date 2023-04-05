import AppInfo from '../app-info/AppInfo.jsx';
import SearchPanel from '../search-panel/SearchPanel.jsx';
import AppFilter from '../app-filter/AppFilter.jsx';
import EmployeesList from '../employees-list/EmployeesList.jsx';
import EmployeesAddForm from '../employees-add-form/EmployeesAddForm.jsx';
import './App.css';

const App = () => (
    <div className="app">
        <AppInfo/>
        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        <EmployeesList/>
        <EmployeesAddForm/>
    </div>);

export default App;