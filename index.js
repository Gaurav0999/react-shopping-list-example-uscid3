import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Item(props) {
  return (
    <div className="item">
      <b>Name:</b> {props.name} <br />
      <b>Price:</b> ${props.price}
      <p>there is nothing to show</p>
      <img
        src="https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_1280.jpg"
        alt=""
      />
      <br />
      <a href="http//ok.com">click here</a>
    </div>
  );
}

function App() {
  return (
    <div>
      <Item name="Cheese" price="4.99" />
      <Item name="Bread" price="1.5" />
      <Item name="Ice cream" price="24" />
    </div>
  );
}

const el = <App />;
ReactDOM.render(el, document.getElementById('root'));
