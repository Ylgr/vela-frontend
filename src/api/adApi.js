import Ajax from './ajax';

class AdApi extends Ajax{
    transfer (data) {
        return this.ajax().post('api/AdReport', JSON.stringify(data), {headers: {'Content-Type': 'application/json'}})
    }
}

const adApi = new AdApi();
export default adApi;
