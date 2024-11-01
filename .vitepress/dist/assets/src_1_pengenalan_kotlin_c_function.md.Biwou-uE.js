import{_ as i,c as s,a0 as n,o as e}from"./chunks/framework.CoVXEd1Z.js";const u=JSON.parse('{"title":"Function di Kotlin","description":"","frontmatter":{"next":{"text":"Pemrograman Berorientasi Objek (OOP) di Kotlin","link":"./d_oop"}},"headers":[],"relativePath":"src/1_pengenalan_kotlin/c_function.md","filePath":"src/1_pengenalan_kotlin/c_function.md"}'),t={name:"src/1_pengenalan_kotlin/c_function.md"};function l(k,a,h,p,r,d){return e(),s("div",null,a[0]||(a[0]=[n(`<h1 id="function-di-kotlin" tabindex="-1">Function di Kotlin <a class="header-anchor" href="#function-di-kotlin" aria-label="Permalink to &quot;Function di Kotlin&quot;">​</a></h1><h2 id="pengertian-function" tabindex="-1">Pengertian Function <a class="header-anchor" href="#pengertian-function" aria-label="Permalink to &quot;Pengertian Function&quot;">​</a></h2><p>Function, atau fungsi, adalah blok kode yang dirancang untuk melakukan tugas tertentu dan dapat dipanggil atau digunakan berkali-kali di dalam program. Dalam Kotlin, fungsi digunakan untuk menyederhanakan kode dengan cara memisahkan tugas ke dalam bagian-bagian yang lebih kecil dan mudah diatur. Ini memungkinkan pengembang untuk menulis kode yang lebih modular, terorganisir, dan mudah dipelihara. Fungsi dapat menerima input, melakukan proses, dan mengembalikan output.</p><p>Fungsi dalam Kotlin dapat didefinisikan di dalam kelas (fungsi anggota) atau di luar kelas (fungsi tingkat atas). Setiap fungsi memiliki nama, daftar parameter opsional, dan tipe nilai kembalian. Jika fungsi tidak mengembalikan nilai, tipe kembalian yang digunakan adalah <code>Unit</code>, mirip dengan <code>void</code> dalam bahasa pemrograman seperti Java.</p><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Fungsi sederhana yang tidak mengembalikan nilai</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> greet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, World!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="struktur-function-di-kotlin" tabindex="-1">Struktur Function di Kotlin <a class="header-anchor" href="#struktur-function-di-kotlin" aria-label="Permalink to &quot;Struktur Function di Kotlin&quot;">​</a></h2><p>Fungsi dalam Kotlin memiliki struktur yang sederhana, terdiri dari:</p><ul><li><strong>Nama Fungsi</strong>: Nama unik yang mengidentifikasi fungsi tersebut.</li><li><strong>Parameter</strong>: Daftar parameter opsional yang diterima oleh fungsi, masing-masing dengan nama dan tipe data.</li><li><strong>Tipe Kembalian</strong>: Tipe data dari nilai yang dikembalikan oleh fungsi. Jika tidak ada nilai yang dikembalikan, digunakan <code>Unit</code>.</li><li><strong>Badan Fungsi</strong>: Kode yang berada di dalam kurung kurawal <code>{}</code> yang akan dieksekusi ketika fungsi dipanggil.</li></ul><p>Fungsi juga bisa memiliki <strong>parameter default</strong>, yang berarti parameter tersebut memiliki nilai bawaan jika tidak diisi ketika fungsi dipanggil. Kotlin juga mendukung <strong>fungsi ekspresi tunggal</strong>, yang memungkinkan Anda mendefinisikan fungsi dalam satu baris jika fungsinya sederhana.</p><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Fungsi dengan parameter dan nilai kembalian</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="parameter-pada-function" tabindex="-1">Parameter pada Function <a class="header-anchor" href="#parameter-pada-function" aria-label="Permalink to &quot;Parameter pada Function&quot;">​</a></h2><p>Fungsi di Kotlin dapat menerima satu atau beberapa parameter sebagai input. Parameter ini dideklarasikan dengan nama dan tipe datanya di dalam tanda kurung. Kotlin mendukung penggunaan parameter default, yang memungkinkan nilai default digunakan jika tidak ada nilai yang diberikan saat fungsi dipanggil. Hal ini sangat berguna untuk mengurangi keharusan menulis kode yang berulang. Anda juga dapat menggunakan named arguments untuk membuat pemanggilan fungsi lebih jelas, terutama saat fungsi memiliki banyak parameter.</p><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Fungsi dengan parameter default</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> greetUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Guest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="fungsi-single-expression" tabindex="-1">Fungsi Single-Expression <a class="header-anchor" href="#fungsi-single-expression" aria-label="Permalink to &quot;Fungsi Single-Expression&quot;">​</a></h2><p>Kotlin menyediakan cara ringkas untuk menulis fungsi dengan satu baris kode, yang dikenal sebagai single-expression function. Fungsi ini dapat ditulis tanpa tanda kurung kurawal <code>{}</code> dan langsung mengembalikan nilai dengan tanda <code>=</code> setelah deklarasi fungsi. Ini membuat kode lebih bersih dan sederhana, terutama untuk operasi kecil.</p><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Fungsi single-expression</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> square</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x</span></span></code></pre></div><h2 id="fungsi-higher-order" tabindex="-1">Fungsi Higher-Order <a class="header-anchor" href="#fungsi-higher-order" aria-label="Permalink to &quot;Fungsi Higher-Order&quot;">​</a></h2><p>Kotlin mendukung fungsi higher-order, yaitu fungsi yang menerima fungsi lain sebagai parameter atau mengembalikan fungsi. Hal ini memungkinkan penulisan kode yang lebih dinamis dan fleksibel, terutama dalam konteks pemrograman fungsional.</p><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Fungsi higher-order: menerima fungsi lain sebagai parameter</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> operateOnNumbers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, operation: (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> operation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a, b)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Memanggil fungsi higher-order dengan lambda</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> operateOnNumbers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) { x, y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y } </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Hasilnya adalah 15</span></span></code></pre></div>`,19)]))}const o=i(t,[["render",l]]);export{u as __pageData,o as default};
