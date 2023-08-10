# Function

```typescript
export const toFahreneit = (degreesCelsius: number): number => {
  return 1.8 * degreesCelsius + 32;
};
```

## Explanation

- We are accessing a variable performing a **multiplication** and performing the **addition**

- They all take different amounts of time for the **computative process**

- We can simplify things to counting the number of times we access the memory slot.

- In Big O notation, **constant time** is **0 of one**

- In the example code,

  - We are taking a copy of the **degreesCelsius**

  - We are assigning **a byte of memory** here.

  - Essentially, since we'are assigning one byte of memory there

  - or even if we'are assigning multiple bytes

  - we round that to **O of one** which is **constant time**

  - which means **memory complexity** or **space complexity** we have only used **one bit of memory** that's **constant memory** but it's also **constant time complexity**

  - because time complexity we've simplified down. we not considering all the operations **independently**

  - like that -> we'are just simplifying things to the times, the amount of times we need to access memory so.. we do need to access the memory and look up just **one bit of memory**

  - ✅ So, both the space and time complexiy in this case are going to be **constant time**.

  - 📒 **Constant time** => is the **ideal run time** of any function but we can't always just make our code into constant time complexity

  - 📒 because as you cound imagine.. we might not just one value in. We might pass Arrays or sth as an argument.
