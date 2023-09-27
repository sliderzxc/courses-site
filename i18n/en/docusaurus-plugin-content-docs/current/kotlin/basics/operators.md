---
description: Operators in the Kotlin programming language for beginners
Keywords: [kotlin operators, operators in kotlin, tutorial, for beginners]
---

# Operators 

Operators are key elements of any programming language that are used to perform various actions on data. In Kotlin, operators play an important role in performing calculations and managing program code. In this lesson, we're going to look at the basic operators in Kotlin for beginners. They are a very important part of developing a Kotlin program.

## Arithmetic operators
Arithmetic operators are used to perform mathematical operations on numbers. The main arithmetic operators in Kotlin are:

* **Addition (`+`)**: Used to add two numbers, for example: `a + b`.
* **Subtraction (`-`)**: Used to subtract one number from another, for example: `a - b`.
* **Multiply (`*`)** Used to multiply two numbers, for example: `a * b`.
* **Divide (`/`)**: Used to divide one number by another, for example: `a / b`.
* **Modulus (`%`)**: Used to find the remainder of dividing two numbers, for example: `a % b`.
* **Compound Operators**:
    * `+=` operator to add another value to the current value.
      Equivalent to the following: `a = a + b`.
    * `-=` the operator for subtracting a value from the current value.
      Equivalent to the following: `a = a - b`.
    * `*=` the operator of multiplying the current value by some value.
      Equivalent to the following: `a = a * b`.
    * `/=` the operator of dividing the current value by some value.
      Equivalent to the following: `a = a / b`.
    * (`!=`): the 'not equal to' operator, which corresponds to `!(n == 1)` (parentheses are used to summarize the results of expressions)

**Examples of using arithmetic operators**:

```kotlin
val a = 10
val b = 5

val sum = a + b // 15
val difference = a - b // 5
val product = a * b // 50
val quotient = a / b // 2
val remainder = a % b // 0, zero will be obtained because we calculate the remainder of division by 5, and if we divide 10 by 5, it will be divided without a remainder
```

Since we learned how to work with functions in the last lesson, let's make a function that will calculate the perimeter of a rectangle
```kotlin
fun perimeterOfRectangle(a: Int, b: Int): Int {
    val perimeter = 2 * (a + b) // Here we calculate the perimeter of a rectangle using several arithmetic operators in one line, and of course you can do this
    return perimeter
}

fun main() {
    val a = 10
    val b = 8
    val result = perimeterOfRectangle(a = a, b = b) // We can also explicitly specify which parameter will be equal to what, but this is not necessary
    println(result) // 36 will be displayed, check it out.
}
```

:::info Task 1.
Create a function that will calculate the area of an isosceles triangle.
:::

The solution to this problem:
```kotlin
fun squareOfTriangle(a: Int, b: Int): Int {
    return a * b * 0.5
}
```

I think at this point you understand everything, practice with arithmetic operators to improve your knowledge.

