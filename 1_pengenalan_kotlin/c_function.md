# Function di Kotlin

## Pengertian Function

Function, atau fungsi, adalah blok kode yang dirancang untuk melakukan tugas tertentu dan dapat dipanggil atau digunakan berkali-kali di dalam program. Dalam Kotlin, fungsi digunakan untuk menyederhanakan kode dengan cara memisahkan tugas ke dalam bagian-bagian yang lebih kecil dan mudah diatur. Ini memungkinkan pengembang untuk menulis kode yang lebih modular, terorganisir, dan mudah dipelihara. Fungsi dapat menerima input, melakukan proses, dan mengembalikan output.

Fungsi dalam Kotlin dapat didefinisikan di dalam kelas (fungsi anggota) atau di luar kelas (fungsi tingkat atas). Setiap fungsi memiliki nama, daftar parameter opsional, dan tipe nilai kembalian. Jika fungsi tidak mengembalikan nilai, tipe kembalian yang digunakan adalah `Unit`, mirip dengan `void` dalam bahasa pemrograman seperti Java.

```kotlin
// Fungsi sederhana yang tidak mengembalikan nilai
fun greet() {
    println("Hello, World!")
}
```

## Struktur Function di Kotlin

Fungsi dalam Kotlin memiliki struktur yang sederhana, terdiri dari:

- **Nama Fungsi**: Nama unik yang mengidentifikasi fungsi tersebut.
- **Parameter**: Daftar parameter opsional yang diterima oleh fungsi, masing-masing dengan nama dan tipe data.
- **Tipe Kembalian**: Tipe data dari nilai yang dikembalikan oleh fungsi. Jika tidak ada nilai yang dikembalikan, digunakan `Unit`.
- **Badan Fungsi**: Kode yang berada di dalam kurung kurawal `{}` yang akan dieksekusi ketika fungsi dipanggil.

Fungsi juga bisa memiliki **parameter default**, yang berarti parameter tersebut memiliki nilai bawaan jika tidak diisi ketika fungsi dipanggil. Kotlin juga mendukung **fungsi ekspresi tunggal**, yang memungkinkan Anda mendefinisikan fungsi dalam satu baris jika fungsinya sederhana.

```kotlin
// Fungsi dengan parameter dan nilai kembalian
fun add(a: Int, b: Int): Int {
    return a + b
}
```

## Parameter pada Function

Fungsi di Kotlin dapat menerima satu atau beberapa parameter sebagai input. Parameter ini dideklarasikan dengan nama dan tipe datanya di dalam tanda kurung. Kotlin mendukung penggunaan parameter default, yang memungkinkan nilai default digunakan jika tidak ada nilai yang diberikan saat fungsi dipanggil. Hal ini sangat berguna untuk mengurangi keharusan menulis kode yang berulang. Anda juga dapat menggunakan named arguments untuk membuat pemanggilan fungsi lebih jelas, terutama saat fungsi memiliki banyak parameter.

```kotlin
// Fungsi dengan parameter default
fun greetUser(name: String = "Guest") {
    println("Hello, $name!")
}
```

## Fungsi Single-Expression

Kotlin menyediakan cara ringkas untuk menulis fungsi dengan satu baris kode, yang dikenal sebagai single-expression function. Fungsi ini dapat ditulis tanpa tanda kurung kurawal `{}` dan langsung mengembalikan nilai dengan tanda `=` setelah deklarasi fungsi. Ini membuat kode lebih bersih dan sederhana, terutama untuk operasi kecil.

```kotlin
// Fungsi single-expression
fun square(x: Int) = x * x
```

## Fungsi Higher-Order

Kotlin mendukung fungsi higher-order, yaitu fungsi yang menerima fungsi lain sebagai parameter atau mengembalikan fungsi. Hal ini memungkinkan penulisan kode yang lebih dinamis dan fleksibel, terutama dalam konteks pemrograman fungsional.

```kotlin
// Fungsi higher-order: menerima fungsi lain sebagai parameter
fun operateOnNumbers(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
    return operation(a, b)
}

// Memanggil fungsi higher-order dengan lambda
val result = operateOnNumbers(5, 10) { x, y -> x + y } // Hasilnya adalah 15
```
