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
   <div>
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
        <p>Lang: {{ character.Lang }}</p>
        <p>Rank: {{ character.Rank }}</p>
        <p>RankIcon: {{ character.RankIcon }}</p>
        <p>FeastMatches: {{ character.FeastMatches }}</p>
        <p>Avatar: <img :src="character.imageUrl"/> </p>
      </li>
    </ul>
    <p v-else>No characters found.</p>
  </div>

</template>







