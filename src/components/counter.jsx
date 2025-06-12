// tasks
import { useState } from 'react';
// create a counter component that increments and decrements a value, defult value is 0 a button to reset to 0
function Counter() {
    const [user, setUser] = useState({ name: 'joe', age: 20 });
    // const [count, setCount] = useState(0);
    return (
        <div>
            <h3> counter : {user.age} {user.name}</h3>
            <button onClick={() => {
                // use a callback within setstate to acesss thr previoud value
                // spread allproperties of the previous object into the new object
                //  change the property that needs changing
                setUser((prevUser) => {
                    return { ...prevUser, age: prevUser.age + 1 }
                })
                // setCount(prevCount => prevCount + 1) 
            }}>increments</button>
            <button onClick={() => { 
                setUser((prevUser) => {
                    return { ...prevUser, age: prevUser.age - 1 }
                } ) }}>decrements</button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
    )
}

export default Counter;