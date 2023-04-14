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
                { name: 'Шульга Алена', salary: 150000, increase: true, like: false, id: 2 },
                { name: 'Иванов Иван', salary: 50000, increase: false, like: false, id: 3 },
            ],
            term: '',
            filter: '',
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
            // повторяющиеся ключи и значения поэтому такой синтаксис
            name,
            salary,
            increase: false,
            id: this.maxId++,
        };
        console.log(newItem);

        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    };

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

    onUpdateSearchHandler = (term) => {
        this.setState({
            term,
        });
    };

    // eslint-disable-next-line class-methods-use-this
    filterEmpHanler = (items, filter) => {
        switch (filter) {
        case 'increase':
            return items.filter((item) => item.increase);
        case 'more then 50000':
            return items.filter((item) => item.salary > 50000);
        default:
            return items;
        }
    };

    onUpdateFilterHandler = (filter) => {
        this.setState({
            filter,
        });
    };

    render() {
        const { data, term, filter } = this.state;
        const employees = data.length;
        const likes = data.filter((item) => item.like).length;

        const visibleData = this.filterEmpHanler(this.searchEmpHandler(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    employees = {employees}
                    likes = {likes}
                />
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch = {this.onUpdateSearchHandler}
                    />
                    <AppFilter
                        onUpdateFilter = {this.onUpdateFilterHandler}/>
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