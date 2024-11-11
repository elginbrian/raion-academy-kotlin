---
next:
  text: "Pengertian State"
  link: "https://raion-academy-2024.vercel.app/src/3_pengenalan_state/a_state"
---

# Material Design Components di Jetpack Compose

## Pengertian Material Design

Material Design adalah sistem desain yang dikembangkan oleh Google untuk membantu pengembang menciptakan antarmuka pengguna yang konsisten, intuitif, dan estetis. Ini memberikan panduan tentang bagaimana elemen UI harus terlihat dan berfungsi, serta bagaimana interaksi pengguna dengan aplikasi harus terjadi. Dalam konteks Jetpack Compose, Material Design diimplementasikan melalui berbagai komponen yang siap pakai, sehingga pengembang dapat dengan mudah membuat antarmuka yang menarik.

## Komponen Material Design

Jetpack Compose menyediakan berbagai komponen Material Design yang memungkinkan pengembang untuk membangun antarmuka pengguna dengan cepat. Beberapa komponen yang paling umum digunakan meliputi:

### 1. Button

Komponen tombol yang memungkinkan pengguna untuk melakukan aksi. Terdapat berbagai jenis tombol seperti tombol dasar, tombol dengan ikon, dan tombol teks.

```kotlin
@Composable
fun ButtonExample() {
    Button(onClick = { /* Handle button click */ }) {
        Text("Click Me")
    }
}
```

### 2. TextField

Komponen untuk input teks yang memungkinkan pengguna memasukkan data. TextField dapat dikonfigurasi untuk menerima berbagai jenis input dan memiliki kemampuan validasi.

```kotlin
@Composable
fun TextFieldExample() {
    var text by remember { mutableStateOf("") }

    TextField(
        value = text,
        onValueChange = { text = it },
        label = { Text("Enter text") }
    )
}
```

### 3. Card

Komponen yang digunakan untuk menampilkan informasi dalam bentuk kartu. Kartu sering digunakan untuk menampilkan konten yang saling terkait dengan cara yang terorganisir.

```kotlin
@Composable
fun CardExample() {
    Card(
        elevation = 4.dp,
        modifier = Modifier.padding(16.dp)
    ) {
        Text(text = "This is a card", modifier = Modifier.padding(16.dp))
    }
}
```

### 4. Scaffold

Komponen yang memberikan struktur dasar untuk aplikasi, termasuk area untuk menampilkan konten utama, app bar, dan floating action button (FAB).

```kotlin
@Composable
fun ScaffoldExample() {
    Scaffold(
        topBar = {
            TopAppBar(title = { Text("Scaffold Example") })
        }
    ) {
        // Konten utama
        Text(text = "Hello, Scaffold!", modifier = Modifier.padding(16.dp))
    }
}
```

### 5. Snackbar

Komponen untuk menampilkan pesan singkat kepada pengguna yang biasanya digunakan untuk memberikan umpan balik terhadap tindakan yang diambil.

```kotlin
@Composable
fun SnackbarExample() {
    var showSnackbar by remember { mutableStateOf(false) }

    if (showSnackbar) {
        Snackbar(
            action = {
                Button(onClick = { showSnackbar = false }) {
                    Text("Dismiss")
                }
            }
        ) {
            Text("This is a Snackbar message")
        }
    }

    Button(onClick = { showSnackbar = true }) {
        Text("Show Snackbar")
    }
}
```
