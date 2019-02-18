import axios from 'axios';

class Ajax {
    constructor () {
        this.apiHost = "http://localhost:3000/"
    }

    ajax (loading = true) {
        return axios.create({
            baseURL: this.apiHost,
            responseType: 'json',
            crossDomain: true,
            withCredentials: true,
            transformResponse: [function (data) {
                return data;
            }]
        })
    }
}
export default Ajax
