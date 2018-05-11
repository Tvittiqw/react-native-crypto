import axios from 'axios';
axios.defaults.headers.common = {
    // 'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json'
};

export const baseURL = `localhost:3000`;

const apiClient = axios.create({
    baseURL,
});

//Update header after each api call
// apiClient.interceptors.response.use(function (response) {
//   if(response.headers.authorization){
//     setToken(response.headers.authorization.replace('Bearer ', ''));
//   }
//   return response;
// }, function (error) {
//   return Promise.reject(error);
// });


export function setToken(header) {

}

export function removeToken() {

}

export default apiClient;
