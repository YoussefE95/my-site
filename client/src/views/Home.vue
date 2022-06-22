<script>
    import HomeNav from '@/components/HomeNav.vue';

    export default {
        mounted() {
            const section = this.$router.currentRoute.value.hash.replace("#", "");
            if (section)
                this.$nextTick(() => window.document.getElementById(section).scrollIntoView());
        },
        components: {
            HomeNav
        }
    }
</script>

<template>
    <main>
        <HomeNav />

        <section class="hero is-large hero-home" id="home">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h2 class="title">Youssef Elzein</h2>
                    <h1 class="subtitle">A Full Stack Web Developer</h1>
                </div>
            </div>
        </section>

        <section class="about-me uncolored-section" id="about-me">
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

        <section class="my-links colored-section" id="my-links" data-aos="fade-in" data-aos-duration="1300">
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

        <section class="my-work uncolored-section" id="my-work">
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
                            <RouterLink class="card-footer-item preview-button" to="/lotr">Preview</RouterLink>                               
                            <a class="card-footer-item" href="https://github.com/YoussefE95/middle-earth-info" target="_blank">
                                Source Code
                            </a>
                        </footer>
                    </div>
                </div>
            </div>
        </section>

        <section class="site-specs colored-section" id="site-specs" data-aos="fade-in" data-aos-duration="1300">
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

.uncolored-section,
.uncolored-section .title,
.uncolored-section .subtitle,
.uncolored-section .icon {
    color: var(--text-primary-color);
}


.colored-section,
.colored-section .title,
.colored-section .subtitle,
.colored-section .icon {
    background: var(--background-color-alt);
    color: var(--text-primary-color);
}

.hero-home {
    background-image: url('https://raw.githubusercontent.com/catppuccin/wallpapers/main/waves/wavy_lines_v03_5120x2880.png');
    background: linear-gradient(var(--hero-gradient), var(--hero-gradient)), rgba(0, 0, 0, 0.55) url("https://raw.githubusercontent.com/catppuccin/wallpapers/main/landscapes/evening-sky.png") no-repeat;
    background-attachment: fixed;
    background-size: cover;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.hero-home .title {
    font-family: 'Caveat', sans-serif;
    transform: rotate(-4deg);
    font-size: 80px;
    color: var(--background-color-secondary);
}

.hero-home .subtitle {
    padding: 8px;
    font-size: 30px;
    color: var(--background-color-secondary);
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

.my-links .title {
    padding-bottom: 55px;
}

.my-links .icon {
    font-size: 18px;
    padding-left: 45px;
    padding-right: 45px;
    color: var(--link-primary-color);
}

.my-links .icon:hover {
    color: var(--link-secondary-color);
}

.my-work .card {
    margin: 20px;
    max-width: 324px;
    background: var(--background-color-secondary);
    color: var(--text-primary-color);
}

.my-work .card-header-title {
    color: var(--text-primary-color);
    font-weight: bold;
}

.my-work .card-header-title,
.my-work .card-content {
    border-bottom: 1px solid var(--accent-color);
    font-size: 20px;
}

.my-work .preview-button {
    border-right: 1px solid var(--accent-color);
}

.my-work .card-footer-item {
    color: var(--link-primary-color);
    min-width: 162px;
    font-size: 18px;
}

.my-work .card-footer-item:hover {
    background: var(--link-secondary-color);
    color: var(--background-color-alt);
}

.site-specs .subtitle {
    font-size: 26px;
    font-weight: bold;
}

.site-specs .content {
    font-size: 22px;
}

.site-specs a {
    color: var(--link-primary-color);
}

.site-specs a:hover {
    color: var(--link-secondary-color);
}
</style>