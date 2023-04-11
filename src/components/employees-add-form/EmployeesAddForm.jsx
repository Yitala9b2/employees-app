import { Component } from 'react';
import './EmployeesAddForm.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        };
        this.maxId = 4;
    }

    valueChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    submitHandler = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: '',
        });
    };


    render() {
        const { name, salary } = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit = {this.submitHandler}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name'
                        value ={name}
                        onChange = {this.valueChangeHandler}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в р.?"
                        name='salary'
                        value ={salary}
                        onChange = {this.valueChangeHandler}/>
                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;