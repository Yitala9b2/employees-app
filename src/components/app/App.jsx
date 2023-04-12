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
            term: 'а',
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
    togglePropHandler = (id, prop) => {
        // this.setState(({ data }) => {
        // const index = data.findIndex((elem) => elem.id === id);
        // const old = data[index];
        // const newItem = { ...old, increase: !old.increase };
        // const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        // return {
        //    data: newArray,
        // };
        // });

        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            }),
        }));
    };


    // eslint-disable-next-line class-methods-use-this
    searchEmpHandler = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.name.indexOf(term) > -1;
        });
    };
    // eslint-disable-next-line class-methods-use-this


    render() {
        const { data, term } = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter((item) => item.increase).length;

        const visibleData = this.searchEmpHandler(data, term);
        return (
            <div className="app">
                <AppInfo
                    employees = {employees}
                    increased = {increased}
                />
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItemHandler}
                    onToggleProp = {this.togglePropHandler}
                />
                <EmployeesAddForm
                    onSubmit = {this.addItemHandler}
                />
            </div>);
    }
}
export default App;