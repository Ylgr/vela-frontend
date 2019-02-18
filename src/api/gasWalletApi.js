import Ajax from './ajax';

class GasWalletApi extends Ajax{
    getList() {
        return this.ajax().get('api/Gas')
    }

    get(id){
        return this.ajax().get('api/Gas/' + id)
    }
}

const gasWalletApi = new GasWalletApi();
export default gasWalletApi;
