---
next:
  text: "UI Events dalam Jetpack Compose"
  link: "./c_ui_event"
---

# Hoisting dalam Jetpack Compose

## Pengertian Hoisting

Hoisting dalam Jetpack Compose adalah teknik yang digunakan untuk mengelola state dengan memindahkan atau "mengangkat" state ke tingkat yang lebih tinggi dalam hierarki composable. Ini memungkinkan pengembang untuk mengontrol state dari komponen induk dan memberikan fleksibilitas lebih dalam bagaimana state tersebut digunakan dan diperbarui. Dengan hoisting, sebuah composable dapat memiliki state yang dikelola di luar dirinya sendiri, memungkinkan berbagai composable untuk berbagi dan berinteraksi dengan state yang sama.

## Mengapa Hoisting Diperlukan?

Hoisting diperlukan untuk mencapai beberapa tujuan, antara lain:

- **Reusabilitas**: Dengan mengangkat state ke tingkat yang lebih tinggi, komponen dapat dibuat lebih reusable karena tidak terikat pada state tertentu.
- **Kontrol**: Hoisting memberikan kontrol yang lebih besar atas bagaimana dan kapan state diperbarui, sehingga memudahkan pengelolaan interaksi antar komponen.
- **Keterbacaan**: Dengan memisahkan state dari logika UI, kode menjadi lebih terorganisir dan lebih mudah dibaca.

## Contoh Kasus Penggunaan Hoisting

Misalkan Anda memiliki sebuah aplikasi yang memerlukan beberapa komponen untuk menampilkan dan memperbarui nilai counter. Dengan hoisting, Anda dapat mengelola state counter di komponen induk dan memberikan fungsi untuk mengubah nilai tersebut ke komponen anak. Dengan cara ini, komponen anak dapat berfokus pada logika tampilan, sementara komponen induk menangani state.

```kotlin
// Composable anak yang menerima state dan fungsi untuk memperbarui state
@Composable
fun Counter(displayCount: Int, onIncrement: () -> Unit) {
    Button(onClick = onIncrement) {
        Text("Count: $displayCount")
    }
}

// Composable induk yang mengelola state
@Composable
fun CounterApp() {
    // Menggunakan remember untuk menyimpan mutableStateOf
    val count = remember { mutableStateOf(0) }

    // Menyediakan state dan fungsi untuk composable anak
    Counter(displayCount = count.value) {
        count.value++ // Memperbarui state ketika tombol ditekan
    }
}
```
