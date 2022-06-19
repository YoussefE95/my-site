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
        },
        mounted() {
            const section = this.$router.currentRoute.value.hash.replace("#", "");
            if (section)
                this.$nextTick(() => window.document.getElementById(section).scrollIntoView());
        }
    }
</script>

<template>
    <main>
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

        <section class="hero is-large hero-home" id="home">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h2 class="title">Youssef Elzein</h2>
                    <h1 class="subtitle">A Full Stack Web Developer</h1>
                </div>
            </div>
        </section>

        <section class="about-me" id="about-me">
            <div class="container">
                <div class="column" data-aos="fade-in" data-aos-duration="1300">
                    <h1 class="title has-text-centered">About Me</h1>
                </div>
                <div class="columns is-centered">
                    <div class="column is-5" data-aos="fade-right" data-aos-duration="1300">
                        <p class="subtitle"></p>
                        <p class="content">
                            Hello, I'm Youssef Elzein! I study Computer Science at California State University Los Angeles
                            and I plan to graduate in May 2023. Throughout my studies, my absolute favorite courses have 
                            been the ones involving web development and I hope to pursue a career in that field.
                        </p>
                    </div>
                    <div class="column is-5 has-text-centered" data-aos="fade-left" data-aos-duration="1300">
                        <img src="https://i.pinimg.com/originals/d1/42/47/d1424763676d1a2194c414715f9df731.jpg"/>
                    </div>
                </div>
            </div>
        </section>

        <section class="my-links" id="my-links" data-aos="fade-in" data-aos-duration="1300">
            <div class="container">
                <div class="column" data-aos="fade-in" data-aos-duration="1300">
                    <h1 class="title has-text-centered">Links</h1>
                </div>
                <div class="column has-text-centered">
                    <a class="icon" href="https://github.com/YoussefE95" target="_blank" data-aos="fade-right" data-aos-duration="1300">
                        <i class="fa-brands fa-github-square fa-4x"></i>
                    </a>
                    <a class="icon" href="https://www.linkedin.com/in/youssef-elzein-931713220/" target="_blank" data-aos="fade-up" data-aos-duration="1300">
                        <i class="fa-brands fa-linkedin fa-4x"></i>
                    </a>
                    <a class="icon" href="" target="_blank" data-aos="fade-left" data-aos-duration="1300">
                        <i class="fa-solid fa-file-invoice fa-4x"></i>
                    </a>
                </div>
            </div>
        </section>

        <section class="my-work" id="my-work">
            <div class="container">
                <div class="column" data-aos="fade-in" data-aos-duration="1300">
                    <h1 class="title has-text-centered">My Work</h1>
                </div>
                <div class="columns is-centered is-mobile">
                    <div class="card" data-aos="fade-in" data-aos-duration="1300">
                        <header class="card-header">
                            <p class="card-header-title is-centered">
                                Middle Earth Info
                            </p>
                        </header>
                        <div class="card-content">
                            <p>
                                Get information about books, characters, and movies pertaining to Lord of the Rings and The Hobbit
                            </p>
                        </div>
                        <footer class="card-footer">
                            <RouterLink class="card-footer-item" to="/lotr">Preview</RouterLink>                               
                            <a class="card-footer-item" href="https://github.com/YoussefE95/middle-earth-info" target="_blank">
                                Source Code
                            </a>
                        </footer>
                    </div>
                </div>
            </div>
        </section>

        <section class="site-specs" id="site-specs" data-aos="fade-in" data-aos-duration="1300">
            <div class="container">
                <div class="column" data-aos="fade-in" data-aos-duration="1300">
                    <h1 class="title has-text-centered">Site Specs</h1>
                </div>
                <div class="columns is-centered" data-aos="fade-in" data-aos-duration="1300">
                    <div class="column is-5 development">
                        <p class="subtitle has-text-centered">Development</p>
                        <p class="content">
                            Designed using MEVN (<a href="https://www.mongodb.com/" target="_blank">MongoDB</a>, <a href="https://expressjs.com/" target="_blank">ExpressJs</a>, <a href="https://vuejs.org/" target="_blank">VueJs</a>, <a href="https://nodejs.org/en/" target="_blank">NodeJs</a>) stack and REST architecture.
                            Styling is done using <a href="https://bulma.io/" target="_blank">Bulma</a>. Scrolling animations are done using <a href="https://michalsnik.github.io/aos/" target="_blank">AOS (Animate On Scroll)</a>. I used <a href="https://jonsuh.com/hamburgers/" target="_blank">Jonsuh's Burgers</a>
                            for the burger animation. The font is <a href="https://fonts.google.com/specimen/Anek+Malayalam" target="_blank">Anek Malayalam</a> and the icons are <a href="https://fontawesome.com/" target="_blank">Font Awesome</a>
                        </p>
                    </div>
                    <div class="column is-5 deployment">
                        <p class="subtitle has-text-centered">Deployment</p>
                        <p class="content">
                            Express and Vue are running on an <a href="https://aws.amazon.com/" target="_blank">AWS</a> t2.micro with 1 vCPU, 1 GiB Memory, and Ubuntu Server. All MongoDB collections are stored in an <a href="https://www.mongodb.com/atlas/database" target="_blank">Atlas</a> cloud database.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style>
