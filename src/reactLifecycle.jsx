import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    // componentDidMount + componentDidUpdate
    useEffect(() => {
        console.log(`Count updated: ${count}`);

        // Cleanup function (componentWillUnmount)
        return () => {
            console.log(`Cleaning up count: ${count}`);
        };
    }, [count]); // Runs when `count` changes

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;