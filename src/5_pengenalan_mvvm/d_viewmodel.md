---
next:
  text: "Dependency Injection"
  link: "./e_di"
---

# Penjelasan tentang ViewModel, Cold Flow, dan Hot Flow

## ViewModel

ViewModel adalah komponen arsitektur dalam Android yang dirancang untuk menyimpan dan mengelola data terkait UI dalam siklus hidup aplikasi. ViewModel membantu memisahkan logika presentasi dari logika bisnis dan data, sehingga memudahkan pengujian dan pemeliharaan. Salah satu fitur utama dari ViewModel adalah kemampuannya untuk bertahan selama perubahan konfigurasi, seperti rotasi layar, yang berarti data di dalam ViewModel tidak akan hilang saat tampilan di-recreate.

ViewModel juga digunakan untuk mengamati dan mengelola aliran data. Dengan menggunakan Flow, ViewModel dapat memberikan pembaruan secara reaktif ke UI ketika data berubah. Ini memungkinkan UI untuk selalu menampilkan informasi terbaru tanpa perlu melakukan polling secara aktif.

## Cold Flow

Cold Flow adalah jenis aliran data (flow) yang hanya aktif dan menghasilkan data ketika ada pengamat (observer) yang terhubung. Ketika aliran Cold Flow dijalankan, setiap kali seorang pengamat mulai mengamati aliran, ia akan menerima nilai yang dihasilkan dari awal. Hal ini berarti bahwa data dihasilkan hanya ketika dibutuhkan, dan setiap pengamat akan mendapatkan salinan baru dari data yang sama.

Contoh penggunaan Cold Flow adalah ketika kita mengambil data dari API: data tidak akan diambil hingga fungsi `collect` dipanggil untuk mengamati aliran tersebut. Dengan demikian, Cold Flow efisien untuk situasi di mana data hanya perlu diambil saat diperlukan.

## Hot Flow

Hot Flow, di sisi lain, adalah aliran data yang aktif dan terus menghasilkan nilai meskipun tidak ada pengamat yang terhubung. Setiap pengamat yang baru akan menerima nilai yang dihasilkan sejak mereka mulai mengamati, tetapi tidak akan menerima nilai yang dihasilkan sebelum mereka terhubung.

Hot Flow sering digunakan dalam situasi di mana kita ingin terus-menerus memperbarui UI dengan data yang baru, misalnya saat mendengarkan perubahan status atau event yang dapat terjadi kapan saja. Contohnya, penggunaan Hot Flow dalam pengamat yang menerima pembaruan dari sumber data seperti database atau stream dari socket.

### Contoh Kode

```kotlin
sealed class Resource<T>(val data: T? = null, val msg: String? = null) {
    class Loading<T>(data: T? = null) : Resource<T>(data)
    class Error<T>(msg: String? = null, data: T? = null) : Resource<T>(data, msg)
    class Success<T>(data: T?) : Resource<T>(data)
}
```

```kotlin
class MainViewModel(private val productRepository: ProductRepository) : ViewModel() {

    // ColdFlow untuk mengamati daftar produk
    private val _coldFlowProducts = Channel<Resource<List<Product>>>()
    val coldFlowProducts = _coldFlowProducts.receiveAsFlow().onStart {
        fetchProducts()
    }

    // HotFlow untuk mengamati daftar produk
    private val _hotFlowProducts = MutableSharedFlow<Resource<List<Product>>>()
    val hotFlowProducts = _hotFlowProducts.asSharedFlow().onStart {
        fetchProducts()
    }

    private val _product = Channel<Resource<Product>>()
    val product = _product.receiveAsFlow()

    fun fetchProductById(id: String) {
        viewModelScope.launch {
            flow {
                emit(Resource.Loading())

                try {
                    val response = productRepository.getProductById(id)

                    if (response.isSuccessful) {
                        emit(Resource.Success(response.body()))
                    } else {
                        emit(Resource.Error(response.message()))
                    }

                } catch (e: Exception) {
                    emit(Resource.Error(e.message.toString()))
                }
            }.collect {
                 _coldFlowProducts.send(it)
            }
        }
    }

    fun fetchProducts() {
        viewModelScope.launch {
            flow {
                emit(Resource.Loading())

                try {
                    val response = productRepository.getProducts()

                    if (response.isSuccessful) {
                        emit(Resource.Success(response.body()))
                    } else {
                        emit(Resource.Error(response.message()))
                    }
                } catch (e: Exception) {
                    emit(Resource.Error(e.message.toString()))
                }

            }.collect {
                _coldFlowProducts.send(it)
            }
        }
    }
}
```

```kotlin
@Composable
fun MainFeedScreen(
    navController: NavController,
) {
    val viewModel = viewModel<MainViewModel>()
    val products by viewModel.products.collectAsState(initial = Resource.Loading())
}
```
