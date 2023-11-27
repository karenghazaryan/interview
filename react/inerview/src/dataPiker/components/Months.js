import  React from "react";
import {months} from "./constants";

export const Months = ({selected, handleSelectMonth}) => {
    return (
        <>
            <select onSelect={handleSelectMonth} defaultValue={selected} >
                {months.map( (item)=> {
                    return <option value={item}>{item}</option>
                })}
            </select>
        </>
    )
}