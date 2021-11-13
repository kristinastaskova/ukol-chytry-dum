import React from 'react';
import Climate from '../Climate';
import Lights from '../Lights';
import Blinds from '../Blinds';
import Energy from '../Energy';


const Dashboard = ({ data }) => {
    return (
        <>
            <main className="dashboard">
                <Climate temperature={data.climate.temperature} humidity={data.climate.humidity} />
                <Lights lights={data.lights} />
                <Blinds state={data.blinds} />
                <Energy electricity={data.energyConsumption.electricity} water={data.energyConsumption.water} />
            </main>
        </>
    );
}

export default Dashboard;