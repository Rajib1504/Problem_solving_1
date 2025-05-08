"use strict";
{
    function formatString(input, toUpper) {
        if (toUpper === false) {
            const update = input.toLowerCase();
            return update;
        }
        else {
            const update2 = input.toUpperCase();
            return update2;
        }
    }
    const res1 = formatString("hello");
    const res2 = formatString("hello", true);
    const res3 = formatString("hello", false);
    // console.log(res1,res2,res3)
}
{
    function filterByRating(items) {
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
    function concatenateArrays(...arrays) {
        return [].concat(...arrays);
    }
    const res1 = concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
    const res2 = concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]
    //     console.log(res1,res2)
}
{
    class Vehicle {
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            return (`Make:${this.make} Year:${this.year}`);
        }
    }
    const vehicle1 = new Vehicle("Audi", 2019);
    console.log(vehicle1.getInfo());
    // const myCar = new Car("Toyota", 2020, "Corolla");
}
