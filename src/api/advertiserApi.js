import Ajax from './ajax';

class AdvertiserApi extends Ajax{
    get(id){
        return this.ajax().get('api/Advertiser/' + id)
    }
}

const advertiserApi = new AdvertiserApi();
export default advertiserApi;
