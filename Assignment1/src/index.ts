{
      function formatString(input: string, toUpper?: boolean): string {
            if (toUpper === false) {
                  const update = input.toLowerCase()
                  return update
            } else {
                  const update2 = input.toUpperCase()
                  return update2
            }
      }
      const res1 = formatString("hello",)
      const res2 = formatString("hello", true)
      const res3 = formatString("hello", false)
      // console.log(res1,res2,res3)
}
{
      function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
            const filterItem = items.filter((item) => item.rating > 4.0);
            return filterItem;
      }

      const books = [
            { title: "Book A", rating: 4.5 },
            { title: "Book B", rating: 3.2 },
            { title: "Book C", rating: 5.0 }
      ];

      const res1 = filterByRating(books);

      // console.log(res1)
      // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
}
{
      //Create a generic function that concatenates multiple arrays of the same type using rest parameters.
      function concatenateArrays<T>(...arrays: T[][]): T[] {
            return ([] as T[]).concat(...arrays)


      }
      const res1 = concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
      const res2 = concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]
      //     console.log(res1,res2)
}


{
      class Vehicle {
            constructor(private make: string, private year: number) {
            }
            getInfo() {
                  return (`Make:${this.make}, Year:${this.year}`)
            }
      }
      class Car extends Vehicle {
            constructor(make: string, year: number, private model: string) {
                  super(make, year);
            }
            getModel() {
                  return (`Model:${this.model}`)
            }
      }
      const myCar = new Car("Toyota", 2020, "Corolla");
      // console.log(myCar.getModel())
      // console.log(myCar.getInfo())

}
{
      function processValue(value: string | number): number {
            // return value
            if (typeof value === "string") {
                  const Length: number = value.length
                  return Length;
            } else if (typeof value === "number") {
                  return value * 2
            } else {
                  throw new Error("invalid input")


            }

      }
      const res1 = processValue(10)
      const res2 = processValue("hello")
      // console.log(res1,res2)

}
{

      interface Product {
            name: string;
            price: number;
      }

      function getMostExpensiveProduct(products: Product[]): Product | null {
            if (products.length === 0) {
                  return null
            }
            return products.reduce((maxproduct, currentProduct) =>
                  currentProduct.price > maxproduct.price ? currentProduct : maxproduct
            )

      }
      const products = [
            { name: "Pen", price: 10 },
            { name: "Notebook", price: 25 },
            { name: "Bag", price: 50 }
      ];

      const res1 = getMostExpensiveProduct(products);
      //     console.log(res1)
      // Output: { name: "Bag", price: 50 }
}


{
      // Define an enum Day for the days of the week.
      // Create a function that returns "Weekday" or "Weekend" based on the input day.


      enum Day {
            Monday,
            Tuesday,
            Wednesday,
            Thursday,
            Friday,
            Saturday,
            Sunday
      }

      function getDayType(day: Day): string {
            if (day === Day.Sunday || day === Day.Saturday) {
                  return "Weekend"
            }
            else {
                  return "Weekday"
            }
      }


      const res1 = getDayType(Day.Monday);   // Output: "Weekday"
      const res2 = getDayType(Day.Sunday);   // Output: "Weekend"
      // console.log(res1,res2)
}
{

      // Description: Create an async function that:
      // Returns the square of a number after 1 second
      // Rejects if the number is negative


      async function squareAsync(n: number): Promise<number> {
         
return new Promise((resolve,reject)=>{
      setTimeout(() => {
            if(n < 0){
                 reject("Negative number not allowed")
              }
            resolve(n*n)
      }, 1000);
})

      }
      // squareAsync(4).then(console.log);        // Output after 1s: 16
      // squareAsync(-1).catch(console.error);    // Output: Error: Negative number not allowed
}