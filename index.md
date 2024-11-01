---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Raion Academy 2024 - Mobile Developer Path"
  text: ""
  tagline: Introduction to Kotlin and Jetpack Compose.
  actions:
    - theme: brand
      text: Raion Community Instagram
      link: https://www.instagram.com/raion_community/
    - theme: alt
      text: Jetpack Compose Official Website
      link: https://developer.android.com/compose

features:
  - title: Instalasi Android Studio
    details: Android Studio adalah IDE resmi dari Google untuk mengembangkan aplikasi Android.

  - title: Pengenalan Kotlin
    details: Kotlin adalah bahasa pemrograman modern yang dirancang oleh JetBrains dan pertama kali diumumkan pada tahun 2011.
    link: .vitepress/src/1_pengenalan_kotlin/a_pengertian

  - title: Pengenalan Jetpack Compose
    details: Jetpack Compose adalah toolkit modern dan deklaratif untuk membangun antarmuka pengguna (UI) di aplikasi Android.
    link: .vitepress/src/2_pengenalan_compose/a_pengertian

  - title: Pengenalan State
    details: State dalam konteks Jetpack Compose merujuk pada data yang mempengaruhi tampilan antarmuka pengguna (UI) dari komponen tertentu.
    link: .vitepress/src/3_pengenalan_state/a_state

  - title: Pengenalan Navigation
    details: Navigation dalam Jetpack Compose adalah mekanisme yang memungkinkan pengguna berpindah antara berbagai layar (screens) dalam aplikasi.
    link: .vitepress/src/4_pengenalan_navigation/a_setup

  - title: Pengenalan MVVM
    details: MVVM, atau Model-View-ViewModel, adalah pola arsitektur yang dirancang untuk memisahkan logika bisnis dari antarmuka pengguna (UI).
    link: .vitepress/src/5_pengenalan_mvvm/a_pengertian
---

<br>
<br>

# Our Team

Say hello to our awesome team behind this module.

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { members } from '.vitepress/models/team-members.ts'
</script>

<VPTeamMembers size="medium" :members="members" />
