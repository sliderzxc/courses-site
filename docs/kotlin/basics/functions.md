---
description: Функції в мові програмування Kotlin для новачків
keywords: [kotlin функції, функції в kotlin, туторіал, для початківців]
---

# Функції
Функції - це важлива складова будь-якої програми, яка дозволяє вам організовувати та виконувати певний набір інструкцій. У мові програмування Kotlin функції грають важливу роль і надають можливість структурувати код, робити його більш читабельним та повторно використовуваним. В цій статті ми розглянемо основи функцій в Kotlin для початківців. Якщо по простому функції просто допомагають об'єднати багато окремих інструкцій (наприклад створення змінних та введення/виведення щось на екран)

## Оголошення функцій
Оголошення функції в Kotlin досить просте. Ось загальний синтаксис оголошення функції:

```kotlin
fun [ім'я_функції]([параметри]): [тип_повернення] {
    // Тіло функції
    // Виконувані інструкції
    return [вираз]
}
```
`[ім'я_функції]` - ім'я функції, за допомогою якого ви будете звертатися до неї в коді 

:::tip Корисно знати
ім'я функції має такі самі правила як і найменування змінних, тому передивіться урок про змінні, якщо щось не зрозуміло
:::

`[параметри]` - параметри, які функція приймає (не обов'язково).

`[тип_повернення]` - тип даних, який функція повертає (не обов'язково).

`[вираз]` - вираз або значення, яке функція повертає (не обов'язково).

Отже, ось приклад простої функції, яка друкує текст:

```kotlin
fun sayHello() {
    println("Привіт, Kotlin!")
}
```
У цьому прикладі `sayHello` - це ім'я функції, і вона не приймає жодних параметрів та не повертає жодного значення.

Виклик функції
Щоб викликати функцію в Kotlin, ви можете використовувати її ім'я та передати необхідні параметри (якщо вони є). Ось приклад виклику функції sayHello:

```kotlin
fun main() {
    sayHello() // Виклик функції sayHello і в результаті буде виведено "Привіт, Kotlin!"
}
```
У цьому випадку функція `sayHello` викликається в середині функції main.

## Параметри функції
Функції можуть приймати параметри, які дозволяють передавати дані у функцію для обробки. Ось приклад функції, яка приймає два параметри:

```kotlin
fun printSum(a: Int, b: Int) {
    println(a + b)
}
```
Спробуємо подивитися як працює наша програма

```kotlin
fun main() {
    printSum(10, 15) // На екран виведеться "25".
}
```

Цей приклад показує що можна не просто передавати якесь значення в функцію зразу, а можна створити спочатку змінну і присвоїти їй це значення.
```kotlin
fun main() {
    val a = 10
    val b = 15
    printSum(a, b) // Вивід на екран буде такий самий як і в минулому прикладі
}
```
У цьому випадку функція printSum приймає два параметри a і b, обидва типу Int, і виводить на екран результат їхнього додавання. Параметри створені для того щоб передати всередини функції якісь дані, які згодом там будуть використовуватися. Думаю на цьому моменті все зрозуміло.

## Повернення значення з функції
Функція може повертати значення за допомогою ключового слова return. Ось приклад:

```kotlin
fun multiply(a: Int, b: Int): Int {
    val result = a * b
    return result
}
```
У цьому випадку функція multiply повертає результат множення параметрів `a` і `b` у вигляді цілого числа Int. Можлвио для вас незрозуміло що означає слово return.. зараз спробую пояснити спочатку теорією а потім прикладом, дивіться якщо функція має `[тип_повернення]` то вона обов'язково має мати слово return в своєму тілі (в тілі функції), це слово просто вертає дані цього типу, давайте перейдемо то прикладу
```kotlin
fun main() {
    val a: Int = 2
    val b: Int = 4
    val result = multiply(a, b)
    println(result) // В результаті прорамама виведе на екран число 8
}
```
Хмм.. можливо ви досі не зрозуміли чому так, давайте поясню що робиться в прикладі вище:
1. Створення змінної `a` та присвоєння їй значення 2
2. Створення змінної `b` та присвоєння їй значення 4
3. Створення змінної `result` та присвоєння їй значення яке верне функція `multiply`, а в цій функції два цих числа перемножаються і вертається результат множенння
4. На екран виводиться цей результат і ми побачимо 8

## Необов'язкові параметри та значення за замовчуванням
В Kotlin ви можете оголосити параметри функції як необов'язкові і надати значення за замовчуванням для них. Це дозволяє викликати функцію без обов'язкового вказівання всіх параметрів. Ось приклад:

```kotlin
fun greet(name: String = "Гість") {
    println("Привіт, $name!")
}
```
У цьому прикладі параметр name оголошений як необов'язковий (це означає те що якщо ми не передамо ніякого параметру в функції то змінна name буде за замовчуванням "Гість". Якщо ви викличете функцію `greet()` без передачі аргументу, вона виведе "Привіт, Гість!".

## Заключні думки
Функції - це важлива концепція в мові програмування Kotlin. Вони дозволяють структурувати код, робити його більш читабельним та повтор. В майбутньому ми дуже багато разів будемо говорити про функції вони є основою любої мови програмування. 

Надіюся все було зрозуміло, якщо ні перечитайте ще раз урок і можете погуглити те що вам не зрозуміло)