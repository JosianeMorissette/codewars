// Ex.1 Find the needle in a haystack
export function findNeedle(haystack: any[]): string {
    return "found the needle at position " + haystack.indexOf('needle');
}


// Ex.3 Even or Odd
export function even_or_odd2(n: number): string {
    if (n % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

// ternary 
export function even_or_odd(n: number): String {
    return n % 2 == 0 ? "Even" : "Odd";
}

export function descendingOrder2(n: number): number {
    return parseInt(n.toString().split('').sort().reverse().join(''));
}


// popular answer 
function isValidSmiley2(smiley2: string) {
    // allow for eyes ':' OR ';'
    // allow for nose '-' OR '~' OR nothing (optional)
    // allow for mouth ')' OR 'D'
    var regexp = new RegExp('[:;]{1}[-~]{0,1}[\)D]{1}');
    return regexp.test(smiley2);
}

// return the total number of smiling faces in the array
export function countSmileys(arr: string[]) {
    return arr.filter(isValidSmiley2).length;
}


// Exes and Ohs
export function xo(str: string) {
    return str
        .toLowerCase()
        .split("")
        .map((elem): number => {
            if (elem === "x") {
                return 1
            } else if (elem === "o") {
                return -1
            } else {
                return 0
            }
        })
        .reduce((a, b) => a + b, 0) == 0
}

// Beginner Series #2 Clock
export function past(h: number, m: number, s: number): number {
    return ((h * 3.6e+6) + (m * 60000) + (s * 1000))
}


// String repeat
export function repeatStr(n: number, s: String): String {
    return s.repeat(n);
}


// Return Negative 1
export const makeNegative = (num: number): number =>
    -Math.abs(num)

    ;

//Return Negative 2
export const makeNegative2 = (num: number): number => {
    return num < 0 ? num : num * -1;
};


// Find the smallest integer in the array
export function findSmallestInt(args: number[]): number {
    return Math.min(...args);
}


// Function 3 - multiplying two numbers
export function multiply(a: number, b: number): number {
    return a * b
}


//Opposites Attract
export function lovefunc(flower1: number, flower2: number): boolean {
    return (flower1 % 2 == 0) === (flower2 % 2 == 0) ? false : true;
}

export function lovefuncBest(flower1: number, flower2: number): boolean {
    return flower1 % 2 != flower2 % 2;
}

// Fake binary
export const fakeBin = (x: string): string => {

    return x
        .split("")
        .map(Number)
        .map(el => el < 5 ? 0 : 1)
        .map(String)
        .join("")

};

// Are You Playing Banjo?
export function areYouPlayingBanjo(name: string): string {

    return name.toLowerCase().charAt(0) === "r" ? name + " plays banjo" : name + " does not play banjo"

}

// Counting sheep...
export function countSheeps(sheepFlock: (boolean | undefined | null)[]): number {
    return sheepFlock
        .filter(Boolean)
        .length
}


// Invert values 1:40
export function invert(array: number[]): number[] {
    return array.map(el => -el);
}


// Abbreviate a two word name
export function abbrevName(name: string): string {
    return name
        // jean coutu
        .split(" ")
        //["jean", "coutu"]
        .map(name => name[0])
        // ["J", "c"]
        .join('.')
        // "j.c"
        .toUpperCase()
    // "J.C"
}

// Switch it up!
export function switchItUpBest(intNumber: number): string {
    enum out { Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten };
    return out[intNumber];
}