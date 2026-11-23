function search (curr: BinaryNode<number> | null, needle: number): boolean {
    // 1. base case: null
    if (!curr) {
        return false
    }
    // 2. base case: same value
    if (curr.value === needle) {
        return true
    }
    // 3. base case: smaller value -> traverse right
    if (curr.value < needle) {
        return search(curr.right, needle)
    }
    // 4. base case: bigger value -> traverse left
    return search(curr.left, needle) 
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head,needle)
}

//Depth fisrt search on binary search tree