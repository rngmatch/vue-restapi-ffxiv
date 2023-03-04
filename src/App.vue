<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      name: '',
      server: '',
      characters: []
    };
  },
  methods: {
    searchCharacters() {
      axios.get(`https://xivapi.com/character/search?name=${this.name}&server=${this.server}`)
        .then(response => {
          this.characters = response.data.Results;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-r from-fuchsia-900 to-blue-700 py-8 text-white">
    <form @submit.prevent="searchCharacters">
      <label for="name">Character Name:</label>
      <input id="name" type="text" v-model="name">
      <label for="server">Server:</label>
      <input id="server" type="text" v-model="server">
      <button type="submit">Search</button>
    </form>
    <ul v-if="characters.length">
      <li v-for="character in characters" :key="character.ID">
        <h2>{{ character.Name }}</h2>
        <p>Server: {{ character.Server }}</p>
        <p>Class: {{ character.ActiveClassJob.JobName }}</p>
      </li>
    </ul>
    <p v-else>No characters found.</p>
  </div>
</template>



<style>
  /* Add any custom styles you need here */
  main {
    min-height: 100vh;
    background-image: linear-gradient(to right, #9B2DEF, #3958C8);
    padding: 8px;
    color: rgb(123, 31, 31);
  }
</style>

<main>
  <App />
</main>