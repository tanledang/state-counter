import {React, useState} from 'react';
import Increment from './Increment';
import Decrement from './Decrement';
import Output from './Output';

const Counter = ({initialValue}) => {
    const [count, setCount] = useState(initialValue || 0);
    console.log(count);

    const incrementCounter = () => {
        setCount(count + 1)
    }

    const decrementCounter = () => {
        setCount(count - 1)
    }

        return (
            <div>
                <Decrement onClick={decrementCounter}/>
                <Output count={count}/>
                <Increment onClick={incrementCounter}/>
            </div>
        );
}

export default Counter;