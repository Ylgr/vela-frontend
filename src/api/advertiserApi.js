import Ajax from './ajax';

class AdvertiserApi extends Ajax{
    get(id){
        return this.ajax().get('api/Advertiser/' + id)
    }

    create (data) {
        return this.ajax().post('api/Advertiser', JSON.stringify(data), {headers: {'Content-Type': 'application/json'}})
    }
}

const advertiserApi = new AdvertiserApi();
export default advertiserApi;
