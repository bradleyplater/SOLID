/*
This shows the correct implementation of Open-Closed Principle
The Rectangle or the Circle are both different shapes and have different getArea implementations.

The ShapeHelper therefore is no longer closed for modification. 
This is because if I were to add a new class of Triangle.
I would have to modify the 'calculateAreaOfMultipleShapes' method to be able to process a triangle
*/


class Rectangle {
    constructor(public width: number, public height: number){
    }

    public getArea(){
        return this.width * this.height;
    }
}

class Circle {
    constructor(public radius: number){
    }

    public getArea(){
        return this.radius * Math.PI;
    }
}

class ShapeHelper {
    public calculateAreaOfMultipleShapes(shapes: Array<Rectangle | Circle>){
        shapes.map((shape: Rectangle | Circle) => {
            console.log(`Area of Shape - ${shape.getArea()}`)
        })
    }
}
