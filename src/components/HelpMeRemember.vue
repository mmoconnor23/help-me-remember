<template>
  <div class="hello">
    {{msg}}
    <!--<vue-bootstrap-typeahead
    :data="typeaheadMovies"
    v-model="movieSearch"
    size="lg"
    placeholder="Type a movie..."
    @hit="selectedMovie = $event"
  >-->
    <b-form-input v-for="movie in movies"
                  v-model="movie.title"
                  placeholder="Enter the name of a movie"></b-form-input>
    <b-button @click="addMovieSlot()">Add another</b-button>

    <b-button @click="searchMovies()">Search</b-button>

    Intersection actors/actresses: {{similarities}}
  </div>
</template>

<script>
import * as MovieDB from 'moviedb-promise'
import {intersection} from 'lodash'

const moviedb = new MovieDB('b20efe3d3077bcff85cc23b043c83751')

async function search(movie) {
  return moviedb.searchMovie({ query: movie.title })
}

async function getActors(movieId) {
  return moviedb.movieCredits({id: movieId})
}

export default {
  name: 'HelpMeRemember',
  props: {
    msg: String
  },
  data() {
    return {
      movies: [{title: ''}],
      similarities: []
    }
  },
  methods: {
    addMovieSlot() {
      this.movies.push({title: ''})
    },
    async searchMovies() {
      const results = await Promise.all(this.movies.map((movie) => search(movie)))
      const movieIds = results.map((result) => {
        if (result.results) {
          return result.results[0].id;
        }
      })
      const credits = await Promise.all(movieIds.map((movieId) => getActors(movieId)))
      const actors = credits.map((credit) => {
        if (credit.cast) {
          return credit.cast.map((actor) => actor.name)
        }
      })

      this.similarities = intersection(...actors)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
