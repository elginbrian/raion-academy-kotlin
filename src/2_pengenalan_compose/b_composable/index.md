---
next:
  text: "UI Layouts di Jetpack Compose"
  link: "../../c_ui_layout"
---

# Composable Function di Jetpack Compose

## Pengertian Composable Function

Composable function adalah blok kode yang dapat digunakan untuk mendefinisikan elemen antarmuka pengguna (UI) dalam Jetpack Compose. Fungsi ini diberi anotasi dengan `@Composable`, yang memungkinkan Anda untuk menggambarkan bagaimana tampilan UI seharusnya terlihat dan berfungsi. Dengan composable functions, Anda dapat membangun hierarki UI yang kompleks dengan cara yang lebih sederhana dan deklaratif.

## Cara Kerja Composable Function

Saat sebuah composable function dipanggil, Jetpack Compose mengevaluasi keadaan saat ini dari fungsi tersebut dan merender UI berdasarkan logika yang ditentukan di dalamnya. Jika ada perubahan dalam keadaan (state) aplikasi, Jetpack Compose akan secara otomatis memperbarui tampilan UI yang relevan tanpa memerlukan kode tambahan untuk memperbarui atau merender elemen UI secara manual.

### Struktur Composable Function

Composable functions memiliki struktur yang sederhana, mirip dengan fungsi biasa di Kotlin. Elemen utama dari composable function meliputi:

- **Anotasi `@Composable`**: Menunjukkan bahwa fungsi tersebut dapat digunakan sebagai elemen UI.
- **Parameter**: Seperti fungsi biasa, composable function dapat menerima parameter untuk mengatur tampilan dan perilaku UI.
- **Badan Fungsi**: Berisi kode yang mendefinisikan elemen UI menggunakan komponen-komponen yang disediakan oleh Jetpack Compose.

```kotlin
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.Composable

@Composable
fun Greeting(name: String) {
    Text(text = "Hello, $name!")
}
```

## Menggunakan Composable Functions

Composable functions dapat dipanggil satu sama lain untuk membangun UI yang lebih kompleks. Anda dapat membuat fungsi composable untuk bagian UI yang berulang dan menggunakannya di berbagai tempat dalam aplikasi Anda, memungkinkan kode yang lebih bersih dan terorganisir.

```kotlin
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview

@Composable
fun MyApp() {
    MaterialTheme {
        Surface {
            Greeting(name = "Raion")
        }
    }
}

@Preview
@Composable
fun PreviewMyApp() {
    MyApp()
}
```

Dalam contoh ini, MyApp adalah composable function yang menggunakan tema Material dan menciptakan permukaan untuk UI, memanggil composable function Greeting di dalamnya. PreviewMyApp menggunakan anotasi @Preview untuk memungkinkan visualisasi MyApp dalam editor IDE tanpa menjalankan aplikasi secara langsung.
