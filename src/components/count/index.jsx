import React, { useState } from 'react';

function Count() {

    const [count, setCount] = useState(0)

    function countUp() {
        setCount(count + 1)
    }

    function countDown() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={countUp}>Add 1</button>
            <button onClick={countDown}>Subtract 1</button>
        </div>
    );
}

export default Count;