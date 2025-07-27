import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import Hello from './Hello';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter';
//import Bmi from './Bmi';
// import './Bmi.css';
import Shop from './shop';
import './Shop.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<Counter/>
    <Bmi/>*/}
    <Shop/>
    {/*<Hello name ="KK" age={12}/ >
    <Hello name ="CC" / >
    <Hello / >*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
