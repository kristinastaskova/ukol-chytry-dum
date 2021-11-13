import React, { useState } from 'react';
import open from './images/blinds-open.svg';
import closed from './images/blinds-closed.svg';

const Blinds = ({ state }) => {
    const [blinds, setBlinds] = useState(state)
    const blindsOpen = () => {
        setBlinds('open')
    }
    const blindsClosed = () => {
        setBlinds('closed')
    }
    return (
        <>
            <div className="blinds">
                <div className="blinds__icon">
                    <img src={blinds === 'open' ? open : closed} />
                </div>
                <div className="blinds__name">
                    Žaluzie
				</div>
                <div className="blinds__controls">
                    <button className={blinds === 'open' ? 'button button--active' : 'button '} onClick={blindsOpen}>Otevřeno
                    </button>

                    <button className={blinds === 'closed' ? 'button button--active' : 'button '} onClick={blindsClosed}>Zavřeno
                    </button>
                </div>
            </div>
        </>
    )
}

export default Blinds;