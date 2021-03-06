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

//string to number
export function stringToNumber(str: string): number {
    return Number(str)
}


// DNA to RNA
export function DNAtoRNA(dna: string): string {

    return dna.split("").map(el => el === "T" ? "U" : el).join("")

}

export function DNAtoRNABest(dna: string): string {
    return dna.replace(/T/g, 'U'); // By default string.replace in JavaScript will only replace the first matching value it finds. Adding the /g will mean that all of the matching values are replaced.
}


// Messi goals function
export function goals(laLigaGoals: number, copaDelReyGoals: number, championsLeagueGoals: number): number {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

export function goalsBest(...args: number[]) {
    return args.reduce((a, b) => a + b);
}



// cockroach km/h to cm/s (4 mins)
export function cockroachSpeed(s: number): number {
    return Math.floor(s * 100000 / 3600)
}



// Correct the mistales of the character recognition
export function correct(s: string): string {
    return s
        .split("")
        .map(
            function (el: string | number) {

                if (el === 5) { el = "S" }
                else if (el === 0) { el = "O" }
                else if (el === 1) { el = "I" }
            }
        ).join("")
}
export function correctBest(s: string): string {
    return s !== '' ? s.split('').map(item => {
        if (item === '1') return 'I'
        else if (item === '0') return 'O'
        else if (item === '5') return 'S'
        else return item
    }).join('') : s
}

// You can't code under pressure
export function doubleInteger(i: number): number {
    return i * 2
}


// Convert a Boolean to a String
export function booleanToString(b: boolean): string {
    return b ? "True" : "False"
};


export function booleanToStringBest(b: boolean): string {
    return String(b)
};

// Cat years, Dog years

export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
    let first2Years = 15 + (humanYears > 1 ? 9 : 0)

    let catYears = first2Years + (humanYears > 2 ? (humanYears - 2) * 4 : 0)

    let dogYears = first2Years + (humanYears > 2 ? (humanYears - 2) * 5 : 0)

    return [humanYears, catYears, dogYears];
}


export const humanYearsCatYearsDogYearsBest = (num: number): [number, number, number] => ([
    num,
    num === 1 ? 15 : 15 + 9 + (4 * (num - 2)),
    num === 1 ? 15 : 15 + 9 + (5 * (num - 2))
  ]);