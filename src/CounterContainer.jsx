import React from 'react';
import { connect } from 'react-redux';

function CounterComponent({ counter, dispatch }) {
  return (
    <div>
      <div className="counter">{counter}</div>
      <button onClick={() => dispatch({ type: 'REMOVE10' })}>- 10</button>
      <button onClick={() => dispatch({ type: 'REMOVE1' })}>- 1</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>0</button>
      <button onClick={() => dispatch({ type: 'ADD1' })}>+ 1</button>
      <button onClick={() => dispatch({ type: 'ADD10' })}>+ 10</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state
});

const CounterContainer = connect(mapStateToProps)(CounterComponent);

export default CounterContainer;
