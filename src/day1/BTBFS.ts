export default function bfs(head: BinaryNode<number>, needle: number): boolean {

    const q: (BinaryNode<number> | null)[] = [head]; // TS either as array of binary nodes or a null

    /* If written like below instead, will require to ensure that current has left and right before pushing:

        const q = [head]; 

        if (curr.right) {
            q.push(curr.right)
        }

    */



    while (q.length){
        const curr = q.shift() as BinaryNode<number> | undefined | null;
        if (!curr) {
            continue;
        }

        // search
        if (curr.value === needle ) {
            return true
        }

        q.push(curr.left);
        q.push(curr.right)

    }

    return false;

}