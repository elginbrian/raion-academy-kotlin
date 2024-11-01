import{_ as i,c as s,a0 as n,o as e}from"./chunks/framework.CoVXEd1Z.js";const m=JSON.parse('{"title":"Pengenalan State di Jetpack Compose","description":"","frontmatter":{},"headers":[],"relativePath":"src/3_pengenalan_state/a_state.md","filePath":"src/3_pengenalan_state/a_state.md"}'),t={name:"src/3_pengenalan_state/a_state.md"};function p(l,a,k,h,r,d){return e(),s("div",null,a[0]||(a[0]=[n(`<h1 id="pengenalan-state-di-jetpack-compose" tabindex="-1">Pengenalan State di Jetpack Compose <a class="header-anchor" href="#pengenalan-state-di-jetpack-compose" aria-label="Permalink to &quot;Pengenalan State di Jetpack Compose&quot;">​</a></h1><h2 id="pengertian-state" tabindex="-1">Pengertian State <a class="header-anchor" href="#pengertian-state" aria-label="Permalink to &quot;Pengertian State&quot;">​</a></h2><p>State dalam konteks Jetpack Compose merujuk pada data yang mempengaruhi tampilan antarmuka pengguna (UI) dari komponen tertentu. Ini adalah konsep kunci dalam pemrograman deklaratif yang digunakan oleh Jetpack Compose, di mana UI secara otomatis diperbarui ketika state berubah. Dengan kata lain, jika ada perubahan pada state, komponen UI yang bergantung padanya akan secara otomatis menyegarkan tampilannya untuk mencerminkan nilai terbaru.</p><p>State dapat dianggap sebagai representasi dari informasi yang dapat berubah selama siklus hidup aplikasi, seperti status input pengguna, data yang diambil dari jaringan, atau informasi lain yang relevan. Dengan mengelola state dengan baik, pengembang dapat menciptakan aplikasi yang responsif dan intuitif, di mana UI selalu mencerminkan keadaan aplikasi yang akurat.</p><h2 id="remember" tabindex="-1"><code>remember</code> <a class="header-anchor" href="#remember" aria-label="Permalink to &quot;\`remember\`&quot;">​</a></h2><p><code>remember</code> adalah fungsi dalam Jetpack Compose yang digunakan untuk menyimpan nilai di dalam state lokal. Ketika Anda menggunakan <code>remember</code>, nilai yang dihasilkan oleh fungsi tersebut akan disimpan selama masa hidup composable yang memanggilnya. Ini berguna untuk menjaga nilai antara recompositions (rekomposisi) tanpa kehilangan data. Dengan menggunakan <code>remember</code>, pengembang dapat memastikan bahwa data tetap konsisten dan tidak direset setiap kali tampilan diubah atau diperbarui.</p><h2 id="mutablestateof" tabindex="-1"><code>mutableStateOf</code> <a class="header-anchor" href="#mutablestateof" aria-label="Permalink to &quot;\`mutableStateOf\`&quot;">​</a></h2><p><code>mutableStateOf</code> adalah fungsi yang digunakan untuk membuat state yang dapat diubah (mutable state) dalam Jetpack Compose. Dengan menggunakan <code>mutableStateOf</code>, Anda dapat membuat variabel yang dapat memicu recompositions ketika nilainya berubah. Ini memungkinkan UI untuk memperbarui secara otomatis ketika state diubah. Ketika sebuah state yang didefinisikan dengan <code>mutableStateOf</code> diubah, Jetpack Compose akan secara otomatis merender ulang komponen UI yang bergantung pada state tersebut, memberikan pengalaman pengguna yang responsif dan dinamis.</p><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">by</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> remember</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mutableStateOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }</span></span></code></pre></div><h2 id="contoh-penerapan" tabindex="-1">Contoh Penerapan <a class="header-anchor" href="#contoh-penerapan" aria-label="Permalink to &quot;Contoh Penerapan&quot;">​</a></h2><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@Composable</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Counter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Menggunakan remember untuk menyimpan mutableStateOf</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">by</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> remember</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mutableStateOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Count: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$count</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(onClick </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Increase Count&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Dalam contoh di atas:</p><ul><li><code>remember</code> menyimpan state count agar nilainya tetap ada antara recompositions.</li><li><code>mutableStateOf</code> menciptakan state count yang dapat diubah dan memicu recompositions setiap kali nilainya diubah oleh tombol yang diklik.</li></ul>`,13)]))}const g=i(t,[["render",p]]);export{m as __pageData,g as default};
