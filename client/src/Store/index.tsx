import axios from 'axios'
import create, { GetState, SetState } from 'zustand'

import { MyState } from './types';

axios.defaults.baseURL = `${window.location.protocol}//${window.location.hostname}:8000`;

export default create((setState: SetState<MyState>, getState: GetState<MyState>): MyState => {
    return {
        cars: [],
        carDetail: undefined,
        getCars: () => {
            axios.get('/cars').then(res =>{
                setState({cars: res.data})
            }).catch(error => console.error(error))
        },
        getCar: async (carId: number | string) => {
            const result = await fetch(`/car/${carId}`)
            const carDetail = await result.json()
            setState({carDetail})
        },
        updateCar: async (carId: number | string, name: string, date: Date) => {
            axios.put(`/car/${carId}`, 
            {
                'estimatedate': date,
                'username': name
            }).then(res =>{
                setState({carDetail: res.data}) 
            }).catch(error => alert(error))
        }
    }
})