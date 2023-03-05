/*
import axios from 'axios';
import { ref } from 'vue';

export function useApi() {
  const characters = ref([]);
  const searchCharacters = (name, server) => {
    axios.get(`https://xivapi.com/character/search?name=${name}&server=${server}`)
      .then(response => {
        characters.value = response.data.Results;
      })
      .catch(error => {
        console.error(error);
      });
  };

  return { characters, searchCharacters };
}
*/