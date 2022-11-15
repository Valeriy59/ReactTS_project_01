import React, {useState} from "react";

export default {
    title: 'useState'
}
function generateData () {
    // difficult calculation
    console.log("generateData")
    return 12307213821897
}

export const Example1 = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(generateData) // [12307213821897, function(newValue{}]
    const changer = (state: number) => {
        return state + 1
    }
    return (
        <>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </>
    )
}
