import './AppFilter.css';


const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'increase', label: 'Сотрудники на повышение' },
        { name: 'more then 50000', label: 'З/П больше 50000р.' },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name; // ищем фильтр равный имени
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key ={name}
                onClick = {() => props.onUpdateFilter(name)}>
                {label}
            </button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};



export default AppFilter;