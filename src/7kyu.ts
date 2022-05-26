
// Ex. 4 Descending Order (7kyu)
export function descendingOrder(n: number): number {
    return Number(n.toString().split("").sort().reverse().join(""))
}


// Ex.2 Mumbling (7 kyu)
export function accum(s: string): string {
    return s.split('')
        .map((elem, index) => elem.toUpperCase() + (elem.toLowerCase()).repeat(index))
        .join('-');
}
