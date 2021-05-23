export interface ICar {
    _id: number | any;
    make: string;
    model: string;
    description: string;
    km?: number;
    image: string;
    estimatedate: string;
}

export interface MyState {
    cars: ICar[];
    carDetail: ICar | undefined;
    getCars: () => void;
    getCar: (carId: number | string) => void;
    updateCar: (carId: number | string, date: Date) => void;
}