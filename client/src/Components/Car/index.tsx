import React from 'react'

import { ICar } from '../../Store/types';
import MyStore from '../../Store'
const useStore = MyStore

export default React.memo(function ICar({_id, make, model, description, km, image, estimatedate}: ICar){
    return (
            <p>{ make } { model }</p>
    )
})