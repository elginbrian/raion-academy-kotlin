import{_ as n,c as i,a2 as s,o as e}from"./chunks/framework.6x3wfQve.js";const g=JSON.parse('{"title":"Dependency Injection dengan Koin","description":"","frontmatter":{"next":{"text":"Home","link":"https://raion-academy-2024.vercel.app"}},"headers":[],"relativePath":"src/5_pengenalan_mvvm/e_di/index.md","filePath":"src/5_pengenalan_mvvm/e_di/index.md"}'),t={name:"src/5_pengenalan_mvvm/e_di/index.md"};function l(k,a,p,d,h,o){return e(),i("div",null,a[0]||(a[0]=[s(`<h1 id="dependency-injection-dengan-koin" tabindex="-1">Dependency Injection dengan Koin <a class="header-anchor" href="#dependency-injection-dengan-koin" aria-label="Permalink to &quot;Dependency Injection dengan Koin&quot;">​</a></h1><h2 id="pengertian-dependency-injection" tabindex="-1">Pengertian Dependency Injection <a class="header-anchor" href="#pengertian-dependency-injection" aria-label="Permalink to &quot;Pengertian Dependency Injection&quot;">​</a></h2><p>Dependency Injection (DI) adalah sebuah pola desain yang digunakan untuk mengelola ketergantungan antara komponen dalam sebuah aplikasi. Dengan menggunakan DI, objek tidak bertanggung jawab untuk menginisialisasi ketergantungannya sendiri, melainkan ketergantungan tersebut disediakan oleh pihak luar. Pola ini membantu meningkatkan modularitas, mengurangi coupling, dan mempermudah pengujian unit dengan memfasilitasi penggantian ketergantungan dengan versi mock atau stub saat pengujian.</p><h2 id="koin-sebagai-dependency-injection-framework" tabindex="-1">Koin sebagai Dependency Injection Framework <a class="header-anchor" href="#koin-sebagai-dependency-injection-framework" aria-label="Permalink to &quot;Koin sebagai Dependency Injection Framework&quot;">​</a></h2><p>Koin adalah framework dependency injection yang ditulis dalam Kotlin, dirancang untuk kemudahan penggunaan dan integrasi yang sederhana dengan aplikasi Android. Koin memiliki beberapa fitur utama, antara lain:</p><ul><li><strong>Minimalis</strong>: Koin memiliki sintaksis yang sederhana dan tidak memerlukan anotasi atau konfigurasi yang rumit.</li><li><strong>Fleksibel</strong>: Koin memungkinkan pengembang untuk mendefinisikan modul dan ketergantungan dengan cara yang fleksibel, sehingga mudah diubah sesuai kebutuhan.</li><li><strong>Scoped</strong>: Koin mendukung scoping, yang memungkinkan Anda untuk menentukan siklus hidup dari objek yang di-inject, seperti singleton atau objek yang diciptakan setiap kali diminta.</li><li><strong>Bersih dan Ringan</strong>: Koin tidak memerlukan boilerplate code yang banyak, sehingga menjaga kode tetap bersih dan mudah dibaca.</li></ul><h2 id="cara-kerja-koin" tabindex="-1">Cara Kerja Koin <a class="header-anchor" href="#cara-kerja-koin" aria-label="Permalink to &quot;Cara Kerja Koin&quot;">​</a></h2><p>Untuk menggunakan Koin, Anda perlu mendefinisikan modul yang berisi semua ketergantungan yang ingin Anda kelola. Setiap modul dapat berisi beberapa definisi untuk berbagai kelas atau objek yang ingin Anda injeksi. Berikut adalah langkah-langkah umum untuk menggunakan Koin:</p><ol><li><strong>Menambahkan Dependensi Koin</strong>: Tambahkan Koin ke dalam file build.gradle Anda.</li><li><strong>Mendefinisikan Modul</strong>: Buat modul Koin yang berisi definisi untuk ketergantungan Anda.</li><li><strong>Menginisialisasi Koin</strong>: Inisialisasi Koin di dalam kelas aplikasi Anda.</li><li><strong>Menggunakan Koin</strong>: Injeksi ketergantungan ke dalam kelas Anda menggunakan fungsi <code>get()</code> atau melalui constructor.</li></ol><h2 id="contoh-implementasi-koin" tabindex="-1">Contoh Implementasi Koin <a class="header-anchor" href="#contoh-implementasi-koin" aria-label="Permalink to &quot;Contoh Implementasi Koin&quot;">​</a></h2><p>Berikut adalah contoh sederhana tentang bagaimana menggunakan Koin untuk mengelola ketergantungan dalam aplikasi Android:</p><h3 id="modul-koin" tabindex="-1">Modul Koin <a class="header-anchor" href="#modul-koin" aria-label="Permalink to &quot;Modul Koin&quot;">​</a></h3><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> appModule </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Mendefinisikan ApiService sebagai singleton</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    single</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ApiService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Menginjeksi ApiService ke dalam Repository</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    single</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Repository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Menginjeksi Repository ke dalam MainViewModel</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    viewModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MainViewModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyApplication</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Application</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    override</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onCreate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        super</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onCreate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        startKoin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            modules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(appModule)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,14)]))}const u=n(t,[["render",l]]);export{g as __pageData,u as default};
