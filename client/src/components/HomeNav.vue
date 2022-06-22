<script>
    export default {
        data() {
            return {
                isActive: false
            }
        },
        methods: {
            toggleMenu() {
                this.isActive = !this.isActive;
            }
        }
    }
</script>

<template>
    <div>
        <div class="hamburger hamburger--vortex " :class="{ 'is-active': isActive }" v-on:click="toggleMenu">
            <div class="hamburger-box">
                <div class="hamburger-inner"></div>
            </div>
        </div>
        <div v-if="isActive" v-on:click="toggleMenu">
            <nav class="navbar is-overlay">
                <div class="navbar-item">
                    <a class="navbar-item" href="#home">
                        Home
                    </a>
                </div>
                <div class="navbar-item">
                    <a class="navbar-item" href="#about-me">
                        About Me
                    </a>
                </div>
                <div class="navbar-item">
                    <a class="navbar-item" href="#my-links">
                        Links
                    </a>
                </div>
                <div class="navbar-item">
                    <a class="navbar-item" href="#my-work">
                        My Work
                    </a>
                </div>
                <div class="navbar-item">
                    <a class="navbar-item" href="#site-specs">
                        Site Specs
                    </a>
                </div>
            </nav>
        </div>
    </div>
</template>

<style>
.hamburger {
    background: var(--background-color-secondary);
    position: fixed;
    z-index: 7;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
    background-color: var(--text-primary-color);
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
    background-color: var(--link-secondary-color);
}

.navbar {
    background: var(--background-color-secondary);
    color: var(--text-primary-color);
    position: fixed;
    height: 50px;
    max-width: 530px;
    margin-left: 55px;
    font-size: 18px;
    z-index: 7;
}

.navbar a {
    color: var(--text-primary-color);
}

.navbar a:hover {
    background: var(--link-secondary-color);
    color: var(--background-color-alt);
}

@media (max-width: 1020px) {
    .navbar {
        height: 295px;
        margin-left: 0px;
        margin-top: 53px;
        max-width: 127px;
    }
}
</style>