<script>
export default {
    mounted() {
        this.theme = localStorage.getItem('theme'); // gets stored theme value if any

        if (this.theme === 'darkMode') {
            document.documentElement.setAttribute('data-theme', this.theme); // updates the data-theme attribute
            this.isChecked = false;
        }
    },
    data() {
        return {
            theme: '', // When this property is empty, the theme is set to the default theme i.e. light mode.
            isChecked: true
        };
    },
    methods: {
        toggleTheme() {
            this.theme = (this.theme === 'darkMode' ? '' : 'darkMode'); // toggles theme value
            this.isChecked = !this.isChecked;
            document.documentElement.setAttribute('data-theme', this.theme); // sets the data-theme attribute
            localStorage.setItem('theme', this.theme); // stores theme value on local storage
        }
    }
};
</script>

<template>
    <div class="field toggle">
        <input id="lightSwitch" type="checkbox" name="lightSwitch" class="switch" v-model="isChecked" @click="toggleTheme">
        <label for="lightSwitch"></label>
    </div>
</template>

<style>
.toggle {
    position: fixed;
    right: 0;
    z-index: 7;
}
</style>