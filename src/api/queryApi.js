import Ajax from './ajax';

class QueryApi extends Ajax {
    getAllActiveAd() {
        return this.ajax().get('api/queries/GetAllActiveAd')
    }
    getRewardableWallet() {
        return this.ajax().get('api/queries/GetRewardableWallet')
    }
}

const queryApi = new QueryApi();
export default queryApi;