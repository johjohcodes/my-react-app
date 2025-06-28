import { useState } from "react";

function ArrayCounter() {
    const[ array, setArray] = useState([]);
    
    return (
        <div>
            <h1>
                {array.toString()}
            </h1>
            <button onClick={() =>{
                setArray((prevArray) => [...prevArray, '+1'])
            }}>increment</button>
            <button onClick={() => {
                setArray((prevArray) => [...prevArray, '-1'])

            }}>decrement</button>
            <button>reset</button>
    

        </div>
)
}

export default ArrayCounter;
/*
 react useState
 string  : useState('   joe')
 number  : useState(0)
    boolean : useState(true)

relient on previous value
object  : useState({ name: 'joe', age: 20 })
setState((prevState) => prevState + 'name or no or boolean'
*/ 