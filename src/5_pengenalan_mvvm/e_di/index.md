---
next:
  text: "Home"
  link: "https://raion-academy-2024.vercel.app"
---

# Dependency Injection dengan Koin

## Pengertian Dependency Injection

Dependency Injection (DI) adalah sebuah pola desain yang digunakan untuk mengelola ketergantungan antara komponen dalam sebuah aplikasi. Dengan menggunakan DI, objek tidak bertanggung jawab untuk menginisialisasi ketergantungannya sendiri, melainkan ketergantungan tersebut disediakan oleh pihak luar. Pola ini membantu meningkatkan modularitas, mengurangi coupling, dan mempermudah pengujian unit dengan memfasilitasi penggantian ketergantungan dengan versi mock atau stub saat pengujian.

## Koin sebagai Dependency Injection Framework

Koin adalah framework dependency injection yang ditulis dalam Kotlin, dirancang untuk kemudahan penggunaan dan integrasi yang sederhana dengan aplikasi Android. Koin memiliki beberapa fitur utama, antara lain:

- **Minimalis**: Koin memiliki sintaksis yang sederhana dan tidak memerlukan anotasi atau konfigurasi yang rumit.
- **Fleksibel**: Koin memungkinkan pengembang untuk mendefinisikan modul dan ketergantungan dengan cara yang fleksibel, sehingga mudah diubah sesuai kebutuhan.
- **Scoped**: Koin mendukung scoping, yang memungkinkan Anda untuk menentukan siklus hidup dari objek yang di-inject, seperti singleton atau objek yang diciptakan setiap kali diminta.
- **Bersih dan Ringan**: Koin tidak memerlukan boilerplate code yang banyak, sehingga menjaga kode tetap bersih dan mudah dibaca.

## Cara Kerja Koin

Untuk menggunakan Koin, Anda perlu mendefinisikan modul yang berisi semua ketergantungan yang ingin Anda kelola. Setiap modul dapat berisi beberapa definisi untuk berbagai kelas atau objek yang ingin Anda injeksi. Berikut adalah langkah-langkah umum untuk menggunakan Koin:

1. **Menambahkan Dependensi Koin**: Tambahkan Koin ke dalam file build.gradle Anda.
2. **Mendefinisikan Modul**: Buat modul Koin yang berisi definisi untuk ketergantungan Anda.
3. **Menginisialisasi Koin**: Inisialisasi Koin di dalam kelas aplikasi Anda.
4. **Menggunakan Koin**: Injeksi ketergantungan ke dalam kelas Anda menggunakan fungsi `get()` atau melalui constructor.

## Contoh Implementasi Koin

Berikut adalah contoh sederhana tentang bagaimana menggunakan Koin untuk mengelola ketergantungan dalam aplikasi Android:

### Modul Koin

```kotlin
val appModule = module {
    // Mendefinisikan ApiService sebagai singleton
    single { ApiService.create() }

    // Menginjeksi ApiService ke dalam Repository
    single { Repository(get()) }

    // Menginjeksi Repository ke dalam MainViewModel
    viewModel { MainViewModel(get()) }
}
```

```kotlin
class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        startKoin {
            modules(appModule)
        }
    }
}
```
