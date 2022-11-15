import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect'
}

export const Example1 = () => {
    const [counter, setCounter] = useState(1) // [12307213821897, function(newValue{}]
    console.log("Example1")
    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    }, [counter])

        useEffect(() => {
        console.log("useEffect only first render")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter changes")
        document.title = counter.toString()
    }, [counter])

    return (
        <>
            Hello, {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>

        </>
    )
}
