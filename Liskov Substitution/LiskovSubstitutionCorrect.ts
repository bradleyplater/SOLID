/*
    This implementation is the correct way to implement the Liskov Substitution Principle(LSP).
    We have 2 classes implementing a Shape interface 'Square' and 'Rectangle'.

    We then have a 'ShapeHelper' class which has a static method of 'printArea'. 
    If this violated the LSP then we would not be able to pass both shapes in. 
    However 'Shape' is substituable for both Rectangle and Square thus implementing the LSP.
*/

interface Shape {
    getArea: () => Number;
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
    }

    setWidth(width: number) {
        this.width = width;
    }

    setHeight(height: number) {
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

class Square implements Shape {
    public height: number;
    constructor(private width: number) {
        this.height = width;
    }

    setWidth(width: number) {
        this.width = width;
        this.height = width;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

class ShapeHelper {
    //Only will accept a 'Shape'
    static printArea(shape: Shape){
        console.log(shape.getArea());
    }
}

let square = new Square(10);
let rectangle = new Rectangle(10, 20);

ShapeHelper.printArea(square);      // OUTPUT: 100
ShapeHelper.printArea(rectangle);   // OUTPUT: 200