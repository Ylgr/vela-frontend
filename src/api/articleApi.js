import Ajax from './ajax';

class ArticleApi extends Ajax{
    getAllActive() {
        return this.ajax().get('api/queries/GetAllActiveAd')
    }
}

const articleApi = new ArticleApi();
export default articleApi;
