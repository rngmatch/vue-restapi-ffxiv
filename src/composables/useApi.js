import axios from 'axios';

axios.get('https://xivapi.com')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
