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
      text: Additional Resources (Notion)
      link: https://adhesive-eggnog-eca.notion.site/Kotlin-Fundamental-16b2b31e67b447209bc53c8095e363e0

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
Selamat datang di tahap akhir perjalanan Raion Academy! Di sini, kamu akan menemukan ketentuan dan detail untuk mengumpulkan project akhirmu. Pastikan kamu membaca persyaratannya dengan teliti dan jangan lupa mengumpulkan proyekmu tepat waktu, ya!
:::

::: details Ketentuan Project Akhir

```
Sabar boss... belum di push
```

:::

::: details Pengumpulan Project Akhir

```
Sabar boss... belum di push
```

:::

<br>

# Connect with us!

Meet the incredible team that made this module possible. Feel free to reach out and get to know the people behind the scenes!

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { members } from './models/team-members.ts'
</script>

<VPTeamMembers size="medium" :members="members" />
