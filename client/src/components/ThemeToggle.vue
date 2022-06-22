<script>
export default {
    mounted() {
        let localTheme = localStorage.getItem('theme'); // gets stored theme value if any
        document.documentElement.setAttribute('data-theme', localTheme); // updates the data-theme attribute
    },
    data() {
        return {
            theme: '' // When this property is empty, the theme is set to the default theme i.e. light mode.
        };
    },
    methods: {
        toggleTheme() {
            this.theme = (this.theme === 'darkMode' ? '' : 'darkMode'); // toggles theme value
            document.documentElement.setAttribute('data-theme', this.theme); // sets the data-theme attribute
            localStorage.setItem('theme', this.theme); // stores theme value on local storage
        }
    }
};
</script>

<template>
    <div class="toggle" @click="toggleTheme">
        <div v-if="theme">
            <i class="fa-solid fa-moon"></i>
        </div>
        <div v-else>
            <i class="fa-solid fa-sun"></i>
        </div>
    </div>
</template>

<style>
.toggle {
    position: fixed;
    right: 0;
    z-index: 7;
    width: 50px;
    height: 50px;
    background: var(--background-color-secondary);
}

.toggle .fa-moon,
.toggle .fa-sun {
    font-size: 30px;
    padding-top: 9px;
}

.toggle .fa-moon {
    padding-left: 10px;
    color: #74c7ec;
}

.toggle .fa-sun {
    padding-left: 9px;
    color: #df8e1d;
}
</style>