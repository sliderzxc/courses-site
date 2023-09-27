---
description: Оператори в мові програмування Kotlin для початківців
keywords: [kotlin оператори, оператори в kotlin, туторіал, для початківців]
---

# Оператори 

Оператори - це ключові елементи будь-якої мови програмування, які використовуються для виконання різних дій над даними. У мові програмування Kotlin оператори грають важливу роль у виконанні обчислень та управлінні програмним кодом. В цьому уроці ми розглянемо основні оператори в Kotlin для початківців. Вони є дуже важливою частинкою в розробці програми на Kotlin.

## Арифметичні оператори
Арифметичні оператори використовуються для виконання математичних операцій над числами. Основні арифметичні оператори в Kotlin:

* **Додавання (`+`)**: Використовується для додавання двох чисел, наприклад: `a + b`.
* **Віднімання (`-`)**: Використовується для віднімання одного числа від іншого, наприклад: `a - b`.
* **Множення (`*`)**: Використовується для множення двох чисел, наприклад: `a * b`.
* **Ділення (`/`)**: Використовується для ділення одного числа на інше, наприклад: `a / b`.
* **Модуль (`%`)**: Використовується для знаходження залишку від ділення двох чисел, наприклад: `a % b`.
* **Складені оператори**:
    * `+=` оператор додавання до поточної величини ще одне значення.
      Еквівалентно наступному: `a = a + b`.
    * `-=` оператор віднімання значення від поточної величини.
      Еквівалентно наступному: `a = a - b`.
    * `*=` оператор множення поточної величини на деяке значення.
      Еквівалентно наступному: `a = a * b`.
    * `/=` оператор ділення поточної величини на деяке значення.
      Еквівалентно наступному: `a = a / b`.
    * (`!=`): оператор 'не дорівнює', що відповідає `!(n == 1)` (дужки використовуються для підсумування результатів виразів)

**Приклади використання арифметичних операторів**:

```kotlin
val a = 10
val b = 5

val sum = a + b // 15
val difference = a - b // 5
val product = a * b // 50
val quotient = a / b // 2
val remainder = a % b // 0, нуль вийде тому що ми вираховуємо остачу від діленя на 5, а якщо 10 поділимо на 5 воно поділиться без остачі
```

Так як ми навчилися працювати з функціями в минулому уроці, давайте зробимо функцію яка буде обчислювати периметер прямокутника
```kotlin
fun perimeterOfRectangle(a: Int, b: Int): Int {
    val perimeter = 2 * (a + b) // Тут ми вираховуємо периметр прямокутника, використовуючи зразу декілька арифметичних операторів в одному рядку, і звичайно так робити можна
    return perimeter
}

fun main() {
    val a = 10
    val b = 8
    val result = perimeterOfRectangle(a = a, b = b) // Ми можемо вказувати також явно який параметр чому буде дорівнювати, але це не обов'язково
    println(result) // на екран виведеться 36, перевірте це.
}
```

:::info Завдання №1.
Створіть функцію, яка буде вираховувати площу рівнобедренного трикутника.
:::

Розв'язок цієї задачі:
```kotlin
fun squareOfTriangle(a: Int, b: Int): Int {
    return a * b * 0,5
}
```

Думаю на цьому моменті вам все зрозуміло, попрактикуйтеся з арифметичними операторами щоб вдосконалити свої знання.

## Логічні оператори
* `>` оператор більше ніж (`a > b`)
* `<` оператор менше ніж (`a < b`)
* `&&` оператор 'і' (`a > b && b < c`: `a` більше `b` і `b` менше `c`)
* `||` оператор 'або' (`a > b || c < a`: `a` більше `b` або ж `c` менше `a`)
* `==` оператор рівності двох значень (`a == 5`)
* `!` оператор протилежності (якщо у нас `false`, перетворюється на `true` і навпаки)
* складені оператори:
    * `>=` оператор більше або дорівнює (`a >= 5`)
    * `<=` оператор менше або дорівнює (`a <= 5`)

З теоретичною частиною закінчили, давайте попрактикуємося, в цьому прикладі ми написали функцію яка вияснює чи x більше за y чи ні, записали ми її в один рядок для зручності, та щоб був коротший код
```kotlin
fun isBigger(x: Int, y: Int): Boolean = x > y // Функції теж можна записувати в один рядок (тоді не потрібні такі дужки `{}`).
```

:::caution Увага
Важливо враховувати, що **порівнювати різні типи 
даних не можна** (але це не стосується цифр).
Тобто, якщо ми порівняємо рядок, наприклад, з цифрою – **ми матимемо помилку при компіляції**.
:::    

## Умовні оператори
Умовні оператори працюють з умовою, про це і свідчить назва цих операторів
* `if` оператор 'якщо це правда (true), то щось'. Працює в кооперації з `else`: "якщо це правда, то це, але якщо ні, то (фрагмент коду з else)".
* `when` оператор для кількох 'якщо це правда, то ..'