## Logical operators
* `>` operator greater than (`a > b`)
* `<` operator less than (`a < b`)
* `&&` operator 'and' (`a > b && b < c': `a' is greater than `b' and `b' is less than `c')
* `||` operator 'or' (`a > b || c < a`: `a` is greater than `b` or `c` is less than `a`)
* `==` the operator of equality of two values (`a == 5`)
* `!` operator of opposition (if we have `false`, it turns into `true` and vice versa)
* compound operators:
    * `>=` operator greater than or equal to (`a >= 5`)
    * `<=` operator less than or equal to (`a <= 5`)

We are done with the theoretical part, let's practice, in this example we have written a function that finds out whether x is greater than y or not, we wrote it in one line for convenience and to make the code shorter
```kotlin
fun isBigger(x: Int, y: Int): Boolean = x > y // Functions can also be written in one line (then you don't need such brackets `{}`).
```

:::caution Caution.
It is important to keep in mind that **you cannot compare different types 
data types cannot be compared** (but this does not apply to numbers).
That is, if we compare a string with a number, for example, **we will get a compilation error**.
:::    

## Conditional statements
Conditional operators work with a condition, as evidenced by the name of these operators
* `if` operator 'if this is true, then something'. Works in cooperation with `else`: "if it is true, then this, but if not, then (code snippet from else)".
* `when` operator for multiple "if true, then ...

### if-else
One of the conditional statements is `if-else`.
It is a very simple construct that means "if this is true, then do this, otherwise, do that".
It is written like this:
```kotlin
val isBigger: Boolean = a > b
if(isBigger) {
	println("a is greater than b!")
} else {
	println("b is greater than a!")
}
```
But what if we have several conditions? For example, we need to find out the largest of three arbitrary ones.
Using logic, you can come to the conclusion that you can add another `if` to `else {...}`. And it will be right! It will work.
```kotlin
fun getBiggest(a: Int, b: Int, c: Int) {
	if(a > b && a > c) { // here, by the way, the logical operator 'and' is used
		return a
	} else {
		if(b > a && b > c) {
			return b
		} else {
			return c
		}
	}
}
```
But the code has become much more complicated. Can it be simplified?
Yes, indeed, this construct can be simplified.
For if, as well as for else, one simplification is used:
- If you have only one chain of actions, you don't need to specify curly braces.
  That is, the result is as follows:
```kotlin
if(a > b && a > c)
	return a
else if(b > a && b > c)
	return b
else return c
```
Now the code is much better than before. But, friends, the magic doesn't end there:
```kotlin
return if(a > b && a > c) {
	a
} else if(b > a && b > c)
	b
else c
```
Whoa, whoa, what is this? If you've studied other programming languages before, you might know about the "ternary operator". Well, Kotlin decided to make it possible to use the conditional if-else statement (and, going forward, the `when' statement) as an *expression* (everything that can express a value: a raw value like `10', a function that returns a value, and anything else that returns a value as a result is called an *expression*).

What does this mean? This means that code snippets in if will act as conditional functions that return a value (number or something else) from each processed branch of the condition. In order to return something from a code snippet, we need to write the value (or a variable/function that will have the value we need) last in our code snippet.

Let's consolidate the material by doing the following:
:::info Task
Run the following expression in Kotlin:
$$
f(x) =\left\{
\begin{array}{ c l }
x & \quad \textrm{if } x \geq 0
\\
2x & \quad \textrm{if x < 0}
\end{array}
\right.
$$
:::
Here we have only two values, which makes the task very primitive:
```kotlin
fun f(x: Int): Int {
	return if(x >= 0)
		x
	else 2 * x
}
```
Okay, we've figured it out. But what if we have more conditions? Do we make endless chains of `if-else`? No way.
### When
For a large sample of conditions, we created the `when` operator.
To understand for which cases it is used, let's solve the following problem:
:::info Task #1.
Create a function that will return the day of the week by its ordinal number.
That is: if you enter the parameter '1' into the function, the function will return "Monday". And so on.
:::

To do this, we can use the `when` statement, which will be much clearer than endless `if-else` chains.
```kotlin
fun getDay(ordinal: Int): String {
	return when {
		ordinal == 1 -> "Monday"
		ordinal == 2 -> "Tuesday"
		ordinal == 3 -> "Wednesday"
		ordinal == 4 -> "Thursday"
		ordinal == 5 -> "Friday"
		ordinal == 6 -> "Saturday"
		ordinal == 7 -> "Sunday"
		else -> "Invalid number entered"
	}
}
```
It is worth noting `else`, which also exists in the `when` statement. It works in a similar way, handling a condition that has not been satisfied before.
In our case, if you enter a number greater than 7 into the function, a message will be returned that the wrong day is specified.
By the way, the conditions look the same, don't they? "That's a lot of work," Kotlin said, and made another simplification:
```kotlin
fun getDay(ordinal: Int): String {
	return when(ordinal) {
		1 -> "Monday"
		2 -> "Tuesday"
		3 -> "Wednesday"
		4 -> "Thursday"
		5 -> "Friday"
		6 -> "Saturday"
		7 -> "Sunday"
		else -> "Invalid number entered"
	}
}
```
How much clearer and more obvious everything has become, isn't it?
To consolidate the material, let's solve the following task:

:::info Task #2.
Make the following function in Kotlin:
$$
f(x) =\left\{
\begin{array}{ c l }
x + 1 & \quad \textrm{if } x < 0
\\
2 x & \quad \textrm{if } x \geq 1   
\le 10
\\
x + x & \quad \textrm{if } x > 10
\\
0 & \quad \textrm{otherwise}
\end{array}
\right.
$$
:::
In this expression, we have 4 conditions. Our `when' is just right for this:
```kotlin
fun f(x: Int): Int {
	return when {
		x < 0 -> x + 1
		x >= 1 <= 10 -> 2 * x
		x > 10 -> x + x
		else -> 0
	}
}
```
:::tip Addition
You can also declare your own variants of operators, 
but we'll talk about that some other time.
:::