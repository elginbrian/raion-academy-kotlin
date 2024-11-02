import{_ as i,c as a,a0 as n,o as t}from"./chunks/framework.CoVXEd1Z.js";const g=JSON.parse('{"title":"UI Layouts di Jetpack Compose","description":"","frontmatter":{"next":{"text":"Modifiers di Jetpack Compose","link":"./d_modifier"}},"headers":[],"relativePath":"src/2_pengenalan_compose/c_ui_layout.md","filePath":"src/2_pengenalan_compose/c_ui_layout.md"}'),l={name:"src/2_pengenalan_compose/c_ui_layout.md"};function k(e,s,h,p,d,E){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="ui-layouts-di-jetpack-compose" tabindex="-1">UI Layouts di Jetpack Compose <a class="header-anchor" href="#ui-layouts-di-jetpack-compose" aria-label="Permalink to &quot;UI Layouts di Jetpack Compose&quot;">​</a></h1><h2 id="pengertian-ui-layouts" tabindex="-1">Pengertian UI Layouts <a class="header-anchor" href="#pengertian-ui-layouts" aria-label="Permalink to &quot;Pengertian UI Layouts&quot;">​</a></h2><p>UI Layouts adalah komponen dasar dalam Jetpack Compose yang digunakan untuk mengatur dan menyusun elemen antarmuka pengguna (UI) dalam aplikasi. Layouts memungkinkan pengembang untuk mengatur bagaimana elemen UI ditampilkan di layar, baik secara vertikal, horizontal, atau dalam struktur yang lebih kompleks. Dengan menggunakan UI Layouts, pengembang dapat menciptakan pengalaman pengguna yang responsif dan intuitif.</p><p>Jetpack Compose menyediakan berbagai jenis layout, masing-masing dengan karakteristik dan kegunaannya sendiri. Beberapa layout yang umum digunakan termasuk Column, Row, Box, dan LazyColumn.</p><h2 id="jenis-jenis-ui-layouts" tabindex="-1">Jenis-jenis UI Layouts <a class="header-anchor" href="#jenis-jenis-ui-layouts" aria-label="Permalink to &quot;Jenis-jenis UI Layouts&quot;">​</a></h2><h3 id="_1-column" tabindex="-1">1. Column <a class="header-anchor" href="#_1-column" aria-label="Permalink to &quot;1. Column&quot;">​</a></h3><p>Column adalah layout yang digunakan untuk menampilkan elemen UI secara vertikal, satu di bawah yang lainnya. Setiap elemen yang ditambahkan ke dalam Column akan ditampilkan dalam urutan yang ditentukan.</p><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@Composable</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ColumnExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(modifier </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Modifier.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.dp)) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Item 1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Item 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Item 3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-row" tabindex="-1">2. Row <a class="header-anchor" href="#_2-row" aria-label="Permalink to &quot;2. Row&quot;">​</a></h3><p>Row adalah layout yang menampilkan elemen UI secara horizontal. Elemen yang ditambahkan ke dalam Row akan ditampilkan berdampingan, dari kiri ke kanan.</p><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@Composable</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RowExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Row</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(modifier </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Modifier.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.dp)) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(onClick </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Aksi 1 */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Button 1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Spacer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(modifier </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Modifier.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.dp)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Jarak antara tombol</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(onClick </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Aksi 2 */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Button 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_3-box" tabindex="-1">3. Box <a class="header-anchor" href="#_3-box" aria-label="Permalink to &quot;3. Box&quot;">​</a></h3><p>Box adalah layout yang memungkinkan elemen UI ditumpuk satu sama lain. Anda dapat mengatur posisi setiap elemen di dalam Box, memberikan fleksibilitas untuk menampilkan konten yang saling tumpang tindih.</p><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@Composable</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BoxExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(modifier </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Modifier.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.dp)) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Centered Text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, modifier </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Modifier.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">align</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Alignment.Center))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Top Left&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, modifier </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Modifier.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">align</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Alignment.TopStart))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_4-lazycolumn" tabindex="-1">4. LazyColumn <a class="header-anchor" href="#_4-lazycolumn" aria-label="Permalink to &quot;4. LazyColumn&quot;">​</a></h3><p>LazyColumn adalah versi efisien dari Column yang dirancang untuk menampilkan daftar elemen yang dapat digulir. LazyColumn hanya akan merender elemen yang terlihat di layar, sehingga mengurangi penggunaan memori dan meningkatkan performa ketika menangani daftar yang panjang.</p><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@Composable</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LazyColumnExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    items: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> listOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Item 1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Item 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Item 3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    LazyColumn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(items) { item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,17)]))}const o=i(l,[["render",k]]);export{g as __pageData,o as default};