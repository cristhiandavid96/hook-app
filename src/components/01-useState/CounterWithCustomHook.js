import React from 'react'
import { useCounter } from '../hooks/useCouter';
import './Counter.css';
export const CounterWithCustomHook = () => {

    const { state, increment, decrement ,reset} = useCounter(100);
    return (
        <>
            <h1>Counter whith hook {state}</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => increment(2)}> +1 </button>
            <button className="btn btn-primary" onClick={() => decrement(2)}> -1 </button>
            <button className="btn btn-primary" onClick={ reset}> Reset </button>
        </>
    )
}
