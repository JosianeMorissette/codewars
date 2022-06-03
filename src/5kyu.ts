//Simple Pig Latin
export function pigIt(a: string): string {

    a.split(" ").map(el => el.split("").splice(0))


    return a.split(' ').map(x => /[a-zA-Z]+/.test(x) ? x.slice(1) + x[0] + 'ay' : x).join(' ');
}

