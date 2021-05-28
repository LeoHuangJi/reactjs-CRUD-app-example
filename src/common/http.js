import axios from 'axios';

const http = axios.create({
    baseURL: 'https://localhost:5001/api/v1',
    headers: {
        'Content-type': 'application/json'
    }
});

axios.interceptors.response.use(
    function (response) {
        // response data
        return response;
    },
    function (error) {
        let text = '';
        if (error.response.data) {
            text = 'error: ' + error.response.data.error.code + ' || ' + error.response.data.error.message;
        } else if (error.message) {
            // network down
            text = error.message + ' || Server is Down ?';
        } else {
            // http status code and data
            text = error.response.status + ' || ' + error.response.data;
        }
        console.log('axios error message: ', text)

        if (isNetworkError(error)) return alert('check your connection');
        throw error;
        // return Promise.reject( error.message );
    });
function isNetworkError(err) {
    alert('network error')
    return !!err.isAxiosError && !err.response;
}
export default http;