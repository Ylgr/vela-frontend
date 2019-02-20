import Ajax from './ajax';

class GasTransferApi extends Ajax{
    transfer (data) {
        return this.ajax().post('api/TransferGas', JSON.stringify(data), {headers: {'Content-Type': 'application/json'}})
    }
}

const gasTransferApi = new GasTransferApi();
export default gasTransferApi;
