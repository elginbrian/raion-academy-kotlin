# Passing Data Between Screens dalam Jetpack Compose

## Pengertian Passing Data

Passing data adalah proses mengirimkan informasi dari satu layar (screen) ke layar lainnya dalam aplikasi. Dalam konteks Jetpack Compose, passing data memungkinkan Anda untuk memberikan informasi yang diperlukan oleh layar tujuan berdasarkan interaksi pengguna. Misalnya, ketika pengguna memilih item dari daftar, Anda mungkin ingin menampilkan rincian lebih lanjut tentang item tersebut di layar berikutnya.

## Pentingnya Passing Data

Passing data antara layar sangat penting untuk memberikan pengalaman pengguna yang interaktif dan dinamis. Dengan mengirimkan data, pengguna dapat melihat informasi yang relevan tanpa harus memasukkannya ulang. Hal ini juga membantu menjaga keadaan aplikasi yang lebih baik, mengurangi duplikasi data, dan meningkatkan efisiensi.

## Cara Melakukan Passing Data

Di Jetpack Compose, Anda dapat melakukan passing data melalui parameter saat melakukan navigasi. Ketika Anda memanggil `navController.navigate()`, Anda dapat menyertakan argumen sebagai bagian dari string tujuan. Data ini kemudian dapat diambil di layar tujuan.

## Contoh Kasus Penggunaan

Misalnya, jika Anda memiliki layar yang menampilkan daftar nama, ketika pengguna mengklik salah satu nama, Anda bisa mengarahkan mereka ke layar baru yang menampilkan detail nama tersebut.

```kotlin
// Layar daftar yang menampilkan nama
@Composable
fun NameListScreen(navController: NavController) {
    val names = listOf("Alice", "Bob", "Charlie")

    for (name in names) {
        Button(onClick = { navController.navigate("detail_screen/$name") }) {
            Text(name)
        }
    }
}

// Layar detail yang menampilkan nama
@Composable
fun NameDetailScreen(name: String) {
    Text("Detail for: $name")
}

// NavHost untuk mengatur navigasi
@Composable
fun Navigation() {
    val navController = rememberNavController()
    NavHost(navController, startDestination = "name_list_screen") {
        composable("name_list_screen") { NameListScreen(navController) }
        composable("detail_screen/{name}") { backStackEntry ->
            val name = backStackEntry.arguments?.getString("name") ?: ""
            NameDetailScreen(name)
        }
    }
}
```