.hamburger {
    background: whitesmoke;
    position: fixed;
    z-index: 7;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
    background-color: black;
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
    background-color: #60a3bf;
}


.navbar {
    background: whitesmoke;
    position: fixed;
    height: 50px;
    max-width: 530px;
    margin-left: 55px;
    font-size: 18px;
    z-index: 7;
}

.navbar a:hover {
    color: whitesmoke;
    background: #60a3bf;
}

@media (max-width: 1020px) {
    .navbar {
        height: 295px;
        margin-left: 0px;
        margin-top: 53px;
        max-width: 127px;
    }
}

@media (max-width: 776px) {
    img {
        max-width: 80%;
    }

    .about-me{
        padding-left: 20px;
        padding-right: 20px;
    }

    .my-links{
        padding-left: 20px;
        padding-right: 20px;
    }

    .my-work{
        padding-left: 20px;
        padding-right: 20px;
    }

    .site-specs{
        padding-left: 20px;
        padding-right: 20px;
    }

    .site-specs .development {
        padding-bottom: 35px;
    }
}

.hero-home {
    background-image: url('src/assets/leaves.jpg');
    background: linear-gradient(rgba(75, 92, 62, 0.65), rgba(75, 92, 62, 0.65)), rgba(0, 0, 0, 0.55) url("src/assets/leaves.jpg") no-repeat;
    background-attachment: fixed;
    background-size: cover;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.hero-home .title {
    font-family: 'Caveat', sans-serif;
    transform: rotate(-4deg);
    font-size: 80px;
    color: whitesmoke;
}

.hero-home .subtitle {
    padding: 8px;
    font-size: 30px;
    color: whitesmoke;
}

.about-me,
.my-links,
.my-work,
.site-specs {
    padding-top: 80px;
    padding-bottom: 120px;
}

.about-me .title,
.my-links .title,
.my-work .title,
.site-specs .title {
    font-weight: bold;
    font-size: 34px;
    padding-top: 25px;
    padding-bottom: 40px;
}

.about-me .content {
    font-size: 22px;
}

.about-me img {
    border-radius: 15px;
    margin: 20px;
    box-shadow: 0 5px 20px rgba(14, 25, 80, 0.3);
}

.my-links {
    background: #4b5c3e;
}

.my-links .title {
    color: whitesmoke;
    padding-bottom: 55px;
}

.my-links .icon {
    font-size: 18px;
    padding-left: 45px;
    padding-right: 45px;
    color: whitesmoke;
}

.my-links .icon:hover {
    color: #7dd5fa;
}

.my-work .card {
    margin: 20px;
    max-width: 324px;
}

.my-work .card-header {
    background: #f7f5f5;
    border-bottom: 1px solid #e6e6e6;
    font-size: 20px;
    font-weight: bold;
}

.my-work .card-content {
    padding: 35px;
    background: #fafafa;
    font-size: 20px;
}

.my-work .card-footer-item {
    min-width: 162px;
    color: black;
    background: #f7f5f5;
    border-color: #e6e6e6;
    font-size: 18px;
}

.my-work .card-footer-item:hover {
    background: #60a3bf;
    color: whitesmoke;
}

.site-specs,
.site-specs .title,
.site-specs .subtitle {
    background: #4b5c3e;
    color: whitesmoke;
}

.site-specs .subtitle {
    font-size: 26px;
    font-weight: bold;
}

.site-specs .content {
    font-size: 22px;
}

.site-specs a {
    color: #60a3bf;
}

.site-specs a:hover {
    color: #7dd5fa;
}
</style>