import React, { useEffect, FC } from 'react'

import Car from '../../Components/Car'
import MyStore from '../../Store'
const useStore = MyStore


const Home: FC<{}> = () => {
    const cars = useStore(state => state.cars)
    const getCars = useStore(state => state.getCars)

    useEffect(() => {
        (async function() {
            await getCars()
        })()
    }, [])
    
    const renderCars = (): undefined | JSX.Element[] | string => {
        if(cars && cars.length){
            return cars.map((car, index) => <Car key= {car._id} {...car}/>)
        }
    }

    return(
        <div>
            {renderCars()}
        </div>
    )
}

export default Home