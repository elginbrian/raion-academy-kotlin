# UI Events dalam Jetpack Compose

## Pengertian UI Events

UI Events dalam Jetpack Compose merujuk pada interaksi pengguna dengan antarmuka pengguna (UI), seperti klik tombol, perubahan teks, atau penggeseran slider. Mengelola dan merespons event ini adalah bagian penting dalam pengembangan aplikasi untuk memastikan aplikasi berfungsi dengan baik dan memberikan pengalaman pengguna yang responsif.

## Jenis UI Events

Beberapa jenis UI Events yang umum dalam Jetpack Compose termasuk:

- **Click Events**: Merespons klik pengguna pada elemen UI, seperti tombol atau item daftar.
- **Text Change Events**: Merespons perubahan teks dalam elemen input seperti `TextField`.
- **Value Change Events**: Merespons perubahan nilai pada elemen interaktif seperti slider atau switch.

## Mengelola UI Events

Dalam Jetpack Compose, pengelolaan UI Events sering dilakukan dengan menggunakan lambdas (fungsi anonim) yang ditetapkan pada parameter event dari elemen UI. Ketika event terjadi, lambda ini akan dipanggil, dan Anda dapat mengeksekusi logika yang sesuai untuk merespons interaksi pengguna.

## Contoh Penggunaan UI Events

Berikut adalah contoh kode yang menunjukkan pengelolaan UI Events dengan tombol dan input teks:

```kotlin
@Composable
fun EventExample() {
    // State untuk menyimpan teks yang dimasukkan pengguna
    val inputText = remember { mutableStateOf("") }

    // State untuk menyimpan jumlah klik tombol
    val clickCount = remember { mutableStateOf(0) }

    // TextField untuk menerima input dari pengguna
    TextField(
        value = inputText.value,
        onValueChange = { newText -> inputText.value = newText }, // Mengelola perubahan teks
        label = { Text("Enter some text") }
    )

    // Tombol untuk meningkatkan jumlah klik
    Button(onClick = { clickCount.value++ }) {
        Text("Clicked ${clickCount.value} times") // Menampilkan jumlah klik
    }
}
```
