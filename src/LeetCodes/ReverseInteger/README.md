# Reverse Integer

## Question

Given a **32-bit signed integer**, reverse digits of an integer. <br/>

For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

## Examples

```bash
Input : 123
Output: 321
```

```bash
Input: -123
Output: -321
```

```bash
Input: 120
Output 21
```

## Lets think about that

- You have basically have a lower bound and upper bound number that you can play with or you have to reverse;

- The lower bound is the smallest value that would round up to the estimated value. The upper bound is the smallest value that would round up to the next estimated value.
