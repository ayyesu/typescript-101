interface Vehicle {
    getVehicleMakeAndModel(): string;
}

class Car implements Vehicle {
    private make: string;
    private model: string;
    private price: number;
    readonly companyName: string;

    constructor(make: string, model: string, price: number) {
        this.make = make;
        this.model = model;
        this.price = price;
        this.companyName = make; // Name is unchangeable because of type readonly
    }

    setPrice = (price: number): void => {
        this.price = price;
    };
    setMake = (make: string): void => {
        this.make = make;
    };
    setModel = (model: string): void => {
        this.model = model;
    };
    getPrice = (): number => {
        return this.price;
    };

    getMake = (): string => {
        return this.make;
    };

    getModel = (): string => {
        return this.model;
    };

    getCompanyName = (): string => {
        return this.companyName;
    };
    getVehicleMakeAndModel = (): string => {
        return this.make + ' ' + this.model;
    };
}

class Shop extends Car {
    shopName: string;

    constructor(shopName: string) {
        super('make', 'model', 546);
        this.shopName = shopName;
    }
}

const car = new Car('Benz', 'AMG', 456.45);

console.log('Car Make:', car.getMake());
console.log('Car Model:', car.getModel());
console.log('Car price:', car.getPrice());
console.log('Company:', car.getCompanyName());
