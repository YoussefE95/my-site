<script setup>
    import { RouterLink, RouterView } from 'vue-router';
    import ThemeToggle from '@/components/ThemeToggle.vue';
</script>

<template>
    <ThemeToggle />
    <RouterView />
</template>

<style>
body {
    font-family: 'Anek Malayalam';
}

/* Define styles for the default root window element */
:root {
  --background-color-primary: #eff1f5;
  --background-color-secondary: #e6e9ef;
  --background-color-alt: #dce0e8;
  --accent-color: #6c6f85;
  --accent-alt-color: #5c5f77;
  --text-primary-color: #4c4f69;
  --link-primary-color: #1e66f5;
  --link-secondary-color: #7287fd;
  --hero-gradient: rgba(137, 180, 250, 0.65);
}

/* Define styles for the root window with dark - mode preference */

[data-theme="darkMode"] {
  --background-color-primary: #24273a;
  --background-color-secondary: #1e2030;
  --background-color-alt: #181926;
  --accent-color: #45475a;
  --accent-alt-color: #bac2de;
  --text-primary-color: #cdd6f4;
  --link-primary-color: #89b4fa;
  --link-secondary-color: #b4befe;
  --hero-gradient: rgba(110, 115, 141, 0.65);
}

body {
    background: var(--background-color-primary);
    color: var(--text-primary-color);
    min-height: 100vh;
}

::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: var(--background-color-alt);
}

/* Handle */
::-webkit-scrollbar-thumb {
    background:var(--accent-color);
    border-radius: 8px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: var(--background-color-alt);
}
</style>

<!DOCTYPE html>