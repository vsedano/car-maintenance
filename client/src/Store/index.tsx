import axios from 'axios'
import create, { GetState, SetState } from 'zustand'

import { MyState } from './types';

export default create((setState: SetState<MyState>, getState: GetState<MyState>): MyState => {
    return {
        cars: [],
        getCars: () => {
            axios.get('http://18.218.156.233:8000/cars').then(res =>{
                setState({cars: res.data})
            }).catch(error => console.error(error))
        }
    }
})