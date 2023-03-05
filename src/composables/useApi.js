import axios from 'axios';

axios.get('https://xivapi.com/', {
    //params: {
        //name: "Y'shtola Rhul",
        //server: 'Balmung',
        //api_key: 'YOUR_API_KEY_HERE'
    //}
})
.then(response => {
    console.log(response.data.Results);
})
.catch(error => {
    console.error(error);
});
