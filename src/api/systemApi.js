import Ajax from './ajax';

class SystemApi extends Ajax{
    getHistorian() {
        return this.ajax().get('api/system/historian')
    }
    getPing() {
        return this.ajax().get('api/system/ping')
    }
}

const systemApi = new SystemApi();
export default systemApi;
