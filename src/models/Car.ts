import mongoose, { Schema, model, Document } from 'mongoose'
const AutoIncrement = require('mongoose-sequence')(mongoose) 

export interface ICar {
    id: number | any;
    make: string;
    model: string;
    description: string;
    km?: number;
    image: string;
    estimatedate: Date;
}

const carShema = new Schema({
    _id: {
        type: Number,
    },
    make: {
        type: String,
        required: true,
        trim: true
    },
    model: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    km: {
        type: Number,
        required: false,
    },
    image: {
        type: String,
        required: true
    },
    estimatedate: {
        type: Date,
        required: false
    },
    username: {
        type: String,
        required: false,
    }
},{
    versionKey: false,
    _id: false,
})

carShema.plugin(AutoIncrement, {id: 'idCounter', incfield: 'id' })

export default model<ICar>('Car', carShema)