<template>
  <div class="bg-slate-800 rounded py-1 px-4 w-max text-sm font-accent flex items-center">
    <svg class="w-4 h-4 stroke-blue mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M10 3 8 21M16 3l-2 18M3.5 9h18M2.5 15h18" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round"></path>
    </svg>

    <slot />
  </div>
</template>