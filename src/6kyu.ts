
// Smiley :D (6 kyu)
export function countSmileys2(arr: string[]) {
    let smile = new RegExp("^(:|;)(-|~)?(\\)|D)$")
    return arr
        .map(elem => Number(smile.test(elem)))
        .reduce((a, b) => a + b, 0)
}


