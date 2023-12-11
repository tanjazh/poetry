
interface Car {
    year: number
    milage: number
    licensePlate: string
}

interface CarRental {
    name: string,
    cars: Car[]
}


const car1: Car = {
    year: 2015,
    milage: 1000,
    licensePlate: "ABC123"
}

const car2: Car = {
    year: 2010,
    milage: 2000,
    licensePlate: "XYZ123"
}

const avisCarRental: CarRental = {
    name: "AVIS",
    cars: [car1, car2]
}

const ikeaCarRental: CarRental = {
    name: "ikea",
    cars: [],
}

const cyprusCarRental: CarRental = {
    name: "cy Rental",
    cars: [{
        year: 2000,
        milage: 200000,
        licensePlate: "FOO000"
    }]
}
