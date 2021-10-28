import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState'

import VehicleList from '../vehicleList/VehicleList'


function Vehicles() {
    const state = useContext(GlobalState)
    const [vehicles] = state.VehicleAPI.vehicles
    console.log(vehicles)


    return (

        <div className="vehilces">
            {
                vehicles.map(vehicle => {
                    return <VehicleList key={vehicle._id} vehicle={vehicle} />
                })
            }

        </div>

    )
}

export default Vehicles