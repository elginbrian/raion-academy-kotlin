---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "RAION ACADEMY\n2024 🦁"
  text: ""
  tagline: Mobile Development Learning Path.
  actions:
    - theme: brand
      text: Raion Community Instagram
      link: https://www.instagram.com/raion_community/
    - theme: alt
      text: Jetpack Compose Official Website
      link: https://developer.android.com/compose
    - theme: alt
      text: Kotlin Playground
      link: https://play.kotlinlang.org/

features:
  - icon: 📱
    title: Instalasi Android Studio
    details: Android Studio adalah IDE resmi dari Google untuk mengembangkan aplikasi Android.
    link: ./src/0_instalasi_android_studio

  - icon: 💜
    title: Pengenalan Kotlin
    details: Kotlin adalah bahasa pemrograman modern yang dirancang oleh JetBrains dan pertama kali diumumkan pada tahun 2011.
    link: ./src/1_pengenalan_kotlin/a_pengertian

  - icon: 💚
    title: Pengenalan Jetpack Compose
    details: Jetpack Compose adalah toolkit modern dan deklaratif untuk membangun antarmuka pengguna (UI) di aplikasi Android.
    link: ./src/2_pengenalan_compose/a_pengertian

  - icon: 🚩
    title: Pengenalan State
    details: State dalam konteks Jetpack Compose merujuk pada data yang mempengaruhi tampilan antarmuka pengguna (UI) dari komponen tertentu.
    link: ./src/3_pengenalan_state/a_state

  - icon: 📍
    title: Pengenalan Navigation
    details: Navigation dalam Jetpack Compose adalah mekanisme yang memungkinkan pengguna berpindah antara berbagai layar (screens) dalam aplikasi.
    link: ./src/4_pengenalan_navigation/a_setup

  - icon: 🔥
    title: Pengenalan MVVM
    details: MVVM, atau Model-View-ViewModel, adalah pola arsitektur yang dirancang untuk memisahkan logika bisnis dari antarmuka pengguna (UI).
    link: ./src/5_pengenalan_mvvm/a_pengertian
---

<br>

::: tip FINAL PROJECT 🌟
Selamat datang di tahap akhir perjalanan Raion Academy! Di sini, kamu akan menemukan ketentuan dan benefit dari mengerjakan project akhirmu. Pastikan kamu membaca persyaratannya dengan teliti dan jangan lupa mengumpulkan proyekmu tepat waktu, ya!
:::

::: details Ketentuan Final Project 📄

### ShopEase🛍

<br>

##### Deskripsi

Aplikasi belanja yang memudahkan pengguna untuk melihat produk menggunakan **Fake Store API**.

##### Latar Belakang

Alex, seorang mahasiswa yang hobi belanja online, ingin aplikasi yang bisa membantu dia menemukan produk dengan mudah. Aplikasi ini harus menampilkan detail produk dan memiliki navigasi yang user-friendly. Tugas Anda adalah mengembangkan aplikasi **ShopEase** secara bertahap, di mana setiap level akan menambahkan fitur baru.

---

### Milestone

<br>

##### Level 1: Layout Sederhana (5 Point)

- **Kasus**: Alex ingin melihat daftar produk dengan tampilan yang menarik.
- **Tugas**: Buat tampilan awal aplikasi yang sederhana, yang hanya menampilkan nama dan gambar produk tanpa interaksi apapun.

##### Level 2: State Management (10 Point)

- **Kasus**: Setelah melihat daftar produk, Alex ingin bisa menambahkan produk ke dalam keranjang belanja.
- **Tugas**: Tambahkan manajemen state untuk mengelola jumlah produk yang ditambahkan ke keranjang, sehingga pengalaman belanja jadi lebih interaktif.

##### Level 3: Navigasi Antar Layar (15 Point)

- **Kasus**: Alex ingin tahu lebih banyak tentang produk yang menarik perhatiannya.
- **Tugas**: Buat layar detail produk yang menunjukkan informasi lengkap dan tambahkan navigasi antara layar beranda dan layar detail.

<!-- ##### Level 4: Fetch API (50 Point)

- **Kasus**: Alex merasa kesulitan menemukan produk yang pas dan berharap aplikasi bisa menampilkan produk dari internet.
- **Tugas**: Ambil data produk dari **Fake Store API** dan tampilkan di aplikasi, plus tambahkan loading indicator dan exception handling saat mengambil data.

##### Level 5: Dependency Injection (10 Point)

- **Kasus**: Alex ingin aplikasi yang stabil dan mudah dirawat.
- **Tugas**: Gunakan **Koin** untuk mengelola dependensi dalam aplikasi, agar struktur aplikasi lebih baik dan mudah untuk dimaintain. -->

:::

::: details Benefit Mengerjakan Final Project 🎁

<br>

##### Best Team 🤝

- Tim dengan hasil akhir project paling bagus bakal dapat hadiah **duit**. Siapa yang nggak mau, kan?
- Tiap anggota dari best team juga bakal **ditandain** pas open recruitment Raion divisi programmer apps nanti.

:::

<!-- ## Explore Lebih Lanjut! 📺

<div class="video-container">
  <iframe width="300" height="170" src="https://www.youtube.com/embed/6_wK_Ud8--0" frameborder="0" allowfullscreen></iframe>
  <iframe width="300" height="170" src="https://www.youtube.com/embed/FIEnIBq7Ups" frameborder="0" allowfullscreen></iframe>
  <iframe width="300" height="170" src="https://www.youtube.com/embed/bOd3wO0uFr8" frameborder="0" allowfullscreen></iframe>
  <iframe width="300" height="170" src="https://www.youtube.com/embed/zCIfBbm06QM" frameborder="0" allowfullscreen></iframe>
  <iframe width="300" height="170" src="https://www.youtube.com/embed/ek682t-z2gQ" frameborder="0" allowfullscreen></iframe>
</div>

<style>
  .video-container {
    display: flex;
    overflow-x: auto;
    gap: 16px;
    padding: 16px 0;
  }

  .video-container iframe {
    flex: 0 0 auto;
  }

  .video-container::-webkit-scrollbar {
    display: none;
  }

</style>

<hr> -->

# Connect with us!

Meet the incredible team that made this module possible. Feel free to reach out and get to know the people behind the scenes!

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { members } from './models/team-members.ts'
</script>

<VPTeamMembers size="medium" :members="members" />
