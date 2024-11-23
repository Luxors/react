import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// function Hello () {
//   let phrase = "World"
//   return (
//     <h1>Hello {phrase}</h1>
//   )
// }

// function SayFullName(props) {
//   return (
//     <div>
//       <h1>My name: {props.name}, surname: {props.surname}</h1>
//       <a href={props.link}>GitHub Account</a>
//     </div>
//   )
// }

// function MeetAll() {
//   return (
//     <div>
//       <SayFullName name="Yaroslav" surname="Derkach" link="https://github.com/Luxors" />
//     </div>
//   ) //

// }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
