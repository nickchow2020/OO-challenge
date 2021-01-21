class MyVehicle{
    constructor(make,model,year){
        this.make = make
        this.model = model
        this.year = year
    }

    honk(){
        return "Beep"
    }

    toString(){
        const {make,model,year} = this
        return `The vehicle is a ${make} ${model} from ${year}`
    }
}

class MyCar extends MyVehicle{
    constructor(make,model,year){
        super(make,model,year)
        this.numWheels = 4
    }
}

class Motorcycle extends MyVehicle{
    constructor(make,model,year){
        super(make,model,year)
        this.numWheels = 2
    }

    revEngine(){
        return "VROOM"
    }
}





class Garage1 {
    constructor(capacity){
        this.capacity = capacity
        this.vehicle = []
    }

    add(vehicle){
        if(!vehicle instanceof MyVehicle) return "Only vehicles are allowed in here!"
        if(this.vehicle.length === 2) return "Sorry We're Full"
        this.vehicle.push(vehicle)
        return  "Vehicle added"
    }
}

class Garage {
    constructor(capacity){
        this.capacity = capacity
        this.vehicle = []
    }

    add(vehicle){
        if(!vehicle instanceof MyVehicle) return "Only vehicles are allowed in here!"
        if(this.vehicle.length < 2){
            this.vehicle.push(vehicle)
            return  "Vehicle added"
        }return "Sorry We're Full"
    }
}


const car1 = new MyCar("toyoto","civic",2000)
const car2 = new Motorcycle("honda","nightwalk",2000)