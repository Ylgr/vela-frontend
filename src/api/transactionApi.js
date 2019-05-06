import Ajax from './ajax';

class TransactionApi extends Ajax{
    transfer (data) {
        return this.ajax().post('api/TransferGas', JSON.stringify(data), {headers: {'Content-Type': 'application/json'}})
    }
    clickTracking (data) {
        return this.ajax().post('api/ClickTracking', JSON.stringify(data), {headers: {'Content-Type': 'application/json'}})
    }
}

const transactionApi = new TransactionApi();
export default transactionApi;
