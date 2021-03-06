import {Router} from 'express'

import * as car from '../controllers/car'

const router = Router();

router.get('/test', (req, res) => res.send('API - CAR'))
router.post('/cars', car.createCar)
router.get('/cars', car.getCars)
router.get('/cars/:id', car.getCar)
router.put('/car/:id', car.updateCar)

export default router
