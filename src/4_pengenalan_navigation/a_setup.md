---
next:
  text: "Passing Data"
  link: "./b_passing_data"
---

# Setup Navigation dalam Jetpack Compose

## Pengertian Navigation

Navigation dalam Jetpack Compose adalah mekanisme yang memungkinkan pengguna berpindah antara berbagai layar (screens) dalam aplikasi. Pengelolaan navigasi yang baik sangat penting untuk pengalaman pengguna yang intuitif dan lancar. Jetpack Compose menyediakan pustaka navigasi yang mudah digunakan dan fleksibel, memungkinkan pengembang untuk mengatur alur navigasi dengan cara yang deklaratif.

## Komponen Utama dalam Navigasi

Beberapa komponen utama yang perlu dipahami saat mengatur navigasi di Jetpack Compose meliputi:

- **NavHost**: Komponen ini bertanggung jawab untuk menampung semua destinasi navigasi. NavHost menentukan destinasi mana yang harus ditampilkan berdasarkan status navigasi saat ini.
- **NavController**: Objek ini mengelola navigasi di aplikasi. NavController memungkinkan pengembang untuk mengarahkan pengguna ke destinasi baru, kembali ke destinasi sebelumnya, dan mengelola kembali tumpukan navigasi.

- **Destinations**: Destinasi adalah layar atau komponen yang dapat dinavigasi oleh pengguna. Setiap destinasi diidentifikasi dengan string unik yang biasanya berupa nama layar.

## Contoh Kasus Penggunaan

Pengaturan navigasi sederhana dapat dilakukan dengan membuat beberapa layar dan menggunakan `NavController` untuk berpindah di antara mereka. Misalnya, Anda bisa memiliki dua layar: layar pertama dengan tombol yang, ketika diklik, akan membawa pengguna ke layar kedua. Layar kedua juga bisa memiliki tombol untuk kembali ke layar pertama.

```kotlin
// NavHost untuk mengatur navigasi
@Composable
fun Navigation() {
    val navController = rememberNavController()
    NavHost(navController, startDestination = "first_screen") {
        composable("first_screen") { FirstScreen(navController) }
        composable("second_screen") { SecondScreen(navController) }
    }
}

// Layar pertama
@Composable
fun FirstScreen(navController: NavController) {
    Button(onClick = { navController.navigate("second_screen") }) {
        Text("Go to Second Screen")
    }
}

// Layar kedua
@Composable
fun SecondScreen(navController: NavController) {
    Button(onClick = { navController.popBackStack() }) {
        Text("Back to First Screen")
    }
}
```
