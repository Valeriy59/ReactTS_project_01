import React from "react"

function Rating() {
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    )
}

function Star() {
    return (
        <span>star </span>
    )
}


export default Rating