
// Smiley :D (6 kyu)
export function countSmileys2(arr: string[]) {
    let smile = new RegExp("^(:|;)(-|~)?(\\)|D)$")
    return arr
        .map(elem => Number(smile.test(elem)))
        .reduce((a, b) => a + b, 0)
}

// Highest Scoring Word
function string_value(el: string): [string, number] {
    let x = el.split("").map(Number).reduce((a, b) => a + b, 0);
    return [el, x]
}

export function high(str: string): string {
    return str
        .split(" ")
        .map(string_value)
        .reduce((a, b) => (b[1] > a[1] ? b : a))[0]
}


// Find the odd int
export const findOdd = (xs: number[]): number => {

    let x = xs.find((num) => {
        let count = 0
        xs.forEach((el) => {
            if (num === el) {
                count = count + 1
            }
        })
        return count % 2 === 0 ? false : true;
    }
    )
    return x === undefined ? -1 : x

};

export const findOddOther = (items: number[]): number => {
    const uniqueItems = Array.from(new Set(items))

    for (const uniqueItem of uniqueItems) {
        const numberOccurences = items.filter(item => item === uniqueItem).length
        if (isOdd(numberOccurences)) return uniqueItem
    }

    throw new Error('none found')
}

function isOdd(num: number): boolean {
    return num % 2 === 1
}


// Build a pile of Cubes

export function findNbBest(m: number): number {
    var n = 0;
    while (m > 0) m -= Math.pow(++n, 3);
    return m ? -1 : n
}