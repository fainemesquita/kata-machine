export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {

    if (a === null && b === null) { // this means we reached a point where we can't recurse any further 
        return true
    } 
    
    if (a === null || b === null) {
        return false
    }

    if (a.value !== b.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right)

}