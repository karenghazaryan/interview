import React, {useEffect, useState} from "react";
import {Modal} from "./Modal";

import "./index.scss"
import {months} from "./constants";

export const DataPiker = () => {

    const [value, setValue] = useState()
    const [shift, setShift] = useState( 0);
    const [month, setMonth] = useState();

    const getDate = (date) => {
        let dateObj = date ? new Date(date) : new Date();
        let monthIndex = dateObj.getUTCMonth() + 1;
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();

        const shiftDate = new Date(year + "/" + monthIndex + "/01");
        const shift = shiftDate.getDay();
        const month = months[monthIndex -1];
        return {date: year + "/" + monthIndex + "/" + day, shift, month };
    }

    useEffect(() => {
        if(!value) {
           let {date, shift, month} = getDate()
            setValue(date);
            setShift(shift);
            setMonth(month);
        }
    }, [value])


    return (
        <>
            <input value={value}/>
            <Modal
                value={value}
                shift={shift}
                month={month}
            />

        </>
    )
}