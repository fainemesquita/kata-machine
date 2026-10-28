function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path //base case, if there are no more nodes to be visited
    }

    // pre
    //recurse
    walk(curr.left, path);
    walk(curr.right, path);

    // post
    path.push(curr.value); // here to look more clear the walks are over on both side
    return path

}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, [])

}