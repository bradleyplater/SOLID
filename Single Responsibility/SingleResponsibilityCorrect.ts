import mysql from 'mysql';

/*
This is now correctly follwoing the Single Responsibilty Principle
Both classes are seperate and only doing one thing and not doing anything else.
*/

class Car {
    private carRepo: CarRepository;

    constructor(private make: string, private model: string){
    }

    getModel() {
        return this.model;
    }

    getMake() {
        return this.make;
    }
}

class CarRepository {
    private database: mysql.Connection;

    constructor(){
        this.database = mysql.createConnection(
            {
                host: 'fakehost', 
                user: 'fakeuser', 
                password: 'fakepassword', 
                database: 'Cars'
            });
    }

    saveCar(make: string, model: string){
        const queryString = "INSERT INTO Cars (make, model) VALUES (?, ?)"
        this.database.query(queryString, [make, model]);
    }
}