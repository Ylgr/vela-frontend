import Ajax from './ajax';

class AdApi extends Ajax{
    create (data) {
        return this.ajax().post('api/AdReport', JSON.stringify(data), {headers: {'Content-Type': 'application/json'}})
    }

    get(id) {
        return this.ajax().get('api/AdReport/' + id)
    }
}

const adApi = new AdApi();
export default adApi;
