import React, { useReducer, useState } from 'react';


const initialization = {count: 0}

const reducer = (state, action ) => {
    console.log(state, action);
    switch(action.type) {
        case 'INCREMENT':
        return{count: state.count + 1}    
        case 'DECREMENT':
            return{count: state.count - 1}
        default:
            return state;
    }
}

const ReducerCount = () => {
    const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialization)
    return (
        <div>
            <h3>This is reducer count: {state.count}</h3>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>decrement</button>
        </div>
    );
};

export default ReducerCount;