// Class example

class Point {
    constructor(
        public x: number,
        public y: number
    ) { }

    add(other: Point): Point {
        return new Point(
            this.x + other.x,
            this.y + other.y
        )
    }

    // without constructor
    static add(a: Point, b: Point): Point {
        return a.add(b)
    }
}

let a = new Point(1, 2)
let b = new Point(1, 2)

// With constructor
a.add(b)
b.add(a)

// Without constructor 
Point.add(a, b)


// Types has proprieties
type Food = {
    calories: number // Prorpiety
    tasty: boolean
}

type Cake = Food & {
    sweet: boolean
}

// Interfaces too
interface Food2 {
    calories: number
    tasty: boolean
}
interface Cake2 extends Food2 { // like a contract (and)
    sweet: boolean
}

class Cake3 { }

let x: Cake2 = {
    sweet: false,
    calories: 0,
    tasty: false
}

