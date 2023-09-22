---
description: Інтерполяція рядків у Kotlin для новачків
keywords: [kotlin string, kotlin string templates, kotlin інтерполяція, kotlin рядки, туторіал, для новачків]
---
# Інтерполяція рядків
Пам'ятаєте конкатенацію рядків? У попередній темі про цикли, ми використовували її, щоб
до числа додати текст, наприклад: `println("Сума: " + sum)`. А що, якщо я вам скажу, що можна
робити це простіше?

Взагалі, інтерполяція рядків була створена задля того, щоб полегшувати код, який має
багато змінних, які потрібно вивести. Інтеполяція виглядає наступним чином:
```kotlin
println("Сумма: $sum")
```
Тобто, даний метод дозволяє використовувати зміні прямо в рядку, без оператора додавання.
:::info Інформація
Інтерполяція працює з будь-яким типом даних. Kotlin викликає на будь-якому виразі в
рядку функцію `toString()`.
:::

## Вирази
Окрім змінних, інтерполяція також працює з будь-якими виразами:
```kotlin
fun getString() = "xyz"

fun main() {
    println("getString() returns ${getString()}")
}
```
До нашого знаку долара додались фігурні дужки, в яких і знаходиться наш вираз.
:::caution Увага
Можна робити вирази будь-якого вигляду та розміру, але рекомендую все ж таки не зловживати.
Також, важливо не плутати варіант для змінних та виразів, хоча варіант для виразів і зійде
для змінних, навпаки ви зробити це не зможете:
```kotlin
val value = 100
println("value is $value") // ok
println("value is ${value}") // ok, але IDE нам підкаже, що краще зробити за варіантом вище

println("getString() returns ${getString()}") // ok
// This will error
println("getString() returns $getString()") // не ок, котлін подумає, що ви хочете отримати змінну
```
:::