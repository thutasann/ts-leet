# Function

```typescript
export const logNums = (nums: Array<number>): void => {
  const message = 'Log Nums called';
  console.log(message);

  for (let i = 0; i < nums.length; i++) {
    console.log('Linear time -> ', nums[i]);
  }
};
```

## Explanation

- It just takes an array of numbers as an argument.

- We are looping through all the numbers and the array could vary in size

- This is Linear Time

  - it just occurs dependent on the length of the array.

  - So, **the speed of the algorithm** directly relates to **how long the array is**

  - Example, if you only had **one number** in the array, you'd only **one memory lookup**

  - A generic value that was assigned for a memory lookup is relating to the **time complexity**.

  - In this case, it's **completely dependent**

  - `let i = 0` and then we'are going to loop through that and then we'are going to **reassign** it.

  - then, Javascript in the background is going to take care of **freeing up the memory** and **reallocating that**

  - For `const messsage`, we have **O of one**, actually this is a string that is related to **O of one**.

  - For that message, we've got **15 bytes of memory** there were allocated to memory
