import mysql from 'mysql';


/*
This is incorrect for breaking the Single Responsibilty Principle
The Car class is responsible for 2 things.
1 - Storing the Data of a Car
2 - Getting the Data of a Car
There should be a seperate class for 
*/
class Car {
    private database: mysql.Connection;

    constructor(private make: string, private model: string){
        this.database = mysql.createConnection({host: 'fakehost', user: 'fakeuser', password: 'fakepassword', database: 'Cars'});
    }

    getModel() {
        return this.model;
    }

    getMake() {
        return this.make;
    }

    saveCar(make: string, model: string){
        const queryString = "INSERT INTO Cars (make, model) VALUES (?, ?)"
        this.database.query(queryString, [make, model]);
    }
}