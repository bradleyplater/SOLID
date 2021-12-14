/*
This shows the correct implementation of Open-Closed Principle
We have a Shape interface which defines the contract for what each shape should have.
Both the Rectangle and the Circle implement the Shape interface.
This means that our class ShapeHelper is now open for extention but closed for modification.
This is because we can now add another shape for example a triangle 
and the function 'calculateAreaOfMultipleShapes' will be able to handle it.
*/
interface Shape {
    getArea(): number;
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number){
    }

    public getArea(){
        return this.width * this.height;
    }
}

class Circle implements Shape {
    constructor(public radius: number){
    }

    public getArea(){
        return this.radius * Math.PI;
    }
}

class ShapeHelper {
    public calculateAreaOfMultipleShapes(shapes: Shape[]){
        shapes.map((shape: Shape) => {
            console.log(`Area of Shape - ${shape.getArea()}`)
        })
    }
}
