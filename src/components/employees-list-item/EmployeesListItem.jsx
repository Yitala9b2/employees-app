// import { Component } from 'react';
import './EmployeesListItem.css';

const EmployeesListItem = (props) => {
// class EmployeesListItem extends Component {
    // constructor(props) {
    //    super(props);
    //    this.state = {
    //        increase: false,
    //        like: false,
    //    };
    // }

    // onIncreaseHandler = () => {
    //    this.setState(({ increase }) => ({
    //        increase: !increase,
    //    }));
    // };

    // likeHandler = () => {
    //    this.setState(({ like }) => ({
    //        like: !like,
    //    }));
    // };

    const { name, salary, onDelete, onToggleIncrease, onToggleRise, increase, like } = props;
    // const { increase, like } = this.state;
    // добавили класс increase в классы
    let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) {
        classNames += ' increase';
    }
    if (like) {
        classNames += ' like';
    }
    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick = {onToggleRise}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={`${salary}р.`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick = {onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button" onClick={ onDelete }
                    className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
};

export default EmployeesListItem;