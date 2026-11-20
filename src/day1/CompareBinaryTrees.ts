export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {

    if (a === null && b === null) { // this means we reached a point where we can't recurse any further 
        return true // both ended here -> same shape so far
    } 

    if (a === null || b === null) {
        return false // only one ended -> shapes differ
    }

    if (a.value !== b.value) {
        return false; // both exist -> compare data
    }

    return compare(a.left, b.left) && compare(a.right, b.right)

}