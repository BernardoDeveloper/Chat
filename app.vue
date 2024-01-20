<script setup>
import '@unocss/reset/tailwind.css'
import Header from './components/header.vue'
</script>

<template>
  <div class="bg-slate-900 text-white w-screen h-screen overflow-x-hidden font-content">
    <Header />

    <Chat />
  </div>
</template>
