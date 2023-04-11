import { Component } from 'react';

import AppInfo from '../app-info/AppInfo.jsx';
import SearchPanel from '../search-panel/SearchPanel.jsx';
import AppFilter from '../app-filter/AppFilter.jsx';
import EmployeesList from '../employees-list/EmployeesList.jsx';
import EmployeesAddForm from '../employees-add-form/EmployeesAddForm.jsx';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // импровизированая бд
            data: [
                { name: 'Пиньчук Виталий', salary: 100000, increase: true, like: true, id: 1 },
                { name: 'Шульга Алена', salary: 150000, increase: false, like: false, id: 2 },
                { name: 'Иванов Иван', salary: 50000, increase: false, like: false, id: 3 },
            ],
        };
        this.maxId = 4;
    }

    deleteItemHandler = (id) => {
        this.setState(({ data }) => {
            const itemIndex = data.findIndex((value) => value.id === id);
            return {
                data: data.filter((item, index) => index !== itemIndex),
            };
        });
    };

    addItemHandler = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++,
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    };

    // eslint-disable-next-line class-methods-use-this
    toggleIncreaseHandler = (id) => {
        console.log(`increase this ${id}`);
    };

    // eslint-disable-next-line class-methods-use-this
    toggleRiseHandler = (id) => {
        console.log(`Like this ${id}`);
    };

    render() {
        const { data } = this.state;
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList
                    data={data}
                    onDelete={this.deleteItemHandler}
                    onToggleIncrease = {this.toggleIncreaseHandler}
                    onToggleRise = {this.toggleRiseHandler}
                />
                <EmployeesAddForm
                    onSubmit = {this.addItemHandler}
                />
            </div>);
    }
}
export default App;