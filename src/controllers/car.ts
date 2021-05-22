import {RequestHandler} from 'express'

import Car from '../models/Car'

export const createCar: RequestHandler = async (req, res) => {
    try {
        const car = new Car(req.body)
        const newCar = await car.save()
        return res.status(201).json(newCar)
    }catch (error) {
        return res.status(400).json({error})
    }
}

export const getCars: RequestHandler = async (req, res) => {
    const cars = await Car.aggregate([
        {
          $project: {
            id: 1,
            make: 1,
            model: 1,
            description: 1,
            km: 1,
            image: 1,
            estimatedate: {
              $dateToString: {
                format: "%Y/%m/%d",
                date: "$estimatedate"
              }
            }
          }
        }
      ])
    if(cars && cars.length){
        return res.status(200).json(cars)
    }else{
        return res.status(404).json({"message":'Not found'})
    }
}

export const getCar: RequestHandler = async (req, res) => {
    try{
        const car = await Car.findById(req.params.id)
        if(car){
            return res.status(200).json(car)
        }else{
            return res.status(404).json({"message":'Not found'})
        }
    }catch(error){
        return res.status(400).json(error)
    }
}

export const updateCar: RequestHandler = async (req, res) => {
    if(req.body.estimatedate){
        const car = await Car.findById(req.params.id)
        if(car && car.estimatedate){
            return res.status(400).json({"message": "Estimatedate is already exist"})
        }
        const fields = {
            "estimatedate": new Date(req.body.estimatedate),
            "username": req.body.username
        }
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, fields, {new: true})
        return res.status(202).json(updatedCar)
    }else{
        return res.status(400).json({"message": "Estimatedate is required"})
    }
}