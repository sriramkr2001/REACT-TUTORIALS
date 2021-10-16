import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { useState,useEffect } from 'react';
import reportWebVitals from './reportWebVitals';
// console.log("Sup");
// console.log("Sup");

// let obj = {
//  name : "Veyron",
//  a(){
//    console.log(this);
//  }


// }


// obj.a=obj.a.bind(this)
// obj.a()


// let sample={
//   name:"K.SRIRAM",
//   age:20,
//   Height:"5.7ft",
//   Weight:"80kg"
// }

// console.log(sample)
// let {...xa} = sample
// console.log(xa)
// // console.log(y)



ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
 <div>
  <App/>

</div>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


