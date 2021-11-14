import React from 'react';
import Climate from '../Climate';
import Lights from '../Lights';
import Blinds from '../Blinds';
import Energy from '../Energy';
import './style.css'


const Dashboard = ({ data }) => {
    return (
        <>
            <main className="dashboard">
                <Lights lights={data.lights} />
                <div className="others">
                    <Climate temperature={data.climate.temperature} humidity={data.climate.humidity} />
                    <Blinds state={data.blinds} />
                    <Energy electricity={data.energyConsumption.electricity} water={data.energyConsumption.water} />
                </div>
            </main>
        </>
    );
}

export default Dashboard;