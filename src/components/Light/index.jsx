import React, { useState } from 'react';
import LightOn from './images/light-on.svg';
import LightOff from './images/light-off.svg';


const Light = ({ name, state }) => {
    const [lightState, setLightState] = useState(state)
    const handleClick = () => {
        if (lightState === 'on') {
            setLightState('off');
        } else {
            setLightState('on');
        }
    }



    return (
        <>
            <div className="light" onClick={handleClick}>
                <div className="light__icon">
                    <img src={lightState === 'on' ? LightOn : LightOff} />
                </div>
                <div className="light__name">
                    {name}
                </div>
            </div>
        </>
    )
}

export default Light;
