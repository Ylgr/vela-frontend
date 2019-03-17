import Ajax from './ajax';

class GasWalletApi extends Ajax{
    getList() {
        return this.ajax().get('api/Gas')
    }

    get(id){
        return this.ajax().get('api/Gas/' + id)
    }

    addReport (data) {
        return this.ajax().post('api/AddReport', JSON.stringify(data), {headers: {'Content-Type': 'application/json'}})
    }
}

const gasWalletApi = new GasWalletApi();
export default gasWalletApi;
