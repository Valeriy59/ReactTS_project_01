import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect'
}

export const BaseExample = () => {
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

export const SetTimeOutExample = () => {
    const [counter, setCounter] = useState(1) // [12307213821897, function(newValue{}]
    console.log("SetTimeOutExample")

    useEffect(() => {
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
    },[counter])

    return (
        <>
            Hello, {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>

        </>
    )
}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1) // [12307213821897, function(newValue{}]
    console.log("SetIntervalExample")

    useEffect(() => {
        setInterval(() => { setCounter((state) => state + 1)}, 1000)
    },[])

    return (
        <>
            Hello, {counter}
            {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}

        </>
    )
}
