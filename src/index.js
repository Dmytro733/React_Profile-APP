import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let PostsData = [
  {id: 1, avatar: "https://historyurok.com.ua/wp-content/uploads/2020/01/Aktor.jpg", name: "Will Smith", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", likeCount: 10 },
  {id: 2, avatar: "https://www.themoviedb.org/t/p/w235_and_h235_face/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg", name: "Leonardo Dicaprio", message: "Lorem adipisicing elit.", likeCount: 7 }
];

let DialogsData = [
  {id: 1, name: "Janet"},
  {id: 2, name: "Dima"},
  {id: 3, name: "Anna"},
  {id: 4, name: "Volodimir"},
  {id: 5, name: "Oksana"},
  {id: 6, name: "Anastasiya"}
];

let MessagesData = [
  {id: 1, message: "Hi😊"},
  {id: 2, message: "How are you?"},
  {id: 3, message: "Do you go?"},
  {id: 4, message: "Yes😂"},
];

ReactDOM.render(
  <React.StrictMode>
    <App MessagesData={MessagesData} DialogsData={DialogsData} PostsData={PostsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
