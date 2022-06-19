<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <RouterView />
</template>

<style>
body {
    font-family: 'Anek Malayalam';
}

::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #647358;
    border-radius: 8px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #3f4738;
}
</style>

<!DOCTYPE html>