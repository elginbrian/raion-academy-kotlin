# Variabel dan Tipe Data di Kotlin

## Variabel di Kotlin

Dalam Kotlin, variabel digunakan untuk menyimpan dan mengelola data. Ada dua jenis deklarasi variabel utama: `val` dan `var`. Variabel yang dideklarasikan dengan `val` bersifat immutable, yang berarti nilainya tidak dapat diubah setelah didefinisikan. Sebaliknya, variabel yang dideklarasikan dengan `var` bersifat mutable, sehingga nilainya dapat diubah selama program berjalan.

Penggunaan `val` dan `var` memberikan fleksibilitas dalam pengelolaan data, sekaligus mendorong praktik pemrograman yang lebih aman dengan mengurangi potensi perubahan data yang tidak disengaja. Saat mendeklarasikan variabel, Kotlin juga mendukung inferensi tipe, yang memungkinkan kompiler untuk menentukan tipe variabel berdasarkan nilai yang diberikan, sehingga sintaks lebih ringkas dan mudah dibaca.

```kotlin
// Deklarasi variabel dengan val (immutable)
val name: String = "Kotlin"
name = "Java"
// Tidak bisa mengubah nilai, akan menyebabkan error

// Deklarasi variabel dengan var (mutable)
var age: Int = 25
age = 26 // Nilai dapat diubah
```

## Tipe Data di Kotlin

Kotlin memiliki berbagai tipe data yang sering digunakan dalam pemrograman. Beberapa tipe data dasar meliputi:

1. **Tipe Data Numerik**: Kotlin mendukung tipe data seperti `Int`, `Long`, `Short`, `Byte`, `Float`, dan `Double` untuk menyimpan angka. `Int` biasanya digunakan untuk bilangan bulat, sedangkan `Float` dan `Double` digunakan untuk bilangan desimal.

   ```kotlin
   // Tipe data numerik
   val number: Int = 100
   val pi: Double = 3.14159
   val byteValue: Byte = 127
   ```

2. **Tipe Data Karakter dan String**: `Char` digunakan untuk menyimpan satu karakter, seperti huruf atau simbol. `String` digunakan untuk menyimpan rangkaian karakter, dan Kotlin menyediakan berbagai fungsi bawaan untuk memanipulasi string.

   ```kotlin
   // Contoh tipe data Char dan String
   val letter: Char = 'K'
   val language: String = "Kotlin"
   ```

3. **Tipe Data Boolean**: Tipe data `Boolean` hanya memiliki dua nilai: `true` dan `false`. Ini sering digunakan dalam kondisi logika untuk mengontrol alur program.

   ```kotlin
   // Contoh tipe data Boolean
   val isSunny: Boolean = true
   ```

## Inferensi Tipe

Kotlin dilengkapi dengan fitur inferensi tipe yang secara otomatis menentukan tipe variabel berdasarkan nilai yang diinisialisasi. Ini membuat kode lebih ringkas, tetapi Anda tetap dapat menyatakan tipe variabel secara eksplisit jika diinginkan, untuk kejelasan atau ketika inferensi tipe tidak cukup jelas.

```kotlin
// Inferensi tipe
val city = "Jakarta" // Kotlin akan menginferensikan city sebagai String
var temperature = 30.5 // Kotlin akan menginferensikan temperature sebagai Double
```