### if-else
Одним з умовних операторів є `if-else`.
Дуже проста конструкція, що означає «якщо це істина, то зроби це, якщо ж ні, то це».
Записується так:
```kotlin
...
val isBigger: Boolean = a > b
if(isBigger) {
	println("а більше b!")
} else {
	println("b більше a!")
}
```
Але що ж робити, якщо у нас кілька умов? Наприклад, нам потрібно дізнатися найбільше з трьох довільних.
Використовуючи логіку, можна прийти до того, що в `else {...}` можна дописати ще один `if`. І це буде правильно! Це спрацює.
```kotlin
fun getBiggest(a: Int, b: Int, c: Int) {
	if(a > b && a > c) { // тут, до речі, використовується логічний оператор 'і'
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
Але, код помітно став набагато складнішим. Може можна спростити?
Так, дійсно, цю конструкцію можна спростити.
Для if, як і для else застосовується одне спрощення:
- Якщо у вас лише один ланцюжок дій, то вказувати фігурні дужки необов'язково.
  Тобто в результаті вийде таке:
```kotlin
if(a > b && a > c)
	return a
else if(b > a && b > c)
	return b
else return c
```
Тепер код став помітно кращим, аніж до цього. Але, друзі, на цьому магія не закінчується:
```kotlin
return if(a > b && a > c) {
	a
} else if(b > a && b > c)
	b
else c
```
Воу-воу, що це таке? Якщо ви раніше вивчали інші мови програмування, ви, можливо, знаєте про «тернарний оператор». Що ж, у Kotlin вирішили зробити можливість використовувати умовний оператор if-else (і забігаючи наперед, так само оператор `when`) як *вираз* (все, що може виражати значення: сире значення типу `10`, функція, що повертає якесь значення та інше, що в результаті повертає нам якесь значення, називають *виразом*).

Що це означає? Це означає, що фрагменти коду в if будуть виступати як умовні функції, які повертають якесь значення (число або щось інше) з кожної обробленої гілки умови. Для того, щоб повернути щось із фрагмента коду, потрібно написати значення (або змінну/функцію, яка матиме потрібне нам значення) останнім у нашому фрагменті коду.

Давайте закріпимо матеріал зробивши наступне:
:::info Завдання
Виконайте наступний вираз на Kotlin:
$$
f(x) =\left\{
\begin{array}{ c l }
x & \quad \textrm{якщо } x \geq 0
\\
2x                 & \quad \textrm{якщо x < 0}
\end{array}
\right.
$$
:::
Тут у нас тільки два значення, що робить задачу дуже примітивною:
```kotlin
fun f(x: Int): Int {
	return if(x >= 0)
		x
	else 2 * x
}
```
Добре, з цим розібралися. Але що робити, якщо у нас буде більше умов? Робити нескінченні ланцюжки `if-else`? Як би не так.
### When
Для великої вибірки умов створили оператор `when`.
Щоб зрозуміти, для яких випадків він використовується, вирішимо таке завдання:
:::info Завдання №1.
Створіть функцію, яка повертатиме день тижня за його порядковим номером.
Тобто: якщо в функцію ввести параметр '1', функція поверне «Понеділок». І так далі.
:::

Для цього, ми можемо використати оператор `when`, який буде куди зрозумілішим нескінченних ланцюжків `if-else`.
```kotlin
fun getDay(ordinal: Int): String {
	return when {
		ordinal == 1 -> "Понеділок"
		ordinal == 2 -> "Вівторок"
		ordinal == 3 -> "Середа"
		ordinal == 4 -> "Четвер"
		ordinal == 5 -> "П'ятниця"
		ordinal == 6 -> "Субота"
		ordinal == 7 -> "Неділя"
		else -> "Вказаний невірний номер"
	}
}
```
Варто відзначити `else`, який також існує в операторі `when`. Працює аналогічно, обробляючи умову, яка не була задоволена доти.
У нашому випадку, якщо ввести в функцію число понад 7, то повернеться повідомлення про те, що вказаний невірний день.
До речі, якось однотипно виглядають умови, чи не так? "Якось дуже багато мороки" - сказав Kotlin, і зробив чергове спрощення:
```kotlin
fun getDay(ordinal: Int): String {
	return when(ordinal) {
		1 -> "Понеділок"
		2 -> "Вівторок"
		3 -> "Середа"
		4 -> "Четвер"
		5 -> "П'ятниця"
		6 -> "Субота"
		7 -> "Неділя"
		else -> "Вказаний невірний номер"
	}
}
```
Як усе зрозуміліше і очевидніше стало, чи не так?
Для закріплення матеріалу вирішимо наступне завдання:

:::info Завдання №2.
Зробіть наступну функцію на Kotlin:
$$
f(x) =\left\{
\begin{array}{ c l }
x + 1 & \quad \textrm{якщо } x < 0
\\
2 x & \quad \textrm{якщо } x \geq 1   
\le 10
\\
x + x & \quad \textrm{якщо } x > 10
\\
0                 & \quad \textrm{інакше}
\end{array}
\right.
$$
:::
У цьому виразі ми маємо цілих 4 умови. Для цього підходить якраз таки наш `when`:
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
:::tip Доповнення
Також ви можете самі оголошувати свої варіанти операторів, 
але про це ми поговоримо якось в інший раз.
:::