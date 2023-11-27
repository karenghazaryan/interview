import React, {useEffect, useState} from "react";
import {weekDays} from "./constants";
import {Months} from "./Months";

export const Modal = ({value , shift, month,  changeValue}) => {

    const getRowDays = (start, shift = 0) => {
        let days = [];

        if (shift) {
          for(let i = 0; i < shift; i++)  {
              days.push(<td><button key={i}>{''}</button></td>)
          }
        }

        for (let i = start; i < start + 7 - shift; i++) {
            days.push(<td><button key={i}>{i <= 31 ? i  : '' }</button></td>)
        }
        return days;
    }

    const getDays = () => {
        const days = [];
        let hasContainer = true;
        let containerCount = 0
        while (hasContainer) {

            let daysContainer = (<tr>
                {
                    getRowDays((containerCount * 7 + 1), containerCount === 0 ? shift : 0)
                }
            </tr>)

            if( ++containerCount * 7 > 31) {
                hasContainer = false
            }

            days.push(daysContainer);
        }
        return days;
    }


    const getWeekDays = () => {
        return (
            <tr>
                {weekDays.map((item) => <td className="weekday-name">{item.short}</td>)}
            </tr>

        )
    }

    return (
        <div className="picker-container">
            <div className="months-container">
                <Months selected={month}/>
            </div>
            <table>
                <thead>
                    {getWeekDays()}
                </thead>
                <tbody>
                    {getDays()}
                </tbody>



            </table>
            <div className="weekday-container">
            </div>
            <div className="days-container">

            </div>
        </div>
    )

}
