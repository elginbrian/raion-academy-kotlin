# API Interface dengan Retrofit

## Pengertian Retrofit

Retrofit adalah pustaka yang digunakan untuk membuat permintaan HTTP ke server API dengan cara yang sederhana dan efisien. Dengan Retrofit, Anda dapat berkomunikasi dengan RESTful web service menggunakan anotasi untuk mendefinisikan permintaan dan respons. Retrofit mendukung berbagai format data, termasuk JSON dan XML, serta memungkinkan integrasi dengan pustaka pemrosesan data seperti Gson atau Moshi untuk serialisasi dan deserialisasi.

## Mengapa Menggunakan Retrofit?

Retrofit menawarkan berbagai manfaat, antara lain:

- **Sederhana dan Mudah Digunakan**: Retrofit menyediakan antarmuka yang intuitif untuk melakukan permintaan HTTP, membuatnya mudah dipahami dan digunakan.
- **Manajemen Permintaan dan Respons**: Dengan Retrofit, Anda dapat menangani permintaan dan respons dengan cara yang terorganisir dan terstruktur.
- **Integrasi Mudah**: Retrofit dapat dengan mudah diintegrasikan dengan pustaka lain, seperti OkHttp untuk menangani koneksi HTTP, serta Gson untuk mengkonversi objek JSON menjadi model data Kotlin.

## Cara Kerja Retrofit

1. **Definisikan Model Data**: Buat kelas data yang sesuai dengan struktur JSON yang akan Anda terima dari API.

   ```kotlin
   data class ProductResponse(
       val response: List<Product>?
   )

   data class Product(
       val id: Int?,
       val title: String?,
       val price: Double?,
       val description: String?,
       val category: String?,
       val image: String?,
       val rating: Rating?
   )

   data class Rating(
       val rate: Double?,
       val count: Int?
   )
   ```

2. **Buat API Interface**: Definisikan antarmuka untuk API Anda dengan metode yang sesuai dengan endpoint yang akan dipanggil. Gunakan anotasi Retrofit untuk menentukan jenis permintaan (GET, POST, dll.) dan parameter yang diperlukan.

   ```kotlin
   interface ApiService {
        @GET("products")
        suspend fun getProducts(): Response<List<Product>>

        @GET("products/{id}")
        suspend fun getProductById(
            @Path("id") id: String
        ): Response<Product>

        companion object {
            const val BASE_URL = "https://fakestoreapi.com/"
        }
   }
   ```

3. **Inisialisasi Retrofit**: Buat instansi Retrofit dengan URL dasar API dan konverter yang diperlukan (seperti Gson).

   ```kotlin
    object ApiConfig {
        fun getApiService(): ApiService = Retrofit.Builder()
            .baseUrl(ApiService.BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(ApiService::class.java)
   }
   ```

4. **Panggil API**: Gunakan instansi Retrofit untuk membuat objek API dan panggil metode yang diinginkan.
