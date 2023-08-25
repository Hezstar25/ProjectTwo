class Rectangle {
    constructor(length, breath, height) {
        this.length = length
        this.breath = breath
        this.height = height
    }
    area() {
        return this.length + this.breath
    }

    perimeter() {
        return 2 * (this.length + this.breath)
    }

    volume() {
        return this.length * this.breath * this.height
    }


    // asyn randomCalc() {
    //     const area = this area

    //     const perimeter = this perimeter

    //     return await (area + perimeter)
    //}

    static squaredSides(length, breath) {
        return (length ** 2) + (breath ** 2)
    }
}

const rectangleVal = new Rectangle(6, 10)

console.log(rectangleVal())
console.log(rectangleVal())

con

