<script setup>
async function submit() {
  const { body } = await $fetch('/api/message', {
    method: 'post',
    body: { test: 123 }
  })
}
</script>

<template>
  <div class="p-xl">
    <p>our chat</p>
  </div>

  <div class="fixed bottom-0 w-screen p-xl border-t-2 border-slate-800 flex items-center justify-between space-x-3">
    <input type="text" placeholder="message" class="bg-slate-800 w-full h-10 px-4 rounded" />
    <button :onclick="submit()" class="!bg-slate-800 px-4 py-2 rounded">send</button>
  </div>
</template>