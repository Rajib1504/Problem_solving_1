## Difference Between `type` and `interface` in TypeScript

Often we face the question: _what is the difference between `interface` and `type` in TypeScript?_  
Although both look similar, they have key differences. Here's a breakdown:

###  Key Differences

1. **Inheritance:**
   - `interface` uses the `extends` keyword for inheritance.
   - `type` uses intersection (`&`) to combine types.

2. **Declaration Merging:**
   - `interface` supports declaration merging — you can define the same interface multiple times and they will be merged.
   - `type` is fixed once declared and cannot be merged.

3. **Primitives and Unions:**
   - `type` can represent primitives (`type ID = number`) and union types (`type Status = "success" | "error"`).
   - `interface` cannot define primitive or union types.

---

###  When Should You Use What?

-  Use `interface` for objects and classes, especially when designing public APIs.
-  Use `type` when you need unions, intersections, or more complex logic.

Both have their strengths — choose based on the use case.


## `keyof` Keyword in TypeScript

The `keyof` keyword in TypeScript is used to extract the **keys** of a type (usually an object type) as a union of string literal types. It's especially useful in **generic programming** to create flexible and type-safe functions or utilities.

###  Use Case :

`keyof` helps you refer to the property names of a type dynamically and safely.

### Example :

```ts
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; // "name" | "age"
