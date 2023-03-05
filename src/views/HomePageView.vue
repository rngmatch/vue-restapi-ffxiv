<script>
import axios from 'axios';

export default {
  name: 'HomePageView',
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
  <div >
    <main>
      <form class="flex gap-4 justify-center">
  <div class="flex-1">
    <input type="text" placeholder="Enter character name" v-model="name" class="w-flex"/>
  </div>
  <div class="flex-1">
    <input type="text" placeholder="Enter server name" v-model="server" class="w-flex"/>
  </div>
  <button type="submit" @click.prevent="searchCharacters" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Search
  </button>
</form>
    <ul v-if="characters.length" class="grid grid-flow-row grid-cols-5 gap-4">
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
    <p v-else class="text-center">No characters found.</p>

  </main>
  </div>

 

</template>



<style scoped lang="postcss">
body {
  background-color: #5bcfcd;
}
form {
  display: flex;
  height: 4rem;
  padding: 10px;
  margin: 10px;
  border-color: #1f2937;
 }

input[type="text"] {
  width: 100%;
  height: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  color: #072044;
  border: 1px solid #0a2f79;
  border-radius: 0.25rem;
  outline: none;  
}

input[type="text"]:focus {
  border-color: #60a5fa;
  background-color: rgb(25, 196, 68);
  box-shadow: 0 0 0 3px rgba(221, 44, 24, 0.5);
}

button[type="submit"] {
  height: 100%;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #7c3aed;
  border: none;
  border-radius: 0 0.25rem 0.25rem 0;
  outline: none;
}

button[type="submit"]:hover {
  background-color: #d334ce;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.1),
    0 3px 4px 0 rgba(0, 0, 0, 0.06), 0 1px 8px 0 rgba(0, 0, 0, 0.05);
}
ul {
  list-style-type: ;
  padding: 10px;
  margin: 10px;
}


li {
  border: 1px solid #109825;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
}

li:hover {
    background-color: #42b237;
}
</style>