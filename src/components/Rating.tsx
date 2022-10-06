import React from "react"

export type RatingPropsType = {
    value: 0|1|2|3|4|5
    onClick: (value: 0|1|2|3|4|5) => void
}

function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected = {props.value > 1} onClick={props.onClick} value={1}/>
            <Star selected = {props.value > 2} onClick={props.onClick} value={2}/>
            <Star selected = {props.value > 3} onClick={props.onClick} value={3}/>
            <Star selected = {props.value > 4} onClick={props.onClick} value={4}/>
            <Star selected = {props.value > 5} onClick={props.onClick} value={5}/>
        </div>
    )
}
type StarPropsType = {
    selected: boolean
    onClick: (value: 0|1|2|3|4|5) => void
    value: 0|1|2|3|4|5
}

function Star(props: StarPropsType) {
    return <span onClick={()=> {
        debugger
        props.onClick(props.value)
    }}>
        {props.selected ? <b>star </b> : 'star '}
    </span>
}


export default Rating