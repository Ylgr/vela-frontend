import Ajax from './ajax';

class GasWalletApi extends Ajax{
    get() {
        return this.ajax().get('api/Gas')
    }
}

const gasWalletApi = new GasWalletApi();
export default gasWalletApi;
