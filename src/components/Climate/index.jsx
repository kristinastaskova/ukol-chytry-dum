import React, { useState } from 'react';
import temp from './images/temp.svg';

const Climate = ({ temperature, humidity }) => {
    const [heat, setHeat] = useState(temperature)
    const tempPlus = () => {
        setHeat(heat + 1)
    }
    const tempMinus = () => {
        setHeat(heat - 1)
    }
    return (
        <>
            <div className="climate">
                <div className="climate__icon">
                    <img src={heat} />
                </div>
                <div className="climate__content">
                    <div className="climate__temperature">{heat}&deg;C</div>
                    <div className="climate__humidity">{humidity}&nbsp;%</div>
                </div>
                <div className="climate__controls">
                    <button className="button" onClick={tempPlus}>+</button>
                    <button className="button" onClick={tempMinus}>-</button>
                </div>
            </div>
        </>
    )
}
export default Climate;