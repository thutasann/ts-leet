# Function

```typescript
/**
 * Quadratic Time (logPairs)
 * Space 0(1)
 * Time 0(n^2)
 * [1,2,3] => 1,1, 1,2, 1,3,  2,1, 2,2, 2,3,  3,1,3,2
 */
export const logPairs = (nums: number[]): void => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      console.log(i, j);
    }
  }
};
```

## Explanation

- Why is this N Squared?

  - ✅ We dont have two loops

  - ✅ We have a loop within a loop

  - As you can imagine, it's **slower than linear time**
