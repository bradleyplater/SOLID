/*
    This implementation is demonstrating a violation of the Liskov Substitution Principle(LSP).
    Square inherits from Rectangle.
    We then have a 'ShapeHelper' class which has a static method of 'printArea'. 
    The reason that this violates the LSP is because when substituting a square with a rectangle and were to change the width, 
    the 'printArea' method does not behave the same way as if we were to pass it an actual Rectangle. So Rectangle is not a good abstraction for a Square
*/


class Rectangle {
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

class Square extends Rectangle {
    constructor(public side: number) {
        super(side, side)
    }

    setWidth(width: number) {
        super.setWidth(width)
        super.setHeight(width)
    }

    setHeight(height: number) {
        super.setHeight(height);
        super.setWidth(height);
    }
}

class ShapeHelper {
    static printArea(shape: Rectangle){
        console.log(shape.getArea());
    }
}


let rectangle: Rectangle = new Square(10); // Can be either a Rectangle or a Square
rectangle.setWidth(20);

ShapeHelper.printArea(rectangle);   // If the Rectangle is a Square it will output:    400
                                    // If the Rectangle is a Rectangle it will output: 200