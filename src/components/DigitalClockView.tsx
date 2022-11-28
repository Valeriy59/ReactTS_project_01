import React from "react";
import {ClockViewPropsType} from "./Clock";

export const getTwoDigitsString = (timeItem: number) => timeItem < 10 ? "0" + timeItem : timeItem

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (
        <>
            <span>{getTwoDigitsString(date.getHours())}</span>
            :
            <span>{getTwoDigitsString(date.getMinutes())}</span>
            :
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </>
    )
}