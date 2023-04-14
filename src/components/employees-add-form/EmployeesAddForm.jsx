/* eslint-disable no-return-assign */
import { Component } from 'react';
import './EmployeesAddForm.scss';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            addClassName: false,
            addClassSalary: false,
        };
        this.class = ' error';
    }

    valueChangeHandler = (e) => {
        this.setState({
            addClassName: false,
            addClassSalary: false,
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
            const { addClassName, addClassSalary, ...classes } = this.state;
            const lastClasses = Object.values(classes);
            if (lastClasses[0] === '') {
                this.setState({
                    addClassName: true,
                });
            }
            if (lastClasses[1] === '') {
                this.setState({
                    addClassSalary: true,
                });
            }
        }
    };


    render() {
        const { name, salary } = this.state;
        let classesName = 'form-control new-post-label';
        let classesSalary = 'form-control new-post-label';
        let boxes1 = 'box';
        let boxes2 = 'box';

        if (this.state.addClassName) {
            classesName += ' error';
            boxes1 += ' box-error';
        }
        if (this.state.addClassSalary) {
            classesSalary += ' error';
            boxes2 += ' box-error';
        }

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit = {this.submitHandler}
                    className="add-form d-flex">
                    <div className={boxes1}>
                        <input type="text"
                            className={classesName}
                            placeholder="Как его зовут?"
                            name='name'
                            value ={name}
                            onChange = {this.valueChangeHandler}/>
                    </div>
                    <div className={boxes2}>
                        <input type="number"
                            className={classesSalary}
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