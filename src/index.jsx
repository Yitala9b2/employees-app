import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './components/app/App.jsx';


// const hi = <h2>Hello</h2>; // jsx / если многострочный элемент, оборачиваем его в скобки
// // всегда один родитель
// console.log(hi);

// const elem = React.createElement('h3', { className: 'greeting' }, 'hello people'); // тег, класс, содержимое



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
);

