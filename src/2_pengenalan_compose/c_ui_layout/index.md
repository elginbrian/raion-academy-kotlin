---
next:
  text: "Modifiers di Jetpack Compose"
  link: "../../d_modifier"
---

# UI Layouts di Jetpack Compose

## Pengertian UI Layouts

UI Layouts adalah komponen dasar dalam Jetpack Compose yang digunakan untuk mengatur dan menyusun elemen antarmuka pengguna (UI) dalam aplikasi. Layouts memungkinkan pengembang untuk mengatur bagaimana elemen UI ditampilkan di layar, baik secara vertikal, horizontal, atau dalam struktur yang lebih kompleks. Dengan menggunakan UI Layouts, pengembang dapat menciptakan pengalaman pengguna yang responsif dan intuitif.

Jetpack Compose menyediakan berbagai jenis layout, masing-masing dengan karakteristik dan kegunaannya sendiri. Beberapa layout yang umum digunakan termasuk Column, Row, Box, dan LazyColumn.

## Jenis-jenis UI Layouts

### 1. Column

Column adalah layout yang digunakan untuk menampilkan elemen UI secara vertikal, satu di bawah yang lainnya. Setiap elemen yang ditambahkan ke dalam Column akan ditampilkan dalam urutan yang ditentukan.

```kotlin
@Composable
fun ColumnExample() {
    Column(modifier = Modifier.padding(16.dp)) {
        Text(text = "Item 1")
        Text(text = "Item 2")
        Text(text = "Item 3")
    }
}
```

### 2. Row

Row adalah layout yang menampilkan elemen UI secara horizontal. Elemen yang ditambahkan ke dalam Row akan ditampilkan berdampingan, dari kiri ke kanan.

```kotlin
@Composable
fun RowExample() {
    Row(modifier = Modifier.padding(16.dp)) {
        Button(onClick = { /* Aksi 1 */ }) {
            Text("Button 1")
        }

        Spacer(modifier = Modifier.width(8.dp)) // Jarak antara tombol

        Button(onClick = { /* Aksi 2 */ }) {
            Text("Button 2")
        }
    }
}
```

### 3. Box

Box adalah layout yang memungkinkan elemen UI ditumpuk satu sama lain. Anda dapat mengatur posisi setiap elemen di dalam Box, memberikan fleksibilitas untuk menampilkan konten yang saling tumpang tindih.

```kotlin
@Composable
fun BoxExample() {
    Box(modifier = Modifier.size(200.dp)) {
        Text(text = "Centered Text", modifier = Modifier.align(Alignment.Center))
        Text(text = "Top Left", modifier = Modifier.align(Alignment.TopStart))
    }
}
```

### 4. LazyColumn

LazyColumn adalah versi efisien dari Column yang dirancang untuk menampilkan daftar elemen yang dapat digulir. LazyColumn hanya akan merender elemen yang terlihat di layar, sehingga mengurangi penggunaan memori dan meningkatkan performa ketika menangani daftar yang panjang.

```kotlin
@Composable
fun LazyColumnExample(
    items: List<String> = listOf("Item 1", "Item 2", "Item 3")
) {
    LazyColumn {
        items(items) { item ->
            Text(text = item)
        }
    }
}
```
