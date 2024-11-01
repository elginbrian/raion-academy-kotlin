# Pemrograman Berorientasi Objek (OOP) di Kotlin

## Pengertian OOP

Pemrograman Berorientasi Objek (Object-Oriented Programming atau OOP) adalah paradigma pemrograman yang berfokus pada objek sebagai unit utama dalam pengembangan perangkat lunak. Dalam OOP, data dan perilaku (fungsi) digabungkan ke dalam unit yang disebut objek, yang kemudian dapat saling berinteraksi untuk menyelesaikan tugas-tugas tertentu.

Konsep OOP didasarkan pada beberapa prinsip inti, yaitu **Enkapsulasi**, **Pewarisan**, **Polimorfisme**, dan **Abstraksi**. Kotlin, sebagai bahasa pemrograman modern, mendukung prinsip-prinsip OOP dan menyediakan sintaks sederhana untuk bekerja dengan objek, kelas, dan fitur OOP lainnya.

## Konsep Dasar OOP di Kotlin

### 1. Kelas dan Objek

- **Kelas**: Kelas adalah cetak biru atau template untuk membuat objek. Kelas dapat memiliki properti (data) dan fungsi (perilaku) yang mendefinisikan bagaimana objek tersebut berperilaku.
- **Objek**: Objek adalah instance dari kelas. Objek dibuat dari kelas dan memiliki akses ke properti serta fungsi yang didefinisikan dalam kelas.

```kotlin
// Mendefinisikan kelas sederhana bernama 'Car'
class Car(val brand: String, val model: String, var year: Int) {

    // Fungsi untuk menampilkan informasi tentang mobil
    fun displayInfo() {
        println("Car Brand: $brand")
        println("Car Model: $model")
        println("Year: $year")
    }

    // Fungsi untuk memperbarui tahun mobil
    fun updateYear(newYear: Int) {
        year = newYear
        println("The year has been updated to $year.")
    }
}

fun main() {
    // Membuat objek dari kelas 'Car'
    val myCar = Car("Toyota", "Corolla", 2015)

    // Mengakses properti dan metode dari objek
    myCar.displayInfo() // Menampilkan informasi tentang mobil

    // Memperbarui tahun mobil
    myCar.updateYear(2023)
    myCar.displayInfo() // Menampilkan informasi yang diperbarui
}
```

### 2. Enkapsulasi

Enkapsulasi adalah konsep menyembunyikan detail implementasi dari luar dan hanya mengekspos apa yang diperlukan melalui antarmuka publik. Ini biasanya dilakukan dengan mendeklarasikan properti sebagai `private` dan menyediakan metode `getter` dan `setter` untuk mengakses dan memodifikasi nilai properti tersebut.

```kotlin
class BankAccount(
    private var balance: Double
) {

    // Getter untuk mendapatkan saldo
    fun getBalance(): Double {
        return balance
    }

    // Setter untuk menyetor uang
    fun deposit(amount: Double) {
        if (amount > 0) {
            balance += amount
            println("Successfully deposited $amount. New balance: $balance")
        } else {
            println("Deposit amount must be positive.")
        }
    }

    // Setter untuk menarik uang
    fun withdraw(amount: Double) {
        if (amount > 0 && amount <= balance) {
            balance -= amount
            println("Successfully withdrew $amount. New balance: $balance")
        } else {
            println("Insufficient funds or invalid amount.")
        }
    }
}


fun main() {
    val account = BankAccount(1000.0)
    account.deposit(200.0)
    account.withdraw(150.0)
    println("Current balance: ${account.getBalance()}")
}
```

### 3. Pewarisan

Pewarisan adalah mekanisme di mana satu kelas dapat mewarisi properti dan fungsi dari kelas lain. Kelas yang mewarisi disebut **subclass**, sedangkan kelas yang diwarisi disebut **superclass**. Pewarisan digunakan untuk mengurangi duplikasi kode dan memungkinkan penggunaan kembali kode.

```kotlin
// Kelas dasar (superclass)
class Animal(
    val name: String
) {
    open fun makeSound() {
        println("$name makes a sound.")
    }
}

// Kelas turunan (subclass)
class Dog(
    name: String
) : Animal(name) {
    override fun makeSound() {
        println("$name barks.")
    }
}

// Kelas turunan lainnya
class Cat(
    name: String
) : Animal(name) {
    override fun makeSound() {
        println("$name meows.")
    }
}


fun main() {
    val dog = Dog("Buddy")
    val cat = Cat("Whiskers")

    dog.makeSound() // Output: Buddy barks.
    cat.makeSound() // Output: Whiskers meows.
}
```

### 4. Polimorfisme

Polimorfisme memungkinkan objek untuk diperlakukan sebagai objek dari jenis kelas induknya atau kelas antarmuka. Ada dua jenis polimorfisme: **polimorfisme statis** (overloading) dan **polimorfisme dinamis** (overriding). Polimorfisme memungkinkan fungsi yang sama untuk bertindak berbeda berdasarkan objek yang memanggilnya.

```kotlin
// Kelas dasar (superclass)
open class Shape {
    open fun draw() {
        println("Drawing a shape")
    }
}

// Kelas turunan (subclass) dengan overriding
class Circle : Shape() {
    override fun draw() {
        println("Drawing a circle")
    }
}

class Square : Shape() {
    override fun draw() {
        println("Drawing a square")
    }
}

// Fungsi yang menggunakan polimorfisme
fun renderShape(shape: Shape) {
    shape.draw() // Memanggil metode draw yang sesuai dengan tipe objek
}


fun main() {
    val circle = Circle()
    val square = Square()

    renderShape(circle) // Output: Drawing a circle
    renderShape(square) // Output: Drawing a square
}
```

### 5. Abstraksi

Abstraksi adalah proses menyederhanakan sistem yang kompleks dengan hanya menampilkan fitur-fitur penting dan menyembunyikan detail yang tidak relevan. Dalam Kotlin, Anda dapat menggunakan **kelas abstrak** dan **interface** untuk menerapkan abstraksi.

```kotlin
// Kelas abstrak
abstract class Vehicle(val name: String) {
    abstract fun drive() // Metode abstrak, harus diimplementasikan oleh subclass
    fun stop() {
        println("$name is stopping.")
    }
}

// Kelas turunan yang mengimplementasikan metode abstrak
class Car(name: String) : Vehicle(name) {
    override fun drive() {
        println("$name is driving on the road.")
    }
}

class Boat(name: String) : Vehicle(name) {
    override fun drive() {
        println("$name is sailing on the water.")
    }
}


fun main() {
    val car = Car("Sedan")
    val boat = Boat("Yacht")

    car.drive() // Output: Sedan is driving on the road.
    car.stop()  // Output: Sedan is stopping.

    boat.drive() // Output: Yacht is sailing on the water.
    boat.stop()  // Output: Yacht is stopping.
}
```
