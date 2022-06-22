<script>
export default {
    data() {
        return {
            type: "character",
            phrase: "",
            results: [],
            details: {}
        };
    },
    methods: {
        async search(event) {
            try {
                event.preventDefault();
                this.clearPreviousSearch();
                const searchResults = await fetch(`http://youssefelzein.com/api/lotr/search/${this.type}?phrase=${this.phrase}`);
                this.results = (await searchResults.json()).results;
            }
            catch (err) {
                alert(err);
            }
        },
        async getDetails(id) {
            try {
                const searchDetails = await fetch(`http://youssefelzein.com/api/lotr/search/${this.type}/details`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        "phrase": this.phrase,
                        "resultCount": this.results.length,
                        id
                    })
                });
                this.details = await searchDetails.json();
            }
            catch (err) {
                alert(err);
            }
        },
        nextQuote() {
            if(this.details.randomQuoteIndex < this.details.quotes.length) {
                this.details.randomQuoteIndex++;
            } else {
                this.details.randomQuoteIndex = 0;
            }
        },
        clearPreviousSearch() {
            try {
                this.results = [];
                this.details = {};
            } catch(err) {
                alert(err);
            }
        },
        backToResults() {
            try {
                this.details = {};
            } catch(err) {
                alert(err);
            }
        }
    }
}
</script>

<template>
    <RouterLink class="home-icon" to="/#my-work">
        <i class="fa-solid fa-house"></i>
    </RouterLink>

    <section class="hero hero-lotr">
        <div class="hero-body columns is-centered is-vcentered is-mobile">
            <form class="form" @submit="search">
                <div class="field has-addons">
                    <div class="control">
                        <div class="select" v-on:click="clearPreviousSearch">
                            <select v-model="type">
                                <option value="book">Book</option>
                                <option value="character" selected>Character</option>
                                <option value="movie">Movie</option>
                            </select>
                        </div>
                    </div>
                    <div class="control">
                        <input class="input text-input" type="text" v-model="phrase" placeholder="Name"/>
                    </div>
                    <div class="control">
                        <button class="button">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </section>

    <section  v-if="!details.name" class="columns is-centered results">
        <div class="column has-text-centered is-5">
            <div v-for="result in results">
                <a href="#" v-on:click="getDetails(result.value)">{{ result.name }}</a>
            </div>
        </div>
    </section>
    <section v-else class="details">
        <a href="#" class="column has-text-centered" v-on:click="backToResults">Back</a>
        <div v-if="type === 'book'" class="column has-text-centered">
            <p><b>Name:</b> {{ details.name }}</p>
            <b>Chapters: </b>
            <div v-for="chapter in details.chapters">
                <p>{{ chapter.chapterName }}</p>
            </div>
        </div>
        <div v-else-if="type === 'movie'" class="columns is-centered">
            <div class="column is-4">
                <p><b>Name:</b> {{ details.name }}</p>
                <p><b>Runtime:</b> {{ details.runtimeInMinutes }} minutes</p>
                <p><b>Budget:</b> {{ details.budgetInMillions }} million</p>
                <p><b>Revenue:</b> {{ details.boxOfficeRevenueInMillions }} million</p>
            </div>
            <div class="column is-4">
                <p><b>Rotten Tomatoes:</b> {{ details.rottenTomatoesScore }}</p>
                <p>Nominated for <b>{{ details.academyAwardNominations }}</b> academy awards</p>
                <p>Won <b>{{ details.academyAwardWins }}</b> academy awards</p>
            </div>
        </div>
        <div v-else>
            <div class="columns is-centered">
                <div class="column is-4">
                    <p>
                        <b>Name:</b> {{ details.name }}
                    </p>
                    <p v-if="details.race && details.race !== 'NaN'">
                        <b>Race:</b> {{ details.race }}
                    </p>
                    <p v-if="details.birth && details.birth !== 'NaN'">
                        <b>Birth:</b> {{ details.birth }}
                    </p>
                </div>
                <div class="column is-4">
                    <p v-if="details.gender && details.gender !== 'NaN'">
                        <b>Gender:</b> {{ details.gender }}
                    </p>
                    <p v-if="details.height && details.height !== 'NaN'">
                        <b>Height:</b> {{ details.height }}
                    </p>
                    <p v-if="details.death && details.death !== 'NaN'">
                        <b>Death:</b> {{ details.death }}
                    </p>
                </div>
            </div>
            <div v-if="details.quotes.length !== 0">
                <div class="column has-text-centered">
                    <b>Random Quote:</b>
                </div>
                <div class="columns is-centered">
                    <div class="column is-8 has-text-centered">
                        <p>{{ details.quotes[details.randomQuoteIndex].dialog }}</p>
                    </div>
                </div>
                <div class="column has-text-centered">
                    <button class="button" v-on:click="nextQuote">New Quote</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
@media (max-width: 776px) {
    .details,
    .results {
        padding-left: 20px;
        padding-right: 20px;
    }
}

.home-icon {
    position: fixed;
    font-size: 32px;
    width: 50px;
    height: 50px;
    padding-left: 7px;
    background: var(--background-color-secondary);
    color: var(--text-primary-color);
}

.hero-lotr {
    height: 500px;
    background-image: url('https://pbs.twimg.com/media/EUY6LkDXsAE1akV.jpg');
    background: linear-gradient(rgba(75, 92, 62, 0.65), rgba(75, 92, 62, 0.65)), rgba(0, 0, 0, 0.55) url("https://pbs.twimg.com/media/EUY6LkDXsAE1akV.jpg") no-repeat;
    background-attachment: fixed;
    background-size: cover;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.button {
    background: var(--background-color-secondary);
    color:  var(--text-primary-color);
    font-size: 18px;
    height: 45px;
}

.button:hover {
    background: var(--link-secondary-color);
    color: var(--background-color-alt);
}

.hero-lotr select,
.hero-lotr .text-input {
    background: var(--background-color-primary);
    color:  var(--text-primary-color);
    font-size: 18px;
    height: 45px;
}

.back,
.results a,
.details a {
    color: var(--link-primary-color);
}

.home-icon:hover,
.back:hover,
.results a:hover,
.details a:hover {
    color: var(--link-secondary-color);
}

.details,
.results {
    padding-top: 15px;
    font-size: 22px;
}
</style>