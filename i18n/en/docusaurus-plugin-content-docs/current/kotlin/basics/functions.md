---
description: Functions in the Kotlin Programming Language for Beginners
keywords: [kotlin functions, functions in kotlin, tutorial, for beginners]
---

# Functions
Functions are an essential part of any program, allowing you to organize and execute a specific set of instructions. In the Kotlin programming language, functions play a crucial role and provide the ability to structure code, making it more readable and reusable. In this article, we will explore the basics of functions in Kotlin for beginners. Simply put, functions help consolidate many separate instructions (e.g., variable creation and input/output) into a single unit.

## Declaring Functions
Declaring a function in Kotlin is straightforward. Here's the general syntax for declaring a function:

```kotlin
fun [function_name]([parameters]): [return_type] {
    // Function body
    // Executed instructions
    return [expression]
}
```
`[function_name]` is the name of the function by which you will refer to it in your code.

:::tip Good to know
the function name has the same rules as the variable naming, so see the variable lesson if something is not clear
:::

`[parameters]` - parameters that the function accepts (optional).

`[return_type]` is the data type that the function returns (optional).

`[expression]` - the expression or value that the function returns (optional).

So here's an example of a simple function that prints text:

```kotlin
fun sayHello() {
    println("Hello, Kotlin!")
}
```
In this example, `sayHello` is the name of the function, and it takes no parameters and returns no value.

Function call
To call a function in Kotlin, you can use its name and pass the necessary parameters (if any). Here is an example of calling the sayHello function:

```kotlin
fun main() {
    sayHello() // Call the sayHello function and output "Hello, Kotlin!"
}
```
In this case, the `sayHello` function is called in the middle of the main function.

## Function parameters
Functions can accept parameters that allow data to be passed to the function for processing. Here is an example of a function that takes two parameters:

```kotlin
fun printSum(a: Int, b: Int) {
    println(a + b)
}
```
Let's try to see how our program works

```kotlin
fun main() {
    printSum(10, 15) // "25" will be displayed.
}
```

This example shows that you can not just transfer some value to the function right away, but you can first create a variable and assign it this value.
```kotlin
fun main() {
    val a = 10
    val b = 15
    printSum(a, b) // Output to the screen will be the same as in the previous example
}
```
In this case, the printSum function accepts two parameters a and b, both of type Int, and displays the result of their addition. Parameters are created in order to pass some data inside the function, which will later be used there. I think everything is clear at this point.

## Return value from function
A function can return a value using the return keyword. Here is an example:

```kotlin
fun multiply(a: Int, b: Int): Int {
    val result = a * b
    return result
}
```
In this case, the multiply function returns the result of multiplying parameters `a` and `b` as an Int integer. Maybe it is not clear to you what the word return means.. now I will try to explain first with theory and then with an example, see if a function has `[return_type]' then it must have the word return in its body (in the body of the function), this word simply returns data of this type, let's move on to an example
```kotlin
fun main() {
    val a: Int = 2
    val b: Int = 4
    val result = multiply(a, b)
    println(result) // As a result, the program will display the number 8 on the screen
}
```
Hmm... maybe you still don't understand why, let me explain what is done in the example above:
1. Creating the variable `a` and assigning it a value 2
2. Creating the variable `b' and assigning it the value 4
3. Creating the `result' variable and assigning it a value that will be returned by the `multiply' function, and in this function these two numbers are multiplied and the multiplication result is returned
4. This result is displayed on the screen and we will see 8

## Optional parameters and default values
In Kotlin, you can declare function parameters as optional and provide default values ​​for them. This allows you to call a function without necessarily specifying all parameters. Here is an example:

```kotlin
fun greet(name: String = "Guest") {
    println("Hello, $name!")
}
```
In this example, the name parameter is declared as optional (which means that if we don't pass any parameter to the function, the name variable will default to "Guest". If you call the `greet()` function without passing an argument, it will output "Hello "Guest!".

## Final thoughts
Functions are an important concept in the Kotlin programming language. They allow you to structure your code, make it more readable, and repeatable. In the future, we will talk a lot about functions, they are the basis of any programming language.

I hope everything was clear, if not, read the lesson again and you can Google what you don't understand)