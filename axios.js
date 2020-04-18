const axios = require('axios');

//var axios = require("react-native-axios");
const config = {
    headers: {
        Accept: 'application/json',
        Authorization: 'xxxxxxxxxxxx',
        'User-Agent': 'Node-axios'
    },
    data: null,
};
const data = axios.get('https://xxxxxxxx.com/admin/api/list/', config)
    .then(response => response)
    .then(result => {
        console.log('Result' + result.data.data);
        for (let i = 0; i < result.data.data.length; i++) {
            console.log('Iterador: ' + i);
            console.log('Tamano response: ' + result.data.data.length);
            console.log('Nombre : ' + result.data.data[i].user_name);
        }
    })
    .catch(error => console.log('error', error));