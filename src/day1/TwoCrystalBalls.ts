// you have 2 balls, find at which height they will break
// after each test, if they break and you are using binary search, the last known true point is still the previous step, so you're actually walking linearly
// for this case, we will use square root for the jumps

export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length))

    let i = jumpAmount;
    for (; i < breaks.length; i += jumpAmount )
        if (breaks[i]) {
            break
        }
    i -= jumpAmount;

    for (let j =0; j < jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i
        }
    }

    return -1;
}
/***
 * 
Binary search is the wrong tool here because a broken ball cannot be reused. The √n jump strategy keeps the worst case at O(√n) instead of O(n).

The constraint
You have a sorted boolean array: false means “did not break,” true means “breaks.” You need the first true.

You also have only two balls:

A ball that does not break can be dropped again.
A ball that breaks is gone. With one ball left, you must walk floor by floor.
That second rule is what kills binary search.

Why binary search becomes linear
Binary search’s first drop is at n / 2.

If it doesn’t break, you still have two balls and can keep splitting. That part is fine.
If it does break, you have one ball and a range of size n / 2 that you must scan linearly.
Worst case: the break point is just before the middle.

Drop at n / 2 → breaks
Walk 1, 2, 3, …, n/2 - 1
That is about n/2 drops. O(n), not O(log n). The “last known safe floor” never jumps; after the first break you are walking one step at a time.

How the √n strategy works
Split the building into jumps of size √n.

For n = 100, jumpAmount = 10. You drop the first ball at floors 10, 20, 30, …

floors:  0 ---- 10 ---- 20 ---- 30 ---- 40 ---- ...
drops:          1st     2nd     3rd     break


Suppose it first breaks at 40:

You now know it is safe at 30 and breaks by 40.
Go back to 31 and walk linearly with the second ball: 31, 32, 33, … until it breaks.
Worst case:

~√n jumps with the first ball (it breaks on the last jump)
~√n linear steps with the second ball (it breaks at the end of that interval)
Total: √n + √n = O(√n)

That is the balance: jump size k costs n/k jumps plus k linear steps. Minimize n/k + k → k = √n.

Mapping onto the code
jumpAmount = √n — interval size that balances the two phases.
First loop — first ball: skip ahead by √n until you hit a true (or run off the array).
i -= jumpAmount — go back to the last known safe index. The break is in the next √n floors.
Second loop — second ball: scan that window one floor at a time and return the first true.
-1 — never broke.


Binary search is optimal when every test is “free” (you can always cut the range in half). Here a true is expensive: it spends a ball. You therefore take smaller, even jumps so that when the first ball breaks, the remaining linear scan is short.
 */
