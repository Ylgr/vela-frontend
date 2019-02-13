import Ajax from './ajax';

class GasWalletApi extends Ajax{
    get() {
        return this.ajax().get('api/Gas')
    }
}

export default GasWalletApi;
