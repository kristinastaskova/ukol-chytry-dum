import React from 'react';
import Header from '../Header';
import Light from '../Light';


const Lights = ({ lights }) => {
    return (
        <>
            <div className="lights">
                {lights.map(svetla => <Light key={svetla.name} name={svetla.name} state={svetla.state} />)}
            </div>
        </>
    );
}

export default Lights