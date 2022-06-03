
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

