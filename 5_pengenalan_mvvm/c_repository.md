# Repository Pattern

## Pengertian Repository Pattern

Repository pattern adalah pola arsitektur yang digunakan untuk mengelola dan mengakses data dalam aplikasi. Pola ini berfungsi sebagai lapisan perantara antara sumber data (seperti database, API, atau file) dan logika bisnis aplikasi. Dengan menggunakan repository, pengembang dapat menyembunyikan kompleksitas akses data dan membuat kode lebih terorganisir, modular, dan mudah untuk diuji.

## Manfaat Menggunakan Repository Pattern

- **Abstraksi**: Repository menyediakan antarmuka yang jelas untuk mengakses data, menyembunyikan detail implementasi dari pengguna. Ini memungkinkan pengembang untuk mengganti sumber data (misalnya, berpindah dari API ke database lokal) tanpa mengubah logika bisnis.
- **Pengelolaan Sumber Data yang Lebih Baik**: Dengan memisahkan akses data dari logika aplikasi, repository pattern membantu dalam pengelolaan sumber data dengan cara yang lebih terstruktur.
- **Meningkatkan Kemudahan Pengujian**: Repository pattern memungkinkan pengembang untuk melakukan pengujian unit dengan lebih mudah, karena logika bisnis dapat diuji secara terpisah dari akses data.

## Contoh Implementasi

```kotlin
interface ProductRepository {
    suspend fun getProducts(): List<Product>?
    suspend fun getProductById(id: String): Product?
}
```

```kotlin
class ProductRepositoryImpl(private val apiService: ApiService) : ProductRepository {
    override suspend fun getProducts(): List<Product>? {
        val response = apiService.getProducts()
        return if (response.isSuccessful) {
            response.body() // Mengembalikan daftar produk jika berhasil
        } else {
            null // Mengembalikan null jika permintaan gagal
        }
    }

    override suspend fun getProductById(id: String): Product? {
        val response = apiService.getProductById(id)
        return if (response.isSuccessful) {
            response.body() // Mengembalikan produk jika berhasil
        } else {
            null // Mengembalikan null jika permintaan gagal
        }
    }
}
```
