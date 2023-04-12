import { Component } from 'react';
import './EmployeesAddForm.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            addClass: false,
        };
        this.class = ' error';
    }

    valueChangeHandler = (e) => {
        this.setState({
            addClass: false,
            [e.target.name]: e.target.value,
        });
    };

    submitHandler = (e) => {
        e.preventDefault();
        if (this.state.name && this.state.salary) {
            this.props.onSubmit(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: '',
            });
        } else {
            this.setState({
                addClass: true,
            });
        }
    };


    render() {
        const { name, salary } = this.state;
        let classes = 'form-control new-post-label';
        let boxes = 'box';

        if (this.state.addClass) {
            classes += ' error';
            boxes += ' box-error';
        }

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit = {this.submitHandler}
                    className="add-form d-flex">
                    <div className={boxes}>
                        <input type="text"
                            className={classes}
                            placeholder="Как его зовут?"
                            name='name'
                            value ={name}
                            onChange = {this.valueChangeHandler}/>
                    </div>
                    <div className={boxes}>
                        <input type="number"
                            className={classes}
                            placeholder="З/П в р."
                            name='salary'
                            value ={salary}
                            onChange = {this.valueChangeHandler}/>
                    </div>
                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;