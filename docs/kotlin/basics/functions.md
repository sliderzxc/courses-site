---
description: Пояснення та приклади функцій на Kotlin
keywords: [kotlin functions, функції, kotlin функції, туторіал, для новачків]
---
# Функції
Уявіть будь-яку однотипну дію або декілька дій, яку ви робите кожен день, і дайте їй якусь назву. За приклад такого набору дій візьмемо біг.

Біг – однотипна дія перебирання ногами, що залежить від деяких змінних (наприклад, вашої фізичної форми, темпу чи втоми).
Всі подібні дії у світі програмування називають *функціями*.
Що таке функція? **Функція** — це фрагмент коду, який має унікальне ім'я, тип, що є результатом виконання функції
(aka значення або величина) та/або параметри (ті самі змінні, від яких залежить однотипна дія).
* Фрагмент коду - це ті самі дії, які ви робите, наприклад, при тому ж бігу. Виділення якогось коду під функцію зроблено лише одного: позбутися однакового коду.
* Параметри функції – це значення, від яких залежить ваш фрагмент коду. Наприклад, числа над якими виконуватимуться деякі обчислення функції. Параметри не можуть змінюватися (їм не можна надати інше значення).
* Тип, що є результатом обчислень - це те, що ви отримуєте в результаті вашої дії. Наприклад, ви отримуєте кількість часу, коли ви бігали, і це, і є результатом (тобто називається *результатом функції (її типом)* у програмуванні).
  Записати функцію можна так:
```kotlin
fun [назваФункції]([назваПараметру]: [типПараметра]): [типРезультату] {
	...
}
```
Не лякайтеся, що тут так багато тексту! Насправді все дуже просто:
- Ключове слово `fun` використовується для оголошення того, що ми будемо декларувати (створювати) нову функцію.
- Далі у нас йде назва функції, що має ті ж правила, що й назви змінних - унікальна назва без прогалин, перший символ маленький і таке інше.
- Далі відкриваються круглі дужки, де вказуються параметри функції. Навіть якщо параметри функції не потрібні — вони все одно вказуються.
    * Далі йде назва аргументу, де застосовуються такі ж правила як і до назви функцій та змінних
    * Після чого йде обов'язкова вказівка типу (сутності) нашого аргументу.
    * Якщо у нас кілька аргументів, далі йде `,` та вказівка наступного аргументу.
    * Ну і закриваємо дужки
* Далі йде вказівка типу, що є результатом обчислень функції. Але варто враховувати, що функції не завжди повинні щось повертати (якщо функція нічого не повертає, вона має тип `Unit`).
* Далі відкриваються фігурні дужки (все, що всередині називають **тілом функції**), де вже йде наш фрагмент коду. Якщо нам потрібно щось повернути з функції, використовується ключове слово `return` (наприклад, щоб повернути ціле число ми напишемо `return 10`).
  Тепер, коли ми бачили формули для наших програм, перейдемо до бойового завдання!
## Приклад
Щоб закріпити наші знання, спробуймо щось зробити.
У кожному курсі всі спочатку роблять 'Hello, World'. Давайте не змінюватимемо традиціям.
Для того, щоб створити програму, логічно, що нам потрібно визначити точку її початку. У Kotlin, точку початку оголошують створюючи функцію `main()` (яка, до речі, не повертає жодного результату).
```kotlin
fun main(): Unit {
	println("Hello, World!") // функція println вбудована в Kotlin
}
```
Для того, щоб запустити нашу програму, в IDE ми натискаємо наступну кнопку:

![run](images/ide_run_hello_world_1.png)

І в списку, що випав, натискаємо 'Run Main.kt'.
І отримуємо результат:

![run1](images/ide_run_hello_world_2.png)

До речі, тип `Unit` є стандартним для всіх функцій, тому вказувати його не обов'язково.

Перейдемо ж, до більш складних завдань.

Мені не до вподоби торкатися математики при поясненні деяких тем, але давайте все ж таки, спробуємо створити функцію 
засобами мови програмування.
Візьмемо наступний нескладний у розумінні вираз:
:::info Завдання
Відтворіть наступний вираз засобами мови програмування:
$$
f(x)=x+1
$$
:::
:::tip Потрібно знати
Якщо ви пам'ятаєте шкільний курс математики, то вже могли згадати про координатну вісь.
В нашому випадку в нас є `x` (незалежна змінна) та `y` (що є залежною від `x`).

Тобто `y` – це те, що повертається в результаті виконання функції (відповідник `return`).
Але, ми, звісно, не будемо малювати графіки, у нас зовсім інша задача.
:::
У нас деяка функція з параметром `x` (число, очевидно), яка повертає вказане число плюс один.
Як подібна функція виглядатиме на Котліні?
```kotlin
fun f(x: Int): Int {
	return x + 1
}
```
Начебто нескладно, так? Головне, спочатку, підглядати на формулу того, як будується функція.
Давайте, викличемо цю функцію:
```kotlin
fun main() { // оголошуємо початок нашої програми
	val x: Int = 10 // задаємо довільне число
	val result: Int = f(x) // отримуємо результат від виконання функції
	println(result) // функція println є вбудованою в Kotlin, що пише текст у консоль. Ми же маємо текст (результат) від виконання функції в змінній.
}
```
Можна спростити до наступного варіанту:
```kotlin
fun f(x: Int) = x + 1
```
Код, який має лише одну послідовність дій, можна оголосити через `=`. Тип, що повертається, буде визначений автоматично мовою програмування. У нашому випадку, це буде `Int`, тобто - ціле число.

До речі, теж самий «Hello, World!» можна було написати так:
```kotlin
fun main() = println("Hello, World!")
```

Але найчастіше код у вас буде довшим, ніж одна послідовність дій.

До речі, це також працює зі змінними:
```kotlin
fun main() {
	val x = 10
	val result = f(x)
	println(f(x))
}
```
Закріплювати знання потрібно практикою! Для цього спробуйте написати невелику програму для вирішення наступної функції:

$f(y)=\frac{y}{2}$

Також варто відзначити, що ділення виконується за допомогою оператора `/`.
І знову незнайомий термін! Хто цей ваш оператор?