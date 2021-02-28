import React, { useState } from 'react';

const CounterApp = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const IncNum = () => {
        setCount(count + 1);
    }
    return (
        <section>
            <h2>Counter {count}</h2>
            <button onClick={IncNum}>Click</button>
        </section>
    )
}

export default CounterApp;